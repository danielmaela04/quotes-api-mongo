import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import AppRoutes from "./routes";
import { connection } from "./config/";

dotenv.config();
const app = express();

app.use(cors());
app.use(express.json());

AppRoutes(app);

connection().then(() => {
  app.listen(process.env.PORT, () => {
    console.info(
      `The server is running on: http://localhost:${process.env.PORT}`
    );
  });
});
