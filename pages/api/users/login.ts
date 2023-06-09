import { NextApiRequest, NextApiResponse } from 'next';
import bcrypt from 'bcryptjs';
import User, { IUser } from '../../../models/User';
import { connect } from '../../../utils/db';
import { signToken } from '../../../utils/auth';

export default async function login(
  req: NextApiRequest,
  res: NextApiResponse
): Promise<void> {
  const { email, password } = req.body;
  try {
    if (!password || typeof password !== 'string') {
      throw new Error('Password is required'); // Add validation for the password
    }
    await connect();
    const user = await User.findOne({ email });
    if (user && bcrypt.compareSync(password, user.password)) {
      const token = signToken(user);
      res.status(200).json({
        token,
        _id: user._id,
        email: user.email,
        username: user.username,
        message: 'User Login successful',
      });
    } else {
      res.status(401).json({ message: 'Invalid User email or password' });
    }
  } catch (error: any) {
    console.error(error);
    if (error.name === 'ValidationError') {
      res.status(400).json({
        success: false,
        message: 'Invalid input data',
      });
    } else if (error.name === 'MongoError' && error.code === 11000) {
      res.status(409).json({
        success: false,
        message: 'User already exists',
      });
    } else {
      res.status(500).json({
        success: false,
        message: 'An error occurred logging the user',
      });
    }
  }
}
