import type { Request, Response } from "express";
import { QuotesModel } from "../model";

export async function getAll(request: Request, response: Response) {
  try {
    const quotes = await QuotesModel.find();
    return response
      .status(200)
      .json({ message: "OK", count: quotes.length, data: quotes });
  } catch (error: Error | any) {
    return response.status(500).json({ message: error.message });
  }
}
