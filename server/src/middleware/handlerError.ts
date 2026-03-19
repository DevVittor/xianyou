import { type Response } from "express";
const handlerError = (res: Response, error: unknown) => {
  const isError = error instanceof Error;
  return res.status(500).json({
    error: {
      success: false,
      type: "InternalServerError",
      message: "Erro interno no servidor",
    },
    details: `Error details: ${isError ? error.message : String(error)}`,
  });
};

export default handlerError;
