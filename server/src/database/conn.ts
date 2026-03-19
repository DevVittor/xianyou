import "dotenv/config";
import mongoose from "mongoose";

const mongoURI = process.env.MONGO_URI as string;
const mongoNAME = process.env.MONGO_NAME as string;

const conn = async () => {
  try {
    await mongoose.connect(mongoURI, {
      dbName: mongoNAME,
    });
    console.log(`Banco de dados sincronizado com sucesso!`);
  } catch (error) {
    console.log(error);
  }
};

export default conn;
