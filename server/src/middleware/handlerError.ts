import errorMessage from "@/utils/errorMessage.js";
import { type Response } from "express";
const handlerError = (res: Response, error: unknown) => {
  const isError = error instanceof Error;
  return res.status(500).json({
    error: {
      success: false,
      type: errorMessage.HANDLER_ERROR.type,
      message: errorMessage.HANDLER_ERROR.message,
    },
    details: `Error details: ${isError ? error.message : String(error)}`,
  });
};

export default handlerError;
