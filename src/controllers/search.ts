import type { Request, Response } from "express";
import { QuotesModel } from "../model";

export async function search(request: Request, response: Response) {
  const params = request.params;

  try {
    const data = params.toLowerCase;
    const search = await QuotesModel.find({ author: params });
    return response.status(200).json({
      message: "ok",
      count: search.length,
      data: search,
    });
  } catch (error: Error | any) {
    return response.status(400).json({ message: error.message });
  }
}
