import mongoose from "mongoose";

export async function connection(): Promise<void> {
  const url = process.env.dbUrl;
  const dbName = process.env.dbName;
  console.log("connecting to database...");
  try {
    if (url) {
      mongoose.set("debug", true);
      await mongoose.connect(String(url), {
        dbName,
        retryReads: true,
        retryWrites: true,
        connectTimeoutMS: 15000,
      });
    } else {
      throw new Error("Connection failed");
    }
  } catch (error: Error | any) {
    throw new Error(error.message);
  }
  console.log("connected to database");
}
