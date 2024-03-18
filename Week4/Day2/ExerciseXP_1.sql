SELECT * FROM public.items ORDER BY item_price ASC;

SELECT * FROM public.items WHERE item_price >= 80 ORDER BY item_price DESC;

SELECT first_name, last_name FROM public.customers ORDER BY first_name ASC LIMIT 3;

SELECT last_name FROM public.customers ORDER BY last_name DESC;