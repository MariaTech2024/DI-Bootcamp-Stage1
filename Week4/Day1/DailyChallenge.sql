CREATE TABLE actors(
 actor_id SERIAL PRIMARY KEY,
 first_name VARCHAR (50) NOT NULL,
 last_name VARCHAR (100) NOT NULL,
 age DATE NOT NULL,
 number_oscars SMALLINT NOT NULL
)

INSERT INTO actors (first_name, last_name, age, number_oscars)
VALUES('Bruce', 'Willis', '19/03/1955', 0),
      ('George', 'Clooney', '06/05/1961', 2),
	  ('Angelina', 'Jolie', '04/06/1975', 1),
	  ('Natalie', 'Portman', '09/06/1981', 1),
	  ('Michael', 'Douglas', '25/09/1944', 2),
	  ('Robert', 'De Niro', '17/08/1943', 2),
	  ('Will', 'Smith', '25/09/1968', 1);
	  
SELECT COUNT(*) FROM actors;

INSERT INTO actors (first_name, last_name, age, number_oscars) 
VALUES ('', 'Depp', '09/06/1963', 0);
