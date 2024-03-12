#Exercise3

import random
import string

def generate_random_string(length):
    letters = string.ascii_letters  
    result_str = ''.join(random.choice(letters) for i in range(length))
    return result_str

print(generate_random_string(5))



#Exercise4

from datetime import datetime

def display_current_date():
    current_date = datetime.today().date()
    print(current_date.strftime("%d-%m-%Y"))   
display_current_date()



#Exercise5

from datetime import datetime, timedelta

def time_until_new_year():
    now = datetime.now()
    current_year = now.year
    
    if now.month == 1 and now.day == 1:
        new_year = datetime(current_year + 1, 1, 1)
    else:
        new_year = datetime(current_year + 1, 1, 1)

    diff = new_year - now

    days, seconds = diff.days, diff.seconds
    hours = seconds // 3600
    minutes = (seconds % 3600) // 60
    seconds = seconds % 60
    
    print(f"The 1st of January is in {days} days and {hours}:{minutes}:{seconds} hours.")

time_until_new_year()



#Exercise6

from datetime import datetime

def calculate_minutes_lived(birthdate_str):
    birthdate = datetime.strptime(birthdate_str, '%d-%m-%Y')
    lived = datetime.now() - birthdate
    minutes_lived = lived.total_seconds() / 60

    print(f"You have lived for {int(minutes_lived)} minutes.")

calculate_minutes_lived('11-12-1989')



#Exercise7

from faker import Faker

fake = Faker()

users = []

def add_user():
    user = {
        "name": fake.name(),
        "address": fake.address().replace('\n', ', '),
        "language_code": fake.language_code(),
    }
    
    users.append(user)

for _ in range(10):
    add_user()

for user in users:
    print(user)
