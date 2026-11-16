import express from "express";
import get_laptops from "../controllers/laptops.controller.js";

const router = express.Router();

router.get("/", get_laptops);

export default router;
