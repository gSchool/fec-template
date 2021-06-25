DROP TABLE IF EXISTS cart_products;

CREATE TABLE cart_products (
   user_id     INTEGER,
   product_id  INTEGER
);

INSERT INTO cart_products (user_id, product_id) VALUES (1, 1);
INSERT INTO cart_products (user_id, product_id) VALUES (1, 2);
INSERT INTO cart_products (user_id, product_id) VALUES (1, 3);
INSERT INTO cart_products (user_id, product_id) VALUES (2, 3);
