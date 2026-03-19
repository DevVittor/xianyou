import "dotenv/config";
import express, { type Request, type NextFunction } from "express";
const app = express();

import { createServer } from "node:http";

const serverHTTP = createServer(app);

import bodyParser from "body-parser";
import conn from "@/database/conn.js";
import router from "@/routes/v1/index.js";

//app.set("trust proxy", true);
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.disable("x-powered-by");

app.use("/", (req: Request, _, next: NextFunction) => {
  console.log(`Path: ${req.path} | Method: ${req.method}`);
  next();
});

app.use("/api/v1", router);

const port = Number(process.env.PORT || 8080);

serverHTTP.listen(port, async () => {
  try {
    console.log(`Servidor no rodando na porta ${port}`);
    await conn();
  } catch (error) {
    console.error(error);
  }
});
