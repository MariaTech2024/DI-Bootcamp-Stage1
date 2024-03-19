UPDATE film SET language_id = 3 WHERE film_id IN (1, 2);

SELECT conname, confrelid::regclass FROM pg_constraint WHERE confrelid = 'customer'::regclass;

DROP TABLE customer_review;

SELECT COUNT(*) FROM rental WHERE return_date IS NULL;

SELECT film.title, film.replacement_cost FROM film 
JOIN inventory ON film.film_id = inventory.film_id 
JOIN rental ON inventory.inventory_id = rental.inventory_id 
WHERE rental.return_date IS NULL 
ORDER BY film.replacement_cost DESC 
LIMIT 30;


SELECT film.title FROM film 
JOIN film_actor ON film_actor.film_id = film.film_id
JOIN actor ON actor.actor_id = film_actor.actor_id 
WHERE film.description ILIKE '%sumo wrestler%' AND actor.first_name = 'Penelope' AND actor.last_name = 'Monroe';


SELECT title FROM film 
WHERE length < 60 AND rating = 'R';


SELECT film.title, film.description FROM film 
JOIN inventory ON inventory.film_id = film.film_id
JOIN rental ON rental.inventory_id = inventory.inventory_id
JOIN customer ON customer.customer_id = rental.customer_id 
WHERE customer.first_name = 'Matthew' AND customer.last_name = 'Mahan' AND film.rental_rate > 4.00 
AND rental.return_date BETWEEN '2005-07-28' AND '2005-08-01';


SELECT * FROM film 
JOIN inventory ON inventory.film_id = film.film_id 
JOIN rental ON rental.inventory_id = inventory.inventory_id 
JOIN customer ON customer.customer_id = rental.customer_id  
WHERE customer.first_name = 'Matthew' AND customer.last_name = 'Mahan' 
AND (film.title ILIKE '%boat%' OR film.description ILIKE '%boat%') 
AND film.replacement_cost > (SELECT AVG(film.replacement_cost) FROM film);