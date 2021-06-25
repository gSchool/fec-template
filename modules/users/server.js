import express from "express";
import db from "./db-config.js";

const PORT = process.env.USERS_PORT || 3002;

const app = express();

app.use(express.json());

app.get("/api/users", (req, res) => {
  db.query("SELECT * FROM users", (err, data) => {
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
