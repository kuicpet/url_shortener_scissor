import { Document, Schema, model, models } from 'mongoose';
// eslint-disable-next-line prettier/prettier

export interface IUrl extends Document {
  originalUrl: string;
  shortUrl: string;
  createdAt: Date;
}

const urlSchema = new Schema<IUrl>({
  originalUrl: {
    type: String,
    required: true,
  },
  shortUrl: {
    type: String,
    required: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

const Url = models.Url || model<IUrl>('Url', urlSchema);
export default Url;
