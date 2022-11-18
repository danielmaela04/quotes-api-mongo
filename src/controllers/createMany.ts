import type { Request, Response } from "express";
import { INewQuote } from "../@types";
import { QuotesModel } from "../model";

export async function createMany(request: Request, response: Response) {
  const payload = request.body as INewQuote;

  try {
    const createMany = await QuotesModel.insertMany(payload);
    return response.status(201).json({
      message: "created",
      count: createMany.length,
      data: {
        _id: createMany,
      },
    });
  } catch (error: Error | any) {
    return response.status(500).json({ message: error.message });
  }
}
