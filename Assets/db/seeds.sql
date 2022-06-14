INSERT INTO departments (dep_name)
VALUES  ("Sales"),
        ("Engineering"),
        ("Finance"),
        ("Legal");

INSERT INTO staff_roles (department_id,title,salary)
VALUES  (1,"Head of Sales",70000),
        (1,"Sales Associate",50000),
        (1,"Senior Sales Associate",60000),
        (2,"Head of Engineering",120000),
        (2,"Junior Engineer",80000),
        (2,"Senior Engineer",100000),
        (3,"Head of Finance",100000),
        (3,"Finance Associate",80000),
        (3,"Senior Finance Associate",70000);

INSERT INTO employees (emp_first_name, emp_last_name, emp_role_id)
VALUES ("Elliot","Waxman",1),
    ("Based","God",3),
    ("Adam","Waxman",2),
    ("Jordan","Wolken",5),
    ("Don","Draper",4),
    ("Lucy","Guo",6);