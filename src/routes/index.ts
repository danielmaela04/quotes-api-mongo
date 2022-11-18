import { Express } from "express";
import { QuotesRoutes } from "./quotes";

export default function AppRoutes(app: Express) {
  app.use("/quotes", QuotesRoutes);
}
