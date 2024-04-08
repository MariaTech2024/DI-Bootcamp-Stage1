data = []
for _ in range(3):
    input_data = input("Enter name, age, and score separated by commas: ").split(',')
    name = input_data[0].strip()
    age = int(input_data[1].strip())
    score = int(input_data[2].strip())
    data.append((name, age, score))

sorted_data = sorted(data, key=lambda x: (x[0], x[1], x[2]))

print(sorted_data)