import express from "express";
import { addExpense, deleteExpense, getExpense, getExpenses, updateExpense } from "../controllers/expenseController.js"

const router = express.Router()

router.get("/", getExpenses)
router.get("/:id", getExpense)
router.post("/", addExpense)
router.delete("/:id", deleteExpense)
router.put("/:id", updateExpense)

export default router