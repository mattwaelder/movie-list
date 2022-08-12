DROP DATABASE IF EXISTS moviesdb;

CREATE DATABASE moviesdb;

USE moviesdb;

CREATE TABLE movies (
  id INTEGER PRIMARY KEY auto_increment,
  title VARCHAR(50)
);


/*
Create other tables and define schemas for them here!
*/
/*
mysql -u root < server/schema.sql
*/