import express from "express";
import {
      get_phones,
      get_single_phone,
} from "../controllers/smartphones.controller.js";

const router = express.Router();

router.get("/", get_phones);
router.get("/:id", get_single_phone);

export default router;
