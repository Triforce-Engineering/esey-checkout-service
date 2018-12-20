DROP DATABASE if exists sunchamps_dev;

CREATE DATABASE sunchamps_dev;

USE sunchamps_dev;

CREATE TABLE items (
	item_id int NOT NULL AUTO_INCREMENT,
	name varchar(30) NOT NULL,
	price int NOT NULL,
	stock int NOT NULL,
	onList boolean,
	rating INT NOT NULL,
	numOfRatings INT NOT NULL,
	relatedItems JSON NOT NULL,
	img_url varchar(200) NOT NULL,
	UNIQUE KEY (item_id)
);

ALTER TABLE items AUTO_INCREMENT=1;

CREATE TABLE cartItems (
	item_id int NOT NULL,
	quantity int NOT NULL
);