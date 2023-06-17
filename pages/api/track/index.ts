import { NextApiRequest, NextApiResponse } from 'next';
import Url, { IUrl, IClick } from '../../../models/Url';
import { connect } from '../../../utils/db';

export default async function track(req: NextApiRequest, res: NextApiResponse) {
  try {
    await connect();
    const urls: any = await Url.find({});
    res.status(200).json({
      success: true,
      urls,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({
      success: false,
      message: 'An error occurred while shortening the URL',
    });
  }
}
