import handlerError from "@/middleware/handlerError.js";
import supplier from "@/models/supplier.model.js";
import user from "@/models/user.model.js";
import { type Request, type Response } from "express";
import { Types } from "mongoose";
import { z } from "zod";

const dataRemoveSupplier = z.object({
  userId: z.coerce.string().refine((val) => Types.ObjectId.isValid(val), {
    error: "Não foi possível localizar o id do usuário",
  }),
  supplierId: z.coerce.string().refine((val) => Types.ObjectId.isValid(val), {
    error: "Não foi possível localizar o id do fornecedor",
  }),
});

type typeRemoveSupplier = z.infer<typeof dataRemoveSupplier>;

const removeSupplier = async (req: Request, res: Response): Promise<void> => {
  const validationData = dataRemoveSupplier.safeParse(req.body);
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
  const data: typeRemoveSupplier = validationData.data;
  try {
    const creator = await user.findOne({
      _id: data.userId,
      blocked: false,
      role: { $in: ["user", "admin"] },
    });
    if (!creator) {
      res
        .status(404)
        .json({ error: { success: false, type: "", message: "" } });
      return;
    }

    // 2. Busca o fornecedor específico
    const targetSupplier = await supplier.findById(data.supplierId);
    if (!targetSupplier) {
      res.status(404).json({
        error: { success: false, message: "Fornecedor não encontrado" },
      });
      return;
    }

    const isOwner = targetSupplier.createdBy.equals(creator._id);
    const isAdmin = creator.role === "admin";

    if (!isOwner && !isAdmin) {
      res.status(403).json({
        error: {
          success: false,
          message: "Sem permissão para excluir este registro",
        },
      });
      return;
    }

    await supplier.findByIdAndDelete(data.supplierId);
    if (creator.role === "user") {
      await user.findByIdAndUpdate(
        data.userId,
        {
          $pull: { suppliers: data.supplierId },
        },
        { returnDocument: "after" }
      );
    }

    res.status(201).json({ success: true, message: "" });
  } catch (error: unknown) {
    handlerError(res, error);
  }
};

export default removeSupplier;
