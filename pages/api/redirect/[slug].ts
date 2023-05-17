import { NextApiRequest, NextApiResponse } from 'next';
import Url, { IUrl } from '../../../models/Url';
import { connect } from '../../../utils/db';

export default async function redirect(
  req: NextApiRequest,
  res: NextApiResponse
) {
  await connect();
  const { slug } = req.query;
  try {
    const url = await Url.findOne({ shortUrl: slug });
    if (url) {
      // url.clicks++;
      await url.save();
      // Redirect to originalUrl
      return res.status(301).redirect(url.originalUrl);
    } else {
      return res.status(404).json({ success: false, message: 'Url not Found' });
    }
  } catch (error) {
    console.log('An error occurred while redirecting', error);
    res.status(500).json({ success: false, message: 'Internal server error' });
  }
}
