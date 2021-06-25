DROP TABLE IF EXISTS product_images;

CREATE TABLE product_images (
   product_id  INTEGER,
   image_url   TEXT
);

INSERT INTO product_images (product_id, image_url) VALUES (1, 'http://google/image1.jpg');
INSERT INTO product_images (product_id, image_url) VALUES (1, 'http://google/image2.jpg');
INSERT INTO product_images (product_id, image_url) VALUES (2, 'http://google/image3.jpg');
