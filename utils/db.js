import mongoose from "mongoose";

let isConnected = false;

export const connectToDB = async () => {
  mongoose.set("strictQuery", true);

  if (isConnected) {
    console.log("Using existing DB connection");
    return;
  }

  const db = await mongoose.connect(process.env.MONGODB_URL, {
    // dbName:process.env.MONGODB_URL,
    useNewUrlParser: true,
    useUnifieldTopology: true,
  });
  isConnected = true;
  console.log("user is connected");
};
