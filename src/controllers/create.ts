import type { Request, Response } from "express";
import { INewQuote } from "../@types";
import { QuotesModel } from "../model";

export async function create(request: Request, response: Response) {
  const payload = request.body as INewQuote;

  try {
    const created = await QuotesModel.create({
      ...payload,
    });
    return response.status(201).json({
      message: "created",
      count: 1,
      data: {
        _id: created._id,
      },
    });
  } catch (error: Error | any) {
    return response.status(500).json({ message: error.message });
  }
}
