import {db} from "../db.js"
import jwt from "jsonwebtoken";

export const getExpenses = (req,res)=>{
   const q = "SELECT * FROM expenses e JOIN categories c ON e.categoryId = c.id";
   db.query(q, (err,data)=>{
        if (err) return res.status(500).json(err);
       return res.status(200).json(data);
   })
};

export const getExpense = (req,res)=>{
    const q = "SELECT * FROM expenses e JOIN categories c ON e.categoryId = c.id WHERE e.id = ? "
    db.query(q, [req.params.id], (err,data)=>{
        if (err) return res.status(500).json(err);
       return res.status(200).json(data);
   })
};

export const addExpense = (req,res)=>{const token = req.cookies.access_token;
    if (!token) return res.status(401).json("Not authenticated!");
  
    jwt.verify(token, "jwtkey", (err, data) => {
      if (err) return res.status(403).json("Token is not valid!");
  
      const q =
        "INSERT INTO expenses(`amount`, `categoryId`) VALUES (?)";
  
      const values = [
        req.body.amount,
        req.body.categoryId,
      ];
  
      db.query(q, [values], (err, data) => {
        if (err) return res.status(500).json(err);
        return res.json("Post has been created.");
      });
    });
  };

export const deleteExpense = (req,res)=>{
    const token = req.cookies.access_token;
    if (!token) return res.status(401).json("Not authenticated!");
  
    jwt.verify(token, "jwtkey", (err, data) => {
      if (err) return res.status(403).json("Token is not valid!");
  
      const expenseId = req.params.id;
      const q = "DELETE FROM expenses WHERE `id` = ?";
  
      db.query(q, [expenseId], (err,data)=>{
        if (err) return res.status(500).json(err);
        return res.status(200).json(data);
      });
    });
  };

export const updateExpense = (req,res)=>{
  const token = req.cookies.access_token;
  if (!token) return res.status(401).json("Not authenticated!");

  jwt.verify(token, "jwtkey", (err, data) => {
    if (err) return res.status(403).json("Token is not valid!");

    const expenseId = req.params.id;
    const q =
      "UPDATE expenses SET `amount`=?,`categoryId`=? WHERE `id` = ?";

    const values = [req.body.amount, req.body.categoryId];

    db.query(q, [...values, expenseId], (err, data) => {
      if (err) return res.status(500).json(err);
      return res.json("expense has been updated.");
    });
  });
};