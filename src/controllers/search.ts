import { Request, Response } from "express";
import { QuotesModel } from "../model";

export async function search(request: Request, response: Response) {
  const params = request.params;

  try {
    const results = await QuotesModel.find({
      $text: { $search: "Musk" },
    });
    return response.status(200).json({
      message: "ok",
      count: results.length,
      data: results,
    });
  } catch (error: Error | any) {
    return response.status(400).json({ message: error.message });
  }
}
