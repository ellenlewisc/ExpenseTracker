import mysql from "mysql";

export const db = mysql.createConnection({
    host:"localhost",
    user: "root",
    password: "Beaulewis123!",
    database: "test"
})
