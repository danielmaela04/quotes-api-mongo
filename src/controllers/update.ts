import type { Request, Response } from "express";
import { isValidObjectId } from "mongoose";
import { QuotesModel } from "../model";

export async function update(request: Request, response: Response) {
  const params = request.params;
  const payload = request.body;

  try {
    const exists = await QuotesModel.findById(params.id);
    if (!isValidObjectId(params.id) || !exists) {
      throw new Error("id not found");
    }
  } catch (error: Error | any) {
    return response.status(400).json({ message: error.message });
  }

  try {
    const updateQuote = await QuotesModel.findByIdAndUpdate(params.id, payload);
    return response.status(200).json({
      message: "updated",
      count: 1,
      data: {
        _id: updateQuote!.id,
      },
    });
  } catch (error: Error | any) {
    return response.status(500).json({ message: error.message });
  }
}
