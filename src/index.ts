import express from "express";
import cors from "cors";
import bodyParser from "body-parser";
import mongoose from "mongoose";
import productRouter from "./routes/productRoutes";

const app = express();

app.use(cors());
app.use(bodyParser.json());
app.use("/api", productRouter);

mongoose.connect("mongodb://localhost:27017/ecommerce",);

export default app;
