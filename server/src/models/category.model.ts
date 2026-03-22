import categorys from "@/enum/categorys.js";
import mongoose, { Schema, model, Document } from "mongoose";

export interface ICategory extends Document {
  _id: mongoose.Types.ObjectId;
  createdBy: mongoose.Types.ObjectId;
  category: string;
  supplierId: mongoose.Types.ObjectId[];
  blocked: boolean;
  createdAt: Date;
  updatedAt: Date;
}

const categorySchema = new Schema<ICategory>(
  {
    createdBy: {
      type: mongoose.Types.ObjectId,
      ref: "users",
      required: true,
    },
    category: {
      type: String,
      enum: categorys,
      required: true,
      lowercase: true,
      unique: true,
    },
    supplierId: [
      {
        type: mongoose.Types.ObjectId,
        ref: "suppliers",
      },
    ],
    blocked: {
      type: Boolean,
      default: false,
    },
  },
  { timestamps: true }
);

const category = model<ICategory>("categorys", categorySchema);

export default category;
