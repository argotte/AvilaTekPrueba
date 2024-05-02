import express from "express";
import http from "http";
import bodyParser from "body-parser";
import cookieParser from "cookie-parser";
import compression from "compression";
import cors from "cors";
import dotenv from "dotenv";
import { router } from "./routes/indexRoutes";
dotenv.config();
import mongoose from "mongoose";
import swaggerUi from "swagger-ui-express";
import swaggerJsdoc from "swagger-jsdoc";
 // Update the import statement to reference the correct relative path

const PORT= process.env.PORT || 3050;
const app = express();
const options = {
  definition: {
    openapi: "3.0.0",
    info: {
      title: "API Avila Tek",
      version: "1.0.0",
    },
  },
  apis: ["./src/routes/*.ts"], // path to the API files
};
const specs = swaggerJsdoc(options);
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(specs));

app.use(cors({ origin: true, credentials: true }));
app.use(express.json());
app.use(router);
app.use(bodyParser.json());
app.use(cookieParser());
app.use(compression());
const server = http.createServer(app);
server.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});

const MONGO_URL = process.env.MONGO_URL as string;//env variable
console.log(MONGO_URL);
mongoose.Promise = Promise;
mongoose.connect(MONGO_URL);
mongoose.connection.on("error", (error) => {
  console.log(error);
});