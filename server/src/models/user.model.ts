import mongoose, { Schema, model, Document } from "mongoose";

export interface IUser extends Document {
  _id: mongoose.Types.ObjectId;
  tag: string;
  username: string;
  email: string;
  password: string;
  suppliers: mongoose.Types.ObjectId[];
  role: string;
  blocked: boolean;
  createdAt: Date;
  updatedAt: Date;
}

const userSchema = new Schema<IUser>(
  {
    tag: {
      type: String,
      required: true,
      unique: true,
    },
    username: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
      lowercase: true,
      trim: true,
    },
    password: {
      type: String,
      required: true,
      trim: true,
    },
    suppliers: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "suppliers",
      },
    ],
    role: {
      type: String,
      enum: ["user", "manager", "admin"],
    },
    blocked: {
      type: Boolean,
      default: true,
    },
  },
  { timestamps: true }
);

const user = model<IUser>("users", userSchema);

export default user;
