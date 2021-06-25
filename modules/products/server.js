import express from "express";
import db from "./db-config.js";

const PORT = process.env.PRODUCTS || 3003;

const app = express();

app.use(express.json());

app.get("/api/products", (req, res) => {
  db.query("SELECT * FROM products", (err, data) => {
    if (err) {
      res.status(404).send(err);
    } else {
      res.json(data.rows);
    }
  });
});

app.listen(PORT, () => {
  console.log(`listening on Port ${PORT}`);
});
