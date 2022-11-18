import type { Request, Response } from "express";
import { isValidObjectId } from "mongoose";
import { QuotesModel } from "../model";

export async function deleteById(request: Request, response: Response) {
  const params = request.params;

  if (!isValidObjectId(params.id))
    return response.status(400).json({ message: "error.message" });

  try {
    await QuotesModel.findByIdAndDelete(params.id);
    return response.status(200).json({ message: "deleted" });
  } catch (error: Error | any) {
    return response.status(500).json({ message: error.message });
  }
}
