import express from "express";
import get_phones from "../controllers/smartphones.controller.js";

const router = express.Router();

router.get("/", get_phones);

export default router;
