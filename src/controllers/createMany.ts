import type { Request, Response } from "express";
import { QuotesModel } from "../model";

export async function createMany(request: Request, response: Response) {
  const payload = request.body;

  try {
    // const payloadE = payload.sort();
    const createMany = await QuotesModel.insertMany(payload.sort());
    return response.status(201).json({
      message: "created",
      count: createMany.length,
    });
  } catch (error: Error | any) {
    return response.status(500).json({ message: error.message });
  }
}
