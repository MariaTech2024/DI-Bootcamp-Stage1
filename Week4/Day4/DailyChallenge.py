import requests
import random
import psycopg2

DATABASE = 'Countries'
TABLENAME = 'countries'
USERNAME = 'postgres'
PASSWORD = '01813'
HOSTNAME = 'localhost'
PORT = '5432'

connection = psycopg2.connect(dbname=DATABASE, user=USERNAME, password=PASSWORD, host=HOSTNAME, port = PORT)
                
cursor = connection.cursor()

url = 'https://restcountries.com/v3.1/all?fields=name,capital,flags,subregion,population'

try:
    
    response = requests.get(url)
    data = response.json()

    random_countries = random.sample(data, 10)

    for country in random_countries:
        name = country['name']['common']
        capital = country['capital'][0] if 'capital' in country else 'N/A'
        
        if 'flags' in country and isinstance(country['flags'], list):
            flag = country['flags'][0]
        else:
            flag = 'N/A'
        
        subregion = country['subregion'] if 'subregion' in country else 'N/A'
        population = country['population'] if 'population' in country else 0
    
        cursor.execute('''INSERT INTO countries (name, capital, flag, subregion, population)
                          VALUES (%s, %s, %s, %s, %s)''', (name, capital, flag, subregion, population))

    connection.commit()
    print("10 random countries successfully added to the database!")

except requests.exceptions.RequestException as e:
    print("Error occurred while making the API request:", e)

finally:
    connection.close()