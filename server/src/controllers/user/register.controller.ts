import "dotenv/config";
import user from "@/models/user.model.js";
import { type Request, type Response } from "express";
import { z } from "zod";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
const secret = process.env.JWT_SECRET as string;

const dataRegisterUser = z.object({
  username: z.coerce.string(),
  email: z.coerce.string(),
  password: z.coerce.string(),
});

type typeRegisterUser = z.infer<typeof dataRegisterUser>;

const generateTag = async (): Promise<string> => {
  while (true) {
    const tag = Math.floor(1000 + Math.random() * 9000).toString();
    const exists = await user.exists({ tag });

    if (!exists) return tag;
  }
};

const registerNewUser = async (req: Request, res: Response): Promise<void> => {
  const validationData = dataRegisterUser.safeParse(req.body);
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

  const data: typeRegisterUser = validationData.data;

  try {
    const emailExist = await user.exists({ email: data.email });
    if (emailExist) {
      res.status(403).json({
        error: {
          success: false,
          type: "",
          message: "",
        },
      });
      return;
    }

    const passwordWithHash = await bcrypt.hash(data.password, 10);

    const generationTag = await generateTag();

    const newUser = await user.create({
      tag: generationTag,
      username: data.username,
      email: data.email,
      password: passwordWithHash,
    });

    const payload = {
      _id: newUser._id,
      email: newUser.email,
      role: newUser.role,
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
      .status(201)
      .cookie("access_token", `Bearer ${token}`, cookieOptions)
      .json({ success: true, type: "", message: "", result: token });
  } catch (error) {
    console.log(`Error: ${error}`);
  }
};

export default registerNewUser;
