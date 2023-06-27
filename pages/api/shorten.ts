import { NextApiRequest, NextApiResponse } from 'next';
import shortid from 'shortid';
import { connect } from '../../utils/db';

import Url, { IUrl } from '../../models/Url';

export default async function shorten(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { originalUrl, customText, customDomain } = req.body;

  // URL validation
  const urlPattern = /^(https?|ftp):\/\/[^\s/$.?#].[^\s]*$/i;
  if (!urlPattern.test(originalUrl)) {
    return res
      .status(400)
      .json({ success: false, message: 'Invalid URL format' });
  }

  if (!originalUrl) {
    return res.status(400).json({ error: 'Please enter a URL' });
  }

  try {
    // Connect to the database
    await connect();

    // Check if the original URL already exists in the database
    /*const existingOriginalUrl = await Url.findOne({ originalUrl });
    if (existingOriginalUrl) {
      return res.status(400).json({
        success: false,
        message: 'This URL has already been shortened',
      });
    }*/

    // Generate a unique short URL
    let shortUrl: string;
    if (customText) {
      const existingUrl = await Url.findOne({ shortUrl: customText });
      if (existingUrl) {
        return res.status(200).json({
          shortUrl: existingUrl.shortUrl,
          message: 'URL already exists',
        });
      }
      shortUrl = customText;
    } else if (customDomain && customText) {
      const existingCustomUrl = await Url.findOne({
        shortUrl: `${customDomain}/${customText}`,
      });
      if (existingCustomUrl) {
        return res.status(400).json({
          success: false,
          message: 'Custom domain already exists. Please choose another',
        });
      }
      shortUrl = `${customDomain}/${customText}`;
    } else {
      shortUrl = shortid.generate();
    }

    // Create a new click object
    const newClick = {
      clickedAt: new Date(),
      ipAddress:
        req.headers['x-forwarded-for'] || req.connection.remoteAddress || '',
      location: '', // Set the initial location value to an empty string or provide the correct value
    };

    // Create a new URL object
    const newUrl: IUrl = new Url({
      originalUrl,
      shortUrl: customDomain ? `${customDomain}/${shortUrl}` : shortUrl,
      clicks: [newClick],
    });

    // Save the URL object to the database
    await newUrl.save();

    // Return the response to the client
    return res.status(201).json({
      success: true,
      message: 'URL successfully shortened',
      shortUrl: newUrl.shortUrl,
      originalUrl: newUrl.originalUrl,
      customDomain: newUrl.customDomain,
      clicks: newUrl.clicks,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({
      success: false,
      message: 'An error occurred while shortening the URL',
    });
  }
}
