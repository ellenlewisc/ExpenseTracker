import {db} from "../db.js"

export const getCategories = (req,res)=>{
   const q = "SELECT * FROM categories";
   db.query(q, (err,data)=>{
        if (err) return res.status(500).json(err);
       return res.status(200).json(data);
   })
}
export const getCategory = (req,res)=>{
}
export const addCategory = (req,res)=>{
    res.json("from controller")
}
export const deleteCategory = (req,res)=>{
    res.json("from controller")
}
export const updateCategory = (req,res)=>{
    res.json("from controller")
}