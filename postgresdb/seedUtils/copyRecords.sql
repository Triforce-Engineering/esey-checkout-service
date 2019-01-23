TRUNCATE items CASCADE;
ALTER table items DROP CONSTRAINT non_negative_stock;
COPY items(item_id,name,vendor,price,stock)
FROM './items.csv' DELIMITER '~' CSV HEADER;
ALTER table items ADD CONSTRAINT non_negative_stock CHECK(stock >= 0);

TRUNCATE carts;
ALTER table carts DROP CONSTRAINT carts_item_id_fkey;
COPY carts(user_id,item_id,quantity)
FROM './carts.csv' DELIMITER '~' CSV HEADER;

ALTER TABLE carts 
   ADD CONSTRAINT carts_item_id_fkey
   FOREIGN KEY (item_id) 
   REFERENCES items(item_id);
