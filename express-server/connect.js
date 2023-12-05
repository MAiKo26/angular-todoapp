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
  console.log(item);
  const result = await pool.query(
    "INSERT INTO items (task, checked) VALUES (?,?)",
    [item.task, item.checked]
  );
}

// console.log(await addItem({ task: "test", checked: false }));

export async function deleteItem(id) {
  const result = await pool.query("DELETE FROM items WHERE id = ?", id);
  return result;
}

export async function updateItem(item) {
  const result = await pool.query("UPDATE items SET task = ? WHERE id = ?", [
    item.task,
    item.id,
  ]);
  return result;
}

export async function checkItem(item) {
  const result = await pool.query("UPDATE items SET checked = ? WHERE id = ?", [
    item.checked,
    item.id,
  ]);
  return result;
}
const notes = await getItems();
console.log(notes);
// pool.end();
