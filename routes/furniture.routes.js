import express from "express";
import {
      get_furniture,
      get_single_furniture,
} from "../controllers/furniture.controller.js";

const router = express.Router();

router.get("/", get_furniture);
router.get("/:id", get_single_furniture);

export default router;
