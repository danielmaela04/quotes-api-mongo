import { Request, Response } from "express";
import { QuotesModel } from "../model";

export async function search(request: Request, response: Response) {
  const params = request.params;

  try {
    const results = await QuotesModel.find({
      $or: [{ author: { $regex: new RegExp(params.key, "i") } }],
    });

    if (results.length <= 0) {
      return response.status(404).json({ message: "results not found" });
    }
    return response.status(200).json({
      message: "ok",
      count: results.length,
      data: results,
    });
  } catch (error: Error | any) {
    return response.status(500).json({ message: error.message });
  }
}
