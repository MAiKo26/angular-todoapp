import mysql from "mysql2";

const pool = mysql
  .createPool({
    host: "127.0.0.1",
    user: "root",
    password: "mysqlroot",
    database: "projecttestsdb",
  })
  .promise();

const [rows] = await pool.query("SELECT * FROM items");
console.log(rows);

pool.end();
