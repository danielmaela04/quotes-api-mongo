import type { Request, Response } from "express";
import { QuotesModel } from "../model";
import { checkPayloadFields } from "../resource";

export async function create(request: Request, response: Response) {
  const payload = request.body;
  try {
    checkPayloadFields(payload, ["author", "quote"]);
  } catch (error: Error | any) {
    return response.status(400).json({ message: error.message });
  }
  try {
    const create = await QuotesModel.insertMany(payload || payload.sort());
    return response.status(201).json({
      message: "created",
      count: create.length,
    });
  } catch (error: Error | any) {
    return response.status(500).json({ message: error.message });
  }
}
