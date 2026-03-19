import supplier from "@/models/supplier.model.js";
import user from "@/models/user.model.js";
import { type Request, type Response } from "express";
import { Types } from "mongoose";
import { z } from "zod";

const dataSupplier = z.object({
  userId: z.coerce.string().refine((val) => Types.ObjectId.isValid(val), {
    error: "Não foi possível localizar o id de usuário",
  }),
  avatar: z.coerce.string(),
  supplier: z.coerce.string(),
  sales: z.coerce.number(),
  notice: z.coerce.number(),
  rating: z.enum(["L5", "L6", "L7"]),
  link: z.coerce.string(),
});

type typeSupplier = z.infer<typeof dataSupplier>;

const createdSupplier = async (req: Request, res: Response): Promise<void> => {
  const validationData = dataSupplier.safeParse(req.body);
  if (!validationData.success) {
    res.status(400).json({
      error: {
        success: false,
        type: "",
        message: "",
      },
      details: validationData.error.issues,
    });
    return;
  }

  const data: typeSupplier = validationData.data;

  try {
    const userExist = await user.findOne({
      _id: data.userId,
      blocked: false,
      role: { $in: ["user", "admin"] },
    });
    if (!userExist) {
      res.status(404).json({
        error: { success: false, type: "", message: "O usuário n existe" },
      });
      return;
    }

    const supplierExist = await supplier.exists({ link: data.link });
    if (supplierExist) {
      res.status(403).json({
        error: {
          success: false,
          type: "",
          message: "",
        },
      });
      return;
    }

    const newSupplier = await supplier.create({
      createdBy: userExist._id,
      avatar: data.avatar,
      supplier: data.supplier,
      sales: data.sales,
      notice: data.notice,
      rating: data.rating,
      link: data.link,
    });

    if (userExist.role === "user") {
      await user.findByIdAndUpdate(
        data.userId,
        { $addToSet: { suppliers: newSupplier._id } },
        { returnDocument: "after" }
      );
    }
    res.status(201).json({ success: true, result: newSupplier.link });
  } catch (error) {
    console.log(error);
  }
};

export default createdSupplier;
