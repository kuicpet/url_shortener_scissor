import { NextApiRequest, NextApiResponse } from 'next';
import bcrypt from 'bcryptjs';
import User, { IUser } from '../../../models/User';
import { connect } from '../../../utils/db';
import { signToken } from '../../../utils/auth';

export default async function register(
  req: NextApiRequest,
  res: NextApiResponse
): Promise<void> {
  const { username, email, password } = req.body;
  try {
    if (!password || typeof password !== 'string') {
      throw new Error('Password is required'); // Add validation for the password
    }
    await connect();
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res
        .status(400)
        .json({ message: 'User with this email already exists ' });
    }
    // Hasg password
    const hashedPassword = await bcrypt.hash(password, 10); // Use async hashing
    // Create a new user
    const newUser: IUser = new User({
      username,
      email,
      password: hashedPassword,
    });
    const user = await newUser.save();
    const token = signToken(user);
    res.status(201).json({
      token,
      _id: user._id,
      username: user.username,
      email: user.email,
      message: 'User registration succesful',
    });
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
        message: 'An error occurred registering the user',
      });
    }
  }
}
