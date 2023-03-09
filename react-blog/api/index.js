import express from "express";
import expenseRoutes from "./routes/expenses.js"
import authRoutes from "./routes/auth.js"
import userRoutes from "./routes/users.js"
import categoryRoutes from "./routes/categories.js"
import cors from "cors"
import cookieParser from "cookie-parser"

const app = express()
app.use(express.json())
app.use(cookieParser())
app.use(cors())
app.use("/api/expenses", expenseRoutes)
app.use("/api/auth", authRoutes)
app.use("/api/users", userRoutes)
app.use("/api/categories", categoryRoutes)

app.listen(8800, ()=>{
    console.log("Connected to backend!");
})