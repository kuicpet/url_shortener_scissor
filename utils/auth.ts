import jwt from 'jsonwebtoken';

interface User {
  _id: string;
  email: string;
}
const signToken = (user: any): string => {
  const token = jwt.sign(
    {
      _id: user._id,
      email: user.email,
    },
    process.env.JWT_SECRET as string,
    { expiresIn: '300' }
  );
  return token;
};

export { signToken };
