import express from "express";
import dotenv from "dotenv";
dotenv.config();
import mongoose from "mongoose";
import cors from "cors";
import cookieParser from "cookie-parser";

const PORT = process.env.PORT || 5000;
const BD_URL = process.env.BD_URL;

const app = express();

app.use(express.json());
app.use(cookieParser());

const startServer = async () => {
  try {
    await mongoose.connect(BD_URL, {
      useUnifiedTopology: true,
      useNewUrlParser: true,
    });
    app.listen(PORT, () =>
      console.log(`SERVER WORK ON ${PORT} and ${process.env.PORT}`)
    );
  } catch (e) {
    console.log("ERROR: ", e);
  }
};

startServer();
