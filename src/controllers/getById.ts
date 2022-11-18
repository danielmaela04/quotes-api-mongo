import type { Request, Response } from "express";
import { isValidObjectId } from "mongoose";
import { QuotesModel } from "../model";

export async function getById(request: Request, response: Response) {
  const params = request.params;

  try {
    if (!isValidObjectId(params.id)) {
      throw new Error("id not found");
    }
  } catch (error: Error | any) {
    return response.status(400).json({ message: error.message });
  }

  try {
    const getById = await QuotesModel.findById(params.id);
    return response.status(200).json({
      message: "OK",
      count: 1,
      data: getById,
    });
  } catch (error: Error | any) {
    return response.status(500).json({ message: error.message });
  }
}
