import "dotenv/config";
import mongoose from "mongoose";

async function connect() {
  try {
    await mongoose.connect(process.env.MONGODB_URI!);
    console.log(mongoose.ConnectionStates[mongoose.connection.readyState]);
  } catch (err) {
    console.error(err);
  }
}

export { connect };
