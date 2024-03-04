family_size = int(input("Enter the number of people in the family: "))
total_cost = 0
for person in range(1, family_size + 1):
    age = int(input(f"Enter the age of person {person}: "))
    if age < 3:
        ticket_cost = 0
    elif 3 <= age <= 12:
        ticket_cost = 10
    else:
        ticket_cost = 15

    total_cost += ticket_cost
print("Total cost for the family's tickets:", total_cost)


teenagers = ["James", "David", "Tyler", "Jessica", "Lilly"]
allowed_ages = range(16, 22)
print("Teenagers' Movie Selection: ")
for teenager in teenagers:
    age = int(input(f"Enter the age of {teenager}: "))
    if age not in allowed_ages:
        teenagers.remove(teenager)

print("\nFinal List of Teenagers Allowed to Watch the Movie:")
print(teenagers)