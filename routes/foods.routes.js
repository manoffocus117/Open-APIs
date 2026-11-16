import express from "express";
import { get_foods, get_single_food } from "../controllers/foods.controller.js";

const router = express.Router();

router.get("/", get_foods);
router.get("/:id", get_single_food);

export default router;
