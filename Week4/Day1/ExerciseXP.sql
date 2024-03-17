CREATE TABLE public.items (
    item_id INT PRIMARY KEY,
    item_name VARCHAR(255) NOT NULL,
    item_price DECIMAL(10, 2) NOT NULL
);

CREATE TABLE public.customers (
    customer_id INT PRIMARY KEY,
    first_name VARCHAR(255) NOT NULL,
    last_name VARCHAR(255) NOT NULL
);

INSERT INTO public.items (item_id, item_name, item_price)
    VALUES (1, 'Small Desk', 100.00),
           (2, 'Large Desk', 300.00),
           (3, 'Fan', 80.00);
		   
INSERT INTO public.customers (customer_id, first_name, last_name)
    VALUES (1, 'Greg', 'Jones'),
	       (2, 'Sandra', 'Jones'),
		   (3, 'Scott', 'Scott'),
		   (4, 'Trevor', 'Green'),
		   (5, 'Melanie', 'Johnson');
		   
SELECT * FROM public.items;

SELECT * FROM public.items WHERE item_price > 80;

SELECT * FROM public.items WHERE item_price <= 300;

SELECT * FROM public.customers WHERE last_name = 'Smith';

SELECT * FROM public.customers WHERE last_name = 'Jones';

SELECT * FROM public.customers WHERE first_name != 'Scott';
