import { NextApiRequest, NextApiResponse } from 'next';
import mongoose from 'mongoose';
import shortid from 'shortid';
// import bcrypt from 'bcrypt';
// import jwt from 'jsonwebtoken';
// import cookie from 'cookie-parser';

import Url, { IUrl } from '../../models/Url';
//import User, { IUser } from '../../models/User';

mongoose.connect(`${process.env.NEXT_PUBLIC_MONGODB_URI}`);

export default async function shorten(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { originalUrl, customText } = req.body;
  if (!originalUrl) {
    return res.status(400).json({ error: 'Please enter a url' });
  }
  try {
    // Generate a unique short url
    let shortUrl: string;
    if (customText) {
      const existingUrl = await Url.findOne({ shortUrl: customText });
      if (existingUrl) {
        res.status(400).json({
          success: false,
          massage: 'Custom text already exists.Please choose another',
        });
        return;
      }
      shortUrl = customText;
    } else {
      shortUrl = shortid.generate();
    }
    // add url to db
    const url: IUrl = await Url.create({
      originalUrl,
      shortUrl,
    });
    // send response to client
    res.status(201).json({
      success: true,
      shortUrl: `${process.env.NEXT_PUBLIC_BASE_URL}/${url.shortUrl}`,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({
      success: false,
      message: 'An error occurred while shortening the URL',
    });
  }
}
