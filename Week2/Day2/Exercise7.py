fruits = input("Enter your favourite fruits: ")
fav_fruits = fruits.split()
print(fav_fruits)
any_fruits = input("Enter any fruit one more time: ")
if any_fruits in fav_fruits:
    print("You chose one of your favorite fruits! Enjoy!")
else:
    print("You chose a new fruit. I hope you enjoy")