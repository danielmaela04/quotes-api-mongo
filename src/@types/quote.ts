import { ObjectId } from "mongoose";

export interface IAppQuotes {
  _id: ObjectId;
  author: string;
  quote: string;
  createdAt?: string;
  updateAt?: string;
  __v: number;
}

export interface INewQuote
  extends Omit<IAppQuotes, "id" | "__v" | "createdAt" | "updateAt"> {}
