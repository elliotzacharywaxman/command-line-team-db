DROP DATABASE IF EXISTS staff_db;
CREATE DATABASE staff_db;

USE staff_db;

CREATE TABLE departments (
  id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
  dep_name VARCHAR(30) NOT NULL
);

CREATE TABLE staff_roles (
  role_id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
  title VARCHAR(30),
  salary DECIMAL,
  department_id INT,
  FOREIGN KEY (department_id) REFERENCES departments(id)
);

CREATE TABLE employees (
  emp_id INT AUTO_INCREMENT PRIMARY KEY,
  emp_first_name VARCHAR(30) NOT NULL,
  emp_last_name VARCHAR(30) NOT NULL,
  emp_role_id INT DEFAULT NULL, FOREIGN KEY (emp_role_id) REFERENCES staff_roles(role_id),
  emp_manager_id INT DEFAULT NULL
);

