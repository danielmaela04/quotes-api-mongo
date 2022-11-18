import mongoose from "mongoose";
import { IAppQuotes } from "../@types";

const Schema = mongoose.Schema;

const quoteSchema = new Schema<IAppQuotes>(
  {
    author: {
      type: String,
      required: true,
    },
    quote: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

export const QuotesModel = mongoose.model<IAppQuotes>(
  "quote-model",
  quoteSchema,
  "quotes"
);
