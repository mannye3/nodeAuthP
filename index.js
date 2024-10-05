import express from "express";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";
import connectDB from "./db/connectDB.js";
import authRouter from "./routes/auth.route.js";
import adminRoutes from './routes/adminRoutes.js';


dotenv.config();

const app = express();

app.use(express.json());
app.use(cookieParser())
app.use("/api/auth", authRouter);
app.use('/api/admin', adminRoutes);

app.listen(process.env.PORT, () => {
    connectDB();
  console.log(`Server running on port ${process.env.PORT}`);
});

  