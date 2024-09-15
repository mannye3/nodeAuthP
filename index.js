import express from "express";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";
import connectDB from "./db/connectDB.js";
import authRouter from "./routes/auth.route.js";

dotenv.config();

const app = express();

app.use(express.json());
app.use(cookieParser())
app.use("/api/auth", authRouter);

app.listen(process.env.PORT, () => {
    connectDB();
  console.log(`Server running on port ${process.env.PORT}`);
});

 