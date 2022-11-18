import type { Request, Response } from "express";
import { QuotesModel } from "../model";

export async function updateMany(request: Request, response: Response) {
  const payload = request.body;

  try {
    const updateMany = await QuotesModel.updateMany(payload.sort());
    return response.status(200).json({
      message: "Updated",
      count: updateMany,
    });
  } catch (error: Error | any) {
    return response.status(500).json({ message: error.message });
  }
}
