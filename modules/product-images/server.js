import express from "express";
import db from "./db-config.js";

const PORT = process.env.PRODUCT_IMAGES_PORT || 3001;

const app = express();

app.use(express.json());

app.get("/api/product_images", (req, res) => {
  db.query("SELECT * FROM product_images", (err, data) => {
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
