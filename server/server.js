import express from "express";
import { createProxyMiddleware } from "http-proxy-middleware";
import { config } from "dotenv";

config();

const PORT = process.env.PORT || 4000;

const app = express();

app.use(express.static("public"));
app.use(
  createProxyMiddleware("/api", {
    target: "http://localhost:4000",
    router: {
      "/cart_products": "http://localhost:3000",
      "/product_images": "http://localhost:3001",
      "/users": "http://localhost:3002",
      "/products": "http://localhost:3003",
    },
  })
);

app.listen(PORT, () => {
  console.log(`listening on Port ${PORT}`);
});
