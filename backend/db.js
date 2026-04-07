const mongoose = require("mongoose");
const dotenv = require("dotenv");
dotenv.config({ path: "./.env" });

const connectDB = async () => {
  try {
    console.log("Connecting to:", process.env.MONGO_URI?.replace(/:([^@]+)@/, ':****@'));
    const conn = await mongoose.connect(process.env.MONGO_URI, {
      dbName: "conversa-chatapp",
    });

    console.log(`✅ MongoDB connected: ${conn.connection.host}`);
  } catch (error) {
    console.error(`Error: ${error.message}`);
    process.exit(1);
  }
};

module.exports = connectDB;
