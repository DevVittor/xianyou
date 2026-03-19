import "dotenv/config";
import { type Request, type Response } from "express";
import { z } from "zod";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import user from "@/models/user.model.js";
const secret = process.env.JWT_SECRET as string;

const dataLoginUser = z.object({
  email: z.coerce.string().toLowerCase(),
  password: z.coerce
    .string()
    .min(6, { error: "A senha tem que ter no mínimo 6 caracteres" })
    .max(16, { error: "A senha tem que ter no máximo 16 caracteres" }),
});

type typeLoginUser = z.infer<typeof dataLoginUser>;

const loginUser = async (req: Request, res: Response): Promise<void> => {
  const validationData = dataLoginUser.safeParse(req.body);
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

  const data: typeLoginUser = validationData.data;

  try {
    const userExist = await user
      .findOne({ email: data.email })
      .select("_id email password role");
    if (!userExist) {
      res.status(404).json({
        error: {
          success: false,
          type: "",
          message: "",
        },
      });
      return;
    }

    const verifyPasswordWithHash = await bcrypt.compare(
      data.password,
      userExist.password
    );
    if (!verifyPasswordWithHash) {
      res.status(403).json({
        error: {
          success: false,
          type: "",
          message: "",
        },
      });
      return;
    }

    const payload = {
      _id: userExist._id,
      email: userExist.email,
      role: userExist.role,
    };

    const token = jwt.sign(payload, secret, {
      expiresIn: "7d",
    });

    const sevenDays = 1000 * 60 * 60 * 24 * 7;

    const cookieOptions = {
      httpOnly: true,
      maxAge: sevenDays,
      secure: false,
      path: "/",
    };

    res
      .status(200)
      .cookie("access_token", `Bearer ${token}`, cookieOptions)
      .json({ success: true, type: "", message: "", result: token });
  } catch (error: any) {
    res.status(500).json({
      error: {
        success: false,
        type: "",
        message: "",
      },
      details: error,
    });
  }
};

export default loginUser;
