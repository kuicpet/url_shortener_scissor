import { NextApiRequest, NextApiResponse } from 'next';
import Url, { IUrl, IClick } from '../../../models/Url';
import { connect } from '../../../utils/db';

export default async function track(req: NextApiRequest, res: NextApiResponse) {
  const { slug } = req.body;
  try {
    await connect();
    const url: IUrl | null = await Url.findOne({ slug });

    if (!url) {
      res.status(404).json({
        success: false,
        message: 'Url not found',
      });
      return;
    }
    // Get visitor's IP address
    const ipAddress =
      (req.headers['x-forwarded-for'] as string) || req.socket.remoteAddress!;

    // Update url clicks and store Ip address
    url.clicks.push({
      clickedAt: new Date(),
      ipAddress,
    });
    await url.save();

    res.status(200).json({
      success: true,
      data: {
        originalUrl: url.originalUrl,
      },
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({
      success: false,
      message: 'An error occurred while shortening the URL',
    });
  }
}
