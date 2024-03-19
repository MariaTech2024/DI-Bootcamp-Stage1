SELECT * FROM language;

SELECT film.title, film.description, language.name AS language_name FROM film
INNER JOIN language ON film.language_id = language.language_id;

SELECT film.title, film.description, language.name AS language_name FROM language
LEFT JOIN film ON language.language_id = film.language_id;

CREATE TABLE new_film(
    id SERIAL PRIMARY KEY,
    name VARCHAR(255)
);

INSERT INTO new_film (name) VALUES ('The Game'), ('Exam'), ('Taking Lives');

CREATE TABLE customer_review (
    review_id SERIAL PRIMARY KEY,
    film_id INTEGER REFERENCES new_film(id) ON DELETE CASCADE,
    language_id INTEGER REFERENCES language(language_id),
    title VARCHAR(255),
    score INTEGER CHECK(score BETWEEN 1 AND 10),
    review_text TEXT,
    last_update TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);


INSERT INTO customer_review (film_id, language_id, title, score, review_text) 
VALUES 
(1, 1, 'Recommended to watch', 9, 'An excellent classic thriller that will keep you on the edge of your seat.'),
(2, 1, 'Recommended to watch', 9, 'It is a wonderful psychological study of people.');

DELETE FROM new_film WHERE id = 1;



