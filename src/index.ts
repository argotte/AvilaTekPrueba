import express from "express";
import http from "http";
import bodyParser from "body-parser";
import cookieParser from "cookie-parser";
import compression from "compression";
import cors from "cors";
import dotenv from "dotenv";
dotenv.config();
import mongoose from "mongoose";

const app = express();
app.use(cors({ origin: true, credentials: true }));
app.use(bodyParser.json());
app.use(cookieParser());
app.use(compression());

const server = http.createServer(app);
server.listen(3050, () => {
  console.log("Server is running on http://localhost:3050");
});

const MONGO_URL = process.env.MONGO_URL;//env variable
console.log(MONGO_URL);
mongoose.Promise = Promise;
mongoose.connect(MONGO_URL);
mongoose.connection.on("error", (error) => {
  console.log(error);
});