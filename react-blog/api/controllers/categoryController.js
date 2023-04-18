import {db} from "../db.js"
import jwt from "jsonwebtoken"; 
export const getCategories = (req,res)=>{
   const q = "SELECT * FROM categories";
   db.query(q, (err,data)=>{
        if (err) return res.status(500).json(err);
       return res.status(200).json(data);
   })
}
export const getCategory = (req,res)=>{
    const q = "SELECT * FROM categories c WHERE c.id = ? "
    db.query(q, [req.params.id], (err,data)=>{
        if (err) return res.status(500).json(err);
       return res.status(200).json(data);
   })
}
export const addCategory = (req,res)=>{
    const token = req.cookies.access_token;
    if (!token) return res.status(401).json("Not authenticated!");
  
    jwt.verify(token, "jwtkey", (err, data) => {
      if (err) return res.status(403).json("Token is not valid!");
  
      const q =
        "INSERT INTO categories(`name`) VALUES (?)"
  
      db.query(q, [req.body.name], (err, data) => {
        if (err) return res.status(500).json(err);
        return res.json("Category has been created.");
      });
    });
  };

export const deleteCategory = (req,res)=>{
    const token = req.cookies.access_token;
    if (!token) return res.status(401).json("Not authenticated!");
  
    jwt.verify(token, "jwtkey", (err, data) => {
      if (err) return res.status(403).json("Token is not valid!");
      const q = "DELETE FROM categories WHERE `id` = ?";

      db.query(q, [req.params.id], (err,data)=>{
        if (err) return res.status(500).json(err);
        return res.status(200).json(data);
      });
    });
};

export const updateCategory = (req,res)=>{
  const token = req.cookies.access_token;
  if (!token) return res.status(401).json("Not authenticated!");

  jwt.verify(token, "jwtkey", (err, data) => {
    if (err) return res.status(403).json("Token is not valid!");

    const q =
      "UPDATE categories SET `name`=?  WHERE `id` = ?";

    db.query(q, [req.body.name, req.params.id], (err, data) => {
      if (err) return res.status(500).json(err);
      return res.json("Category has been updated.");
    });
  });
}