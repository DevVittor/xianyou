import categorys from "@/enum/categorys.js";
import ratings from "@/enum/ratings.js";
import mongoose, { Schema, model, Document } from "mongoose";

export interface ISupplier extends Document {
  _id: mongoose.Types.ObjectId;
  createdBy: mongoose.Types.ObjectId;
  avatar: string;
  supplier: string;
  sales: number;
  notice: number;
  rating: string;
  category: string[];
  link: string;
  blocked: boolean;
  createdAt: Date;
  updatedAt: Date;
}

const supplierSchema = new Schema<ISupplier>(
  {
    createdBy: {
      type: mongoose.Types.ObjectId,
      ref: "users",
      required: true,
    },
    avatar: {
      type: String,
      required: true,
    },
    supplier: {
      type: String,
      required: true,
    },
    sales: {
      type: Number,
      required: true,
    },
    notice: {
      type: Number,
      required: true,
    },
    rating: {
      type: String,
      enum: ratings,
      required: true,
    },
    category: {
      type: [String],
      enum: categorys,
      maxlength: 3,
    },
    link: {
      type: String,
      unique: true,
    },
    blocked: {
      type: Boolean,
      default: false,
    },
  },
  { timestamps: true }
);

const supplier = model<ISupplier>("suppliers", supplierSchema);

export default supplier;
