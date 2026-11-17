import express from "express";
import { get_furniture } from "../controllers/furniture.controller.js";

const router = express.Router();

router.get("/", get_furniture);

export default router;
