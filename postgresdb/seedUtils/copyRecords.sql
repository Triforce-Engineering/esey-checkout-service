TRUNCATE items CASCADE;
COPY items(item_id,name,vendor,price,stock)
FROM '/mnt/c/Users/Admin/Desktop/hackreactor/jhods16-service/postgresdb/seedUtils/items.csv' DELIMITER '~' CSV HEADER;
TRUNCATE carts;
COPY carts(user_id,item_id,quantity)
FROM '/mnt/c/Users/Admin/Desktop/hackreactor/jhods16-service/postgresdb/seedUtils/carts.csv' DELIMITER '~' CSV HEADER;