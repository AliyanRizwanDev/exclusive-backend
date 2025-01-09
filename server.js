import express from "express";
import cors from "cors";
import mongoose from "mongoose";
import dotenv from "dotenv";
import loginRouter from "./Routes/loginRouter.js";
import adminLoginRouter from "./Routes/adminLoginRouter.js";
import userRouter from "./Routes/signUpRouter.js";
import categoryRouter from "./Routes/categoryRouter.js";
dotenv.config();

const app = express();
const port = 3000;
app.use(cors());
app.use(express.json());
app.use("/api", loginRouter);
app.use("/api", userRouter);
app.use("/api", adminLoginRouter)
app.use("/api", categoryRouter)

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
