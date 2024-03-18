import random

list_of_numbers = [random.randint(0, 10000) for _ in range(20000)]
target_number = 3728

pair_count = 0

for i in range(len(list_of_numbers)):
    for j in range(i+1, len(list_of_numbers)):
        if list_of_numbers[i] + list_of_numbers[j] == target_number:
            pair_count += 1

print("Number of pairs in list_of_numbers that sum to", target_number, ":", pair_count)