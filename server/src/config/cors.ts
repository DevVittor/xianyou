import cors from "cors";

const corsConfig = () => {
  cors({
    credentials: true,
  });
};

export default corsConfig;
