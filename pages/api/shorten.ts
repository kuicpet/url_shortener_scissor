import { NextApiRequest, NextApiResponse } from 'next';
import mongoose from 'mongoose';
import shortid from 'shortid';
// import bcrypt from 'bcrypt';
// import jwt from 'jsonwebtoken';
// import cookie from 'cookie-parser';

import Url, { IUrl } from '../../models/Url';
//import User, { IUser } from '../../models/User';

mongoose.connect(`${process.env.MONGODB_URI}`);

export default async function shorten(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { originalUrl } = req.body;
  try {
    // Generate a unique short url
    const shortUrl = shortid.generate();

    // add url to db
    const url: IUrl = await Url.create({
      originalUrl,
      shortUrl,
    });
    // send response to client
    res.status(201).json({
      success: true,
      shortUrl: `${process.env.BASE_URL}/${url.shortUrl}`,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({
      success: false,
      message: 'An error occurred while shortening the URL',
    });
  }
}
