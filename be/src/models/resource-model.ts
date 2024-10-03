import mongoose from 'mongoose';

export interface IResource extends mongoose.Document {
  name: string;
  type: 'video' | 'file' | 'image';
  url: string;
  educator: mongoose.Schema.Types.ObjectId;
  createdAt: Date;
  updatedAt: Date;
  registeredStudents: string[];
}

const resourceSchema = new mongoose.Schema<IResource>(
  {
    name: {
      type: String,
      required: true,
    },
    type: {
      type: String,
      enum: ['video', 'file', 'image'],
      required: true,
    },
    url: {
      type: String,
      required: true,
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
  },
  {
    timestamps: true,
  },
);

const Resource = mongoose.model<IResource>('Resource', resourceSchema);

export default Resource;
