#Exercise 1
keys = ['Ten', 'Twenty', 'Thirty']
values = [10, 20, 30]
print(dict(zip(keys, values)))



#Exercise 2
n = int(input("Enter how many family members you have: "))
family={}
for i in range(n):
    name = str(input("Enter name: "))
    number = int(input("Enter age: "))
    family[name]=number

ticket_price = {
    "free": 0,
    "child": 10,
    "adult": 15
}

total_cost = 0

for name, age in family.items():
    if age < 3:
        price = ticket_price["free"]
    elif age >= 3 and age <= 12:
        price = ticket_price["child"]
    else:
        price = ticket_price["adult"]
        
    print(f"{name} has to pay ${price}")
    total_cost += price
    
print(f"Total cost: ${total_cost}")



#Exercise3

#2
brand = {
    "name": "Zara",
    "creation_date": 1975,
    "creator_name": "Amancio Ortega Gaona",
    "type_of_clothes": ["men", "women", "children", "home"],
    "international_competitors": ["Gap", "H&M", "Benetton"],
    "number_stores": 7000,
    "major_color": {
        "France": ["blue"],
        "Spain": ["red"],
        "US": ["pink", "green"]
    }
}

#3
brand["number_stores"] = 2

#4
print(f"Zara's clients are women, men, and children.")

#5
brand["country_creation"] = "Spain"

#6
if "international_competitors" in brand:
    brand["international_competitors"].append("Desigual")

#7
del brand["creation_date"]

#8
last_competitor = brand["international_competitors"][-1]
print(f"The last international competitor is {last_competitor}.")

#9
us_colors = brand["major_color"]["US"]
print("The major clothes colors in the US are:", ", ".join(us_colors))

#10
key_value_pairs = len(brand)
print(f"The dictionary has {key_value_pairs} key-value pairs.")

#11
print("Keys of the dictionary:", list(brand.keys()))

#12
more_on_zara = {
    "creation_date": 1975,
    "number_stores": 10000
}

#13 
brand.update(more_on_zara)

#14
brand["number_stores"] = 2



#Exercise4
users = ["Mickey", "Minnie", "Donald", "Ariel", "Pluto"]

#1
disney_users_A = {}
for index, user in enumerate(users):
    disney_users_A[user] = index
print(disney_users_A)

#2
disney_users_B = {}
for index, user in enumerate(users):
    disney_users_B[index] = user
print(disney_users_B)

#3
disney_users_C = {}
sorted_users = sorted(users)
for index, user in enumerate(sorted_users):
    disney_users_C[user] = index
print(disney_users_C)

#4
disney_users_A_filtered = {}
for index, user in enumerate(users):
    if 'i' in user.lower():
        disney_users_A_filtered[user] = index
print(disney_users_A_filtered)

disney_users_A_filtered_2 = {}
for index, user in enumerate(users):
    if user[0].lower() in ['m', 'p']:
        disney_users_A_filtered_2[user] = index
print(disney_users_A_filtered_2)