DROP TABLE IF EXISTS products;

CREATE TABLE products (
   id    SERIAL,
   name  TEXT
);

INSERT INTO products (name) VALUES ('gloves');
INSERT INTO products (name) VALUES ('hammer');
INSERT INTO products (name) VALUES ('flash light');
INSERT INTO products (name) VALUES ('TV');
