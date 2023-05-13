import { NextApiRequest, NextApiResponse } from 'next';
// import mongoose from 'mongoose';
import shortid from 'shortid';
import { connect, disconnect } from '../../utils/db';
// import bcrypt from 'bcrypt';
// import jwt from 'jsonwebtoken';
// import cookie from 'cookie-parser';

import Url, { IUrl } from '../../models/Url';
//import User, { IUser } from '../../models/User';

// mongoose.connect(`${process.env.NEXT_PUBLIC_MONGODB_URI}`);

export default async function shorten(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { originalUrl, customText } = req.body;
  if (!originalUrl) {
    return res.status(400).json({ error: 'Please enter a url' });
  }
  try {
    await connect();
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
    const newUrl = await Url.create({
      originalUrl: originalUrl,
      shortUrl: shortUrl,
    });
    // send response to client
    return res.status(201).json({
      success: true,
      shortUrl: newUrl.shortUrl,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({
      success: false,
      message: 'An error occurred while shortening the URL',
    });
  }
}
