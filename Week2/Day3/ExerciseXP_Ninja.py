cars = "Volkswagen, Toyota, Ford Motor, Honda, Chevrolet"
updated_cars = list(cars.split(" ")) 
print(updated_cars)
print(len(updated_cars))
print(updated_cars[::-1])

count = 0
for letter in updated_cars:
    if 'o' in letter:
        count += 1
print("Number of manufacturers with the letter 'o':", count)

name_without_i = []
for name in updated_cars:
    if 'i' not in name:
        name_without_i.append(name)
print("Names without the letter 'i':", name_without_i)

manufacturers = ["Honda", "Volkswagen", "Toyota", "Ford Motor", "Honda", "Chevrolet", "Toyota"]
unique_names = list(set(manufacturers))
unique_names_string = ', '.join(unique_names)

print("List after removing duplicates:", unique_names_string)

manufacturers.sort()
reversed_manufacturers = [manufacturer[::-1] for manufacturer in manufacturers]
print("Manufacturers in ascending order with reversed letters:")
for manufacturer in reversed_manufacturers:
    print(manufacturer)