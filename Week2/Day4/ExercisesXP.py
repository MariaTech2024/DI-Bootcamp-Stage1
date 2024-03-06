#Exercise1

def display_message():
    print("You are learning Python now.")
display_message()



#Exercise2

def favorite_book(title):
    print("One of my favorite book is " + title)
favorite_book('"The 48 Laws of Power" by Robert Greene.')



#Exercise3

def describe_city(city, country = ""):
    print(city + " is in " + country)
describe_city("Rome", "Italy.")



#Exercise4

import random

def compare_numbers(user_number):
    random_number = random.randint(1, 100)
    if user_number == random_number:
        print("Success! The numbers match.")
    else:
        print("Fail! The numbers do not match.")
        print("User number: ", user_number)
        print("Random number: ", random_number)
        
user_input = int(input("Enter a number between 1 to 100: "))
compare_numbers(user_input)



#Exercise5

def make_shirt(size = "large", text = "I love Python."):
    print("The size of the shirt is",size, "and the text is:",text)
make_shirt()
make_shirt("medium")
make_shirt("small", "Everything is under CTRL.")
make_shirt(size = "extra small", text = "My code doesn't work...why?...My code works...why?..")



#Exercise6

magician_names = ['Harry Houdini', 'David Blaine', 'Criss Angel']

def show_magicians():
    for magician in magician_names:
        print(magician)
        
def make_great():
    for i in range(len(magician_names)):
        magician_names[i] += " the Great"

make_great()
show_magicians()



#Exercise7

import random

def get_random_temp(season):
    if season == "winter":
        lower_limit = -10
        upper_limit = 16
    elif season == "autumn":
        lower_limit = 17
        upper_limit = 23
    elif season == "spring":
        lower_limit = 24
        upper_limit = 32
    elif season == "summer":
        lower_limit = 33
        upper_limit = 40
    else:
        print("Invalid season")
        return
    
    temperature = round(random.uniform(lower_limit, upper_limit), 1)
    return temperature

def main():
    month = int(input("Enter a number of the month from 1 to 12: "))
    if month in (1,2,12):
        season = "winter"
    elif month in (3,4,5):
        season = "spring"
    elif month in (6,7,8):
        season = "summer"
    elif month in (9,10,11):
        season = "autumn"
    else:
        print("Invalid season entered.")
        return

    temperature = get_random_temp(season)
    if temperature is not None:
        print("The temperature right now is", temperature, "degrees Celsius.")
        
        if temperature < 0:
            print("Brrr, that’s freezing! Wear some extra layers today.")
        elif temperature < 16:
            print("Quite chilly! Don’t forget your coat.")
        elif temperature < 24:
            print("Enjoy the weather!")
        elif temperature < 32:
            print("It's getting warm.")
        else:
            print("It's hot outside")
main()



#Exercise8

data = [
    {
        "question": "What is Baby Yoda's real name?",
        "answer": "Grogu"
    },
    {
        "question": "Where did Obi-Wan take Luke after his birth?",
        "answer": "Tatooine"
    },
    {
        "question": "What year did the first Star Wars movie come out?",
        "answer": "1977"
    },
    {
        "question": "Who built C-3PO?",
        "answer": "Anakin Skywalker"
    },
    {
        "question": "Anakin Skywalker grew up to be who?",
        "answer": "Darth Vader"
    },
    {
        "question": "What species is Chewbacca?",
        "answer": "Wookiee"
    }
]

def quiz():
    correct_answers = 0
    incorrect_answers = 0
    wrong_answers = []
    
    for question in data:
        user_answer = input(question["question"])
        if user_answer.lower() == question["answer"].lower():
            correct_answers += 1
        else: 
            incorrect_answers += 1
            wrong_answers.append( 
                {
                "question": question["question"],
                "user_answer": user_answer,
                "correct_answer": question["answer"]
                
            })
    results(correct_answers, incorrect_answers, wrong_answers)
        
def results(correct_answers, incorrect_answers, wrong_answers):
            print("Results: ")
            print("Correct answers:", correct_answers)
            print("Incorrect answers:", incorrect_answers)
            
            if incorrect_answers > 0:
                print("Total of questions answered incorrectly: ")
                for wrong_answer in wrong_answers:
                    print("Question:", wrong_answer["question"] )
                    print("Your answer:", wrong_answer["user_answer"])
                    print("Correct answer:", wrong_answer["correct_answer"])
                    print()
                  
            if incorrect_answers > 3:
                new_attempt = input("You had more then 3 wrong answers. Do you want to play again? ")
                if new_attempt.lower() == "yesgrogu":
                    quiz()
quiz()            