import express from "express";
import { addExpense } from "../controllers/expenseController.js"

const router = express.Router()

router.get("/test", addExpense)

export default router