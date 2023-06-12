import { Document, Schema, model, models } from 'mongoose';
// eslint-disable-next-line prettier/prettier

export interface IClick {
  clickedAt: Date;
  ipAddress: string;
  location: string;
}
export interface IUrl extends Document {
  originalUrl: string;
  customText?: string;
  customDomain?: string;
  shortUrl: string;
  createdAt: Date;
  clicks: IClick[];
}

const urlSchema = new Schema<IUrl>(
  {
    originalUrl: {
      type: String,
      required: true,
    },
    customText: {
      type: String,
      unique: true,
      sparse: true,
    },
    customDomain: {
      type: String,
      unique: true,
    },
    shortUrl: {
      type: String,
      required: true,
      unique: true,
    },
    createdAt: {
      type: Date,
      default: Date.now,
    },
    clicks: [
      {
        clickedAt: {
          type: Date,
          required: true,
        },
        ipAddress: {
          type: String,
          required: true,
        },
        location: {
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

const Url = models.Url || model<IUrl>('Url', urlSchema);
export default Url;
