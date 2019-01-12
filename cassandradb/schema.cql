DROP KEYSPACE IF EXISTS checkout;
CREATE KEYSPACE checkout 
WITH replication = {'class' : 'SimpleStrategy', 'replication_factor':'1'};

USE checkout;

CREATE TABLE items(
    item_id int,
    name text,
    vendor text,
    price decimal,
    stock int,
   PRIMARY KEY (item_id)
);

CREATE TABLE cart_by_userid(
    user_id int,
    cart map<int,int>,
   PRIMARY KEY (user_id)
);




