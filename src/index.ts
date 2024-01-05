import express from "express";
import cors from "cors";
import bodyParser from "body-parser";
import mongoose, { ConnectOptions } from "mongoose";

const app = express();
const PORT = 3000;

app.use(cors());
app.use(bodyParser.json());

mongoose.connect("mongodb://localhost:27017/ecommerce", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
} as ConnectOptions);
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

export default app;
