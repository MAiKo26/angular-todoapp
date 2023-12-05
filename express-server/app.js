import express from "express";
import cors from "cors";
import {
  getItems,
  addItem,
  deleteItem,
  updateItem,
  checkItem,
} from "./connect.js";
const app = express();

app.use(cors());
app.use(express.json());

app.get("/items", async (req, res) => {
  const items = await getItems();
  res.send(items);
});

app.post("/items", async (req, res) => {
  console.log("bruh", req.body);
  const item = req.body;
  console.log("im here", item);

  try {
    const result = await addItem(item);
    res.status(200).send("Item added successfully");
  } catch (error) {
    console.error("Error adding item:", error);
    res.status(500).send("Error adding item");
  }
});

app.put("/items", (req, res) => {
  const item = req.body;
  const result = updateItem(item);
  res.send(result);
});

app.delete("/items", (req, res) => {
  const item = req.body;
  const result = deleteItem(item.id);
  res.send(result);
});

app.use((err, req, res, next) => {
  console.log(err.stack);
  res.status(500).send("Something broke!");
});

app.listen(8080, () => {
  console.log("Listening on port 8080");
});
