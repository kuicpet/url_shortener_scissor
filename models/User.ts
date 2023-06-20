import { Document, Schema, model, models } from 'mongoose';

export interface IUser extends Document {
  username: string;
  email: string;
  password: string;
  shortenedUrls: Array<{ originalUrl: string; shortUrl: string }>;
}

const userSchema = new Schema<IUser>(
  {
    username: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
    },
    shortenedUrls: [
      {
        originalUrl: {
          type: String,
          required: true,
        },
        shortUrl: {
          type: String,
          required: true,
        },
      },
    ],
  },
  {
    timestamps: true,
  }
);

const User = models.User || model<IUser>('User', userSchema);
export default User;
