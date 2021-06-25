import express from "express";
import db from "./db-config.js";

const PORT = process.env.CART_PORT || 3000;

const app = express();

app.use(express.json());

app.get("/api/cart_products", (req, res) => {
  db.query("SELECT * FROM cart_products", (err, data) => {
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
