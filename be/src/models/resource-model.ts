import mongoose from 'mongoose';

export interface IResource extends mongoose.Document {
  title: string;
  type: 'video' | 'file' | 'link';
  url: string;
  description: string;
  educator: mongoose.Schema.Types.ObjectId;
  createdAt: Date;
  updatedAt: Date;
  registeredStudents: string[];
}

const resourceSchema = new mongoose.Schema<IResource>(
  {
    title: {
      type: String,
      required: true,
    },
    type: {
      type: String,
      enum: ['video', 'file', 'link'],
      required: true,
    },
    url: {
      type: String,
    },
    educator: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User',
      required: true,
    },
    createdAt: {
      type: Date,
      default: Date.now,
    },
    registeredStudents: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
      },
    ],
    description: String,
  },
  {
    timestamps: true,
    strict: true,
  },
);

const Resource = mongoose.model<IResource>('Resource', resourceSchema);

export default Resource;
