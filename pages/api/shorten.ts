import { NextApiRequest, NextApiResponse } from 'next';
import shortid from 'shortid';
import { connect } from '../../utils/db';

import Url, { IUrl } from '../../models/Url';

export default async function shorten(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { originalUrl, customText, customDomain } = req.body;

  const urlPattern =
    /^(https?|ftp):\/\/[^\s/$.?#].[^\s]*$/i ||
    /^(?:(?:(?:https?|ftp):)?\/\/)(?:\S+(?::\S*)?@)?(?:(?!(?:10|127)(?:\.\d{1,3}){3})(?!(?:169\.254|192\.168)(?:\.\d{1,3}){2})(?!172\.(?:1[6-9]|2\d|3[0-1])(?:\.\d{1,3}){2})(?:[1-9]\d?|1\d\d|2[01]\d|22[0-3])(?:\.(?:1?\d{1,2}|2[0-4]\d|25[0-5])){2}(?:\.(?:[1-9]\d?|1\d\d|2[0-4]\d|25[0-4]))|(?:(?:[a-z0-9\u00a1-\uffff][a-z0-9\u00a1-\uffff_-]{0,62})?[a-z0-9\u00a1-\uffff]\.)+(?:[a-z\u00a1-\uffff]{2,}\.?))(?::\d{2,5})?(?:[/?#]\S*)?$/i;
  if (!urlPattern.test(originalUrl)) {
    return res
      .status(400)
      .json({ success: false, message: 'Invalid Url format' });
  }
  if (!originalUrl) {
    return res.status(400).json({ error: 'Please enter a url' });
  }
  try {
    // Connect to db
    await connect();

    // Check if originalurl already exists in db
    const existingOriginalurl = await Url.findOne({ originalUrl });
    if (existingOriginalurl) {
      return res.status(400).json({
        success: false,
        message: 'This Url has already been shortened',
        // shortUrl: existingOriginalurl.shortUrl,
      });
    }
    // Generate a unique short url
    let shortUrl: string;
    if (customText) {
      const existingUrl = await Url.findOne({ shortUrl: customText });
      if (existingUrl) {
        return res.status(200).json({
          shortUrl: existingUrl.shortUrl,
          message: 'Url already exist',
        });
      }
      shortUrl = customText;
    } else if (customDomain && customText) {
      const existingCustomUrl = await Url.findOne({
        shorturl: `${customDomain}/${customText}`,
      });
      if (existingCustomUrl) {
        res.status(400).json({
          success: false,
          massage: 'Custom Domain already exists.Please choose another',
        });
        return;
      }
      shortUrl = `${customDomain}/${customText}`;
    } else {
      shortUrl = shortid.generate();
    }
    // add url to db
    /*const newUrl: IUrl = await Url.create({
      originalUrl: originalUrl,
      shortUrl: shortUrl,
    });*/
    const newUrl: IUrl = new Url({
      originalUrl: originalUrl,
      shortUrl: customDomain ? `${customDomain}/${shortUrl}` : shortUrl,
    });
    await newUrl.save();

    // console.log(newUrl);
    // const baseUrl = process.env.NEXT_PUBLIC_BASE_URL;

    // send response to client
    return res.status(201).json({
      success: true,
      message: 'Url successfully shortened',
      shortUrl: newUrl.shortUrl,
      originalUrl: newUrl.originalUrl,
      customDomian: newUrl.customDomain,
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
