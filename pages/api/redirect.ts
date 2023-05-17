import { NextApiRequest, NextApiResponse } from 'next';
import Url, { IUrl } from '../../models/Url';
import { connect, disconnect } from '../../utils/db';

export default async function redirect(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { slug } = req.query;
  try {
    await connect();
    const url: IUrl | null = await Url.findOne({ shortUrl: slug });
    console.log(slug);
    if (url) {
      url.save();
      return res.redirect(url.originalUrl);
    } else {
      return res.status(404).json({ success: false, message: 'Url not Found' });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({
      success: false,
      message: 'An error occurred while redirecting',
    });
  }
}
