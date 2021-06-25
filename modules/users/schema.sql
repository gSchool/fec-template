DROP TABLE IF EXISTS users;

CREATE TABLE users (
   id    SERIAL,
   name  TEXT
);

INSERT INTO users (name) VALUES ('Natalie');
INSERT INTO users (name) VALUES ('Dylan');
INSERT INTO users (name) VALUES ('Alex');
INSERT INTO users (name) VALUES ('Bosley');
