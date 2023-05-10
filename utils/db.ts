import mongoose from 'mongoose';

const connect = async () =>
  mongoose.connect(`${process.env.NEXT_PUBLIC_MONGODB_URI}`);
console.log('db connected');

export default connect;
