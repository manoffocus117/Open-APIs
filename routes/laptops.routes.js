import express from "express";
import {
      get_laptops,
      get_single_laptop,
} from "../controllers/laptops.controller.js";

const router = express.Router();

router.get("/", get_laptops);
router.get("/:id", get_single_laptop);

export default router;
