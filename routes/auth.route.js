import express from "express";
import { forgotPassword, login, logout, register, resetPassword, verifyEmail , checkAuth} from "../controllers/auth.controller.js";
import { verifyToken } from "../middleware/verifyToken.js";

const router = express.Router();

router.get("/check-auth", verifyToken, checkAuth)

router.post("/register", register);
router.post("/login", login); 
router.get("/logout", logout);
router.post("/forgot-password", forgotPassword);
router.post("/reset-password/:token", resetPassword);
router.post("/verify-email", verifyEmail);

export default router;