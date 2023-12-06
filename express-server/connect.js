import mysql from "mysql2";

const pool = mysql
  .createPool({
    host: "127.0.0.1",
    user: "root",
    password: "mysqlroot",
    database: "projecttestsdb",
  })
  .promise();

export async function getItems() {
  const [rows] = await pool.query("SELECT * FROM items");
  return rows;
}

export async function addItem(item) {
  const result = await pool.query(
    "INSERT INTO items (task, checked) VALUES (?,?)",
    [item.task, item.checked]
  );
}

export async function deleteItem(id) {
  const result = await pool.query("DELETE FROM items WHERE id = ?", id);
  return result;
}

export async function updateItem(item) {
  const result = await pool.query(
    "UPDATE items SET checked = ?, task = ? WHERE id = ?",
    [item.checked, item.task, item.id]
  );
  return result;
}

export async function checkItem(item) {
  const result = await pool.query("UPDATE items SET checked = ? WHERE id = ?", [
    item.checked,
    item.id,
  ]);
  return result;
}
