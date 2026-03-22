import handlerError from "@/middleware/handlerError.js";
import supplier from "@/models/supplier.model.js";
import user from "@/models/user.model.js";
import errorMessage from "@/utils/errorMessage.js";
import zodError from "@/zod/zodError.js";
import { type Request, type Response } from "express";
import { Types } from "mongoose";
import { z } from "zod";

const dataListSupplier = z.object({
  adminId: z.coerce.string().refine((val) => Types.ObjectId.isValid(val), {
    error: zodError.ADMIN_ID,
  }),
});

type typeListSupplier = z.infer<typeof dataListSupplier>;

const allSupplier = async (req: Request, res: Response): Promise<void> => {
  const validationData = dataListSupplier.safeParse(req.body);
  if (!validationData.success) {
    res.status(400).json({
      error: {
        success: false,
        type: errorMessage.ZOD_INVALID.type,
        message: errorMessage.ZOD_INVALID.message,
      },
      details: validationData.error.issues,
    });
    return;
  }

  const data: typeListSupplier = validationData.data;

  try {
    const isAdmin = await user.exists({
      _id: data.adminId,
      role: "admin",
      blocked: false,
    });

    if (!isAdmin) {
      res.status(404).json({
        error: {
          success: false,
          type: errorMessage.NOT_ADMIN.type,
          message: errorMessage.NOT_ADMIN.message,
        },
      });
      return;
    }

    const listSupplier = await supplier.find();
    if (listSupplier.length < 1) {
      res.status(404).json({
        error: {
          success: false,
          type: errorMessage.NOT_FOUND_SUPPLIER.type,
          message: errorMessage.NOT_FOUND_SUPPLIER.message,
        },
      });
      return;
    }

    res.status(200).json({ success: true, message: "", result: listSupplier });
  } catch (error: unknown) {
    handlerError(res, error);
  }
};

export default allSupplier;
