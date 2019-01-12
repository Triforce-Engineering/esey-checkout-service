TRUNCATE TABLE checkout.items;
COPY checkout.items(item_id,name,vendor,price,stock) 
FROM 'items.csv' WITH DELIMITER='~' AND HEADER=TRUE;


TRUNCATE TABLE checkout.cart_by_userid;
COPY checkout.cart_by_userid(user_id,cart) 
FROM 'carts.csv' WITH DELIMITER='~' AND HEADER=TRUE;