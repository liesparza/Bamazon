DROP DATABASE IF EXISTS bamazon_db;

CREATE DATABASE bamazon_db;

USE bamazon_db;



CREATE TABLE products (
item_id INTEGER NOT NULL AUTO_INCREMENT,
product_name VARCHAR (30) NOT NULL,
department_name VARCHAR (30) NOT NULL,
price INTEGER(10),
stock_quantity INTEGER(10),
PRIMARY KEY (item_id)
);


INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES("Ipod","Electronics", 80, 10);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES("MacBook","Electronics", 180, 5);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES("Yogurt","Dairy", 5, 2);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES("Chips","Food", 3, 1);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES("Mayonnaise","Food", 8, 0);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES("Lamborghini","Vehicles", 8000, 4);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES("Lamborghini Wheels","Vehicles", 100, 12);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES("Lamborghini Keys","Vehicles", 50, 2);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES("Shampoo","Hygiene", 11, 34);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES("Soap","Hygiene", 7, 30);

select * from products;

ALTER USER "root"@"localhost" IDENTIFIED WITH mysql_native_password BY "marcela1";
