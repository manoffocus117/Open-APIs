import express from "express";
import get_foods from "./../controllers/foods.controller.js";

const router = express.Router();

router.get("/", get_foods);

export default router;
