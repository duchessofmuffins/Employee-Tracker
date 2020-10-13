DROP DATABASE IF EXISTS Homework12_db;
Create Database Homework12_db;
Use Homework12_db;

Create table Departments (
id INT NOT NULL AUTO_INCREMENT,
name Varchar(30) null,
PRIMARY KEY (id)
);


Create table Roles (
id INT NOT NULL AUTO_INCREMENT,
title varchar(30) null,
salary decimal(10, 2) null,
PRIMARY KEY (id),
FOREIGN KEY department_id int not null
);


Create table Employees (
id INT NOT NULL AUTO_INCREMENT,
first_name Varchar(30) null,
last_name Varchar(30) null,
FOREIGN KEY role_id int not null,
FOREIGN KEY manager_id int not null,
PRIMARY KEY (id)
);