DROP DATABASE IF EXISTS employee_DB;

CREATE DATABASE employee_DB;

USE employee_DB;

CREATE TABLE department (
  id INT NOT NULL AUTO_INCREMENT,
  name VARCHAR(30) NOT NULL,
  PRIMARY KEY (id)
);

CREATE TABLE role (
  id INT NOT NULL AUTO_INCREMENT,
  title VARCHAR(30) NOT NULL,
  salary INT NOT NULL,
  department_id INT NOT NULL,
  PRIMARY KEY (id)
);

CREATE TABLE employee (
  id INT NOT NULL AUTO_INCREMENT,
  first_name VARCHAR(30) NOT NULL,
  last_name VARCHAR(30) NOT NULL,
  role_id INT NOT NULL,
  manager_id INT NULL,
  PRIMARY KEY (id)
);

INSERT INTO department (name)
VALUES ("Sales"), ("IT"), ("Customer Services");

INSERT INTO role (title, salary, department_id)
VALUES ("Sales Manager", 40000, 1),
("IT Manager", 70000, 2),
("Customer Services Executive", 30000, 3);

INSERT INTO employee (first_name, last_name, role_id)
VALUES ("Eva", "Onyeguke", 1),
("Megan", "Cunliffe", 2),
("Rachel", "Connelly", 3);
