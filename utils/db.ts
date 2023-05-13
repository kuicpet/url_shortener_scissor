import mongoose from 'mongoose';

const connect = async () =>
  mongoose.connect(`${process.env.NEXT_PUBLIC_MONGODB_URI}`);
console.log('db connected');

const disconnect = async () => {
  if (process.env.NODE_ENV === 'production') {
    await mongoose.disconnect();
    console.log('db disconnected');
  }
};
export { connect, disconnect };
