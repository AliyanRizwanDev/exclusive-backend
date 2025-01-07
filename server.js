import express from "express";
import cors from "cors";
import mongoose from "mongoose";
import dotenv from "dotenv";
import loginRouter from "./Routes/loginRouter.js";
dotenv.config();

const app = express();
const port = 3000;
app.use(cors());
app.use(express.json());
app.use("/api", loginRouter);

app.listen(port, async () => {
  console.log("Server Started");
  await mongoose
    .connect(process.env.mongo_url)
    .then(() => {
      console.log("connected to DB");
    })
    .catch((error) => {
      console.log(`Error: ${error}`);
    });
});
