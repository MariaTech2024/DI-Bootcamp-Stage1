CREATE TABLE countries(
    country_id SERIAL PRIMARY KEY,
 	name VARCHAR(64),
 	capital VARCHAR(64),
 	flag VARCHAR(64),
 	subregion VARCHAR(64),
 	population BIGINT
);

SELECT * FROM countries;
