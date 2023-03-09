import {db} from "../db.js"

export const getExpenses = (req,res)=>{
   const q = "SELECT * FROM expenses e JOIN categories c ON e.categoryId = c.id";
   db.query(q, (err,data)=>{
        if (err) return res.status(500).json(err);
       return res.status(200).json(data);
   })
}
export const getExpense = (req,res)=>{
    const q = "SELECT * FROM expenses e JOIN categories c ON e.categoryId = c.id WHERE e.id = ? "
    db.query(q, [req.params.id], (err,data)=>{
        if (err) return res.status(500).json(err);
       return res.status(200).json(data);
   })
}
export const addExpense = (req,res)=>{
    res.json("from controller")
}
export const deleteExpense = (req,res)=>{
    res.json("from controller")
}
export const updateExpense = (req,res)=>{
    res.json("from controller")
}