CREATE TABLE Customer (
    id SERIAL PRIMARY KEY,
    first_name VARCHAR(50) NOT NULL,
    last_name VARCHAR(50) NOT NULL
);

CREATE TABLE CustomerProfile (
    id SERIAL PRIMARY KEY,
    isLoggedIn BOOLEAN DEFAULT false,
    customer_id INTEGER UNIQUE REFERENCES Customer(id)
);

INSERT INTO Customer (first_name, last_name) VALUES ('John', 'Doe'), ('Jerome', 'Lalu'), ('Lea', 'Rive');

INSERT INTO CustomerProfile (isLoggedIn, customer_id)
SELECT true, id FROM Customer WHERE first_name = 'John' AND last_name = 'Doe';

INSERT INTO CustomerProfile (isLoggedIn, customer_id)
SELECT false, id FROM Customer WHERE first_name = 'Jerome' AND last_name = 'Lalu';

SELECT C.first_name FROM Customer C
INNER JOIN CustomerProfile CP ON C.id = CP.customer_id WHERE CP.isLoggedIn;

SELECT C.first_name, CP.isLoggedIn FROM Customer C
LEFT JOIN CustomerProfile CP ON C.id = CP.customer_id;

SELECT COUNT(*) FROM Customer C
LEFT JOIN CustomerProfile CP ON C.id = CP.customer_id
WHERE CP.isLoggedIn IS NULL OR CP.isLoggedIn = false;
