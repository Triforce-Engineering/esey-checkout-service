DROP TABLE IF EXISTS items CASCADE;
CREATE TABLE items (
	item_id SERIAL,
	name varchar(255) NOT NULL,
	vendor varchar(255) NOT NULL,
	price NUMERIC(10,2) NOT NULL,
	stock int NOT NULL 	CONSTRAINT non_negative_stock CHECK( stock >= 0 ),
	
	PRIMARY KEY (item_id)
);

DROP TABLE IF EXISTS carts;
CREATE TABLE carts (
	user_id int NOT NULL,
	item_id int NOT NULL REFERENCES items(item_id),
	quantity int NOT NULL,

	PRIMARY KEY(user_id, item_id)
);