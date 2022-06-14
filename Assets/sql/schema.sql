-- index = require("index.js");
--  run = process.argv[2]
DROP DATABASE IF EXISTS main;
CREATE DATABASE main;

USE main;



CREATE TABLE department (
  id INT PRIMARY KEY NOT NULL,
  name VARCHAR(30) NOT NULL,
);

CREATE TABLE role (
  id INT PRIMARY KEY NOT NULL,
  title VARCHAR(30),
  salary DECIMAL,
  department_id INT,
  FOREIGN KEY (department_id)
  REFERENCES department(id)
  ON DELETE SET NULL
);

CREATE TABLE employee (
  id INT PRIMARY KEY
  first_name VARCHAR(30) NOT NULL,
  last_name VARCHAR(30) NOT NULL,
  role_id INT NOT NULL,
  manager_id INT,
  FOREIGN KEY (role_id)
  REFERENCES role(id)
  FOREIGN KEY (manager_id)
  REFERENCES employee(id)
  ON DELETE SET NULL
);

