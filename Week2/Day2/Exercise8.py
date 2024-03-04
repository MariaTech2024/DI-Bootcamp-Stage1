toppings = []
price_per_topping = 2.5
while True:
    topping = input("Enter a pizza topping (or 'quit' to finish): ")
    if topping.lower() == 'quit':
        break
    toppings.append(topping)
    print("Adding", topping, "to your pizza.")

total_price = 10 + len(toppings) * price_per_topping
print("\nToppings on your pizza:")
for topping in toppings:
    print(" ", topping)
print("\nTotal price:", total_price)
