import express from "express";
import { addCategory, deleteCategory, getCategories, getCategory, updateCategory } from "../controllers/categoryController.js";

const router = express.Router()

router.get("/", getCategories)
router.get("/:id", getCategory)
router.post("/", addCategory)
router.delete("/:id", deleteCategory)
router.put("/:id", updateCategory)

export default router