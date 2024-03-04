sandwich_orders = ["Tuna sandwich", "Pastrami sandwich", "Avocado sandwich", "Pastrami sandwich", "Egg sandwich", "Chicken sandwich", "Pastrami sandwich"]
while "Pastrami sandwich" in sandwich_orders:
    sandwich_orders.remove("Pastrami sandwich")
print(sandwich_orders)
finished_sandwiches = []
while sandwich_orders:
    sandwich = sandwich_orders.pop(0)
    finished_sandwiches.append(sandwich)
    print("I made your", sandwich.lower())

print("\nList of sandwiches that were made:")
for sandwich in finished_sandwiches:
    print(sandwich)