import type { Request, Response } from "express";
import { QuotesModel } from "../model";
import { isValidObjectId } from "mongoose";

export async function deleteById(request: Request, response: Response) {
  const params = request.params;

  try {
    const exists = await QuotesModel.findById(params.id);
    if (!isValidObjectId(params.id) || !exists) {
      throw new Error("id not found");
    }
  } catch (error: Error | any) {
    return response.status(400).json({ message: error.message });
  }

  try {
    await QuotesModel.findByIdAndDelete(params.id);
    return response.status(200).json({ message: "deleted" });
  } catch (error: Error | any) {
    return response.status(500).json({ message: error.message });
  }
}
