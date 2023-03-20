import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import cookieParser from "cookie-parser";
import publicationsRouter from "./routers/publication/index.js";
import apiRouter from "./routers/api/index.js";
import cors from "cors";
import errorMidleware from "./middleware/error-midleware.js";

dotenv.config({path: "./vars/.env"});

const PORT = process.env.PORT || 5000;
const BD_URL = process.env.BD_URL;

const app = express();

app.use(express.json());
app.use(cookieParser());
app.use("/publications", publicationsRouter);
app.use("/api", apiRouter);
app.use(errorMidleware);

const startServer = async () => {
  try {
    await mongoose.connect(BD_URL, {
      useUnifiedTopology: true,
      useNewUrlParser: true,
    });
    app.listen(PORT, () => console.log(`SERVER WORK ON ${PORT}`));
  } catch (e) {
    console.log("ERROR: ", e);
  }
};

startServer();
