create database  api;
use api;

-- TABLA DE USUARIOS
create table users (
	id INT auto_increment primary key,
	name varchar(100) not null,
	email varchar(100) unique not null,
	password varchar(255) not null,
	created_u TIMESTAMP default CURRENT_TIMESTAMP
);