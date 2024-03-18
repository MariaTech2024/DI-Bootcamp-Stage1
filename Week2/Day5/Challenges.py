#Write a script that inserts an item at a defined index in a list.
my_list = [1, 2, 3, 4, 5]
index = 2
item_to_insert = 10
my_list.insert(index, item_to_insert)
print("List after inserting", item_to_insert, "at index", index, ":", my_list)


#Write a script that counts the number of spaces in a string.
my_string = "Hello world! Python is a suitable programming language for beginner."
space_count = 0
for char in my_string:
    if char == ' ':
        space_count += 1
print("Number of spaces in the string:", space_count)


#Write a script that calculates the number of upper case letters and lower case letters in a string.
my_string1 = "Hello World! Python is a suitable programming language for beginner."
upper_count = 0
lower_count = 0
for char in my_string1:
    if char.isupper():
        upper_count += 1
    elif char.islower():
        lower_count += 1
print("Number of upper case letters:", upper_count)
print("Number of lower case letters:", lower_count)


#Write a function to find the sum of an array without using the built in function.
def array_sum(arr):
    total = 0
    for num in arr:
        total += num
    return total
my_array = [1,5,4,2]
print("Sum of the array:", array_sum(my_array))


#Write a function to find the max number in a list.
def find_max(arr):
    if not arr:
        return None
    max_number = arr[0]
    for num in arr:
        if num > max_number:
            max_number = num
    return max_number

my_list = [0,1,3,50]
print("Maximum number in the list:", find_max(my_list))


#Write a function that returns factorial of a number
def factorial_iterative(n):
    factorial = 1
    for i in range(1, n + 1):
        factorial *= i
    return factorial
num = 4
print("Factorial of", num, ":", factorial_iterative(num))


#Write a function that counts an element in a list (without using the count method)
def count_element(lst, element):
    count = 0
    for item in lst:
        if item == element:
            count += 1
    return count
my_list = ['a', 'a', 't', 'o']
element_to_count = 'a'
print("Count of", element_to_count, "in the list:", count_element(my_list, element_to_count))


#Write a function that returns the L2-norm (square root of the sum of squares) of the sum of a list
import math
def norm(lst):
    sum_of_squares = 0
    for num in lst:
        sum_of_squares += num ** 2
    norm_value = math.sqrt(sum_of_squares)
    return norm_value
my_list = [1, 2, 2]
print("Norm of", my_list, ":", norm(my_list))


#Write a function to find if an array is monotonic (sorted either ascending of descending)
def is_mono(arr):
    is_asc = all(arr[i] <= arr[i + 1] for i in range(len(arr) - 1))
    is_desc = all(arr[i] >= arr[i + 1] for i in range(len(arr) - 1))
    return is_asc or is_desc
print(is_mono([7, 6, 5, 5, 2, 0]))  # Output: True
print(is_mono([2, 3, 3, 3]))        # Output: True
print(is_mono([1, 2, 0, 4]))        # Output: False


#Write a function that prints the longest word in a list.
def longest_word(lst):
    longest = ""
    longest_length = 0
    for word in lst:
        if len(word) > longest_length:
            longest = word
            longest_length = len(word)
    print("Longest word in the list:", longest)
word_list = ["apple", "banana", "orange", "kiwi", "strawberry"]
longest_word(word_list)


#Given a list of integers and strings, put all the integers in one list, and all the strings in another one.
def separate_integers_and_strings(lst):
    integers = []
    strings = []
    for item in lst:
        if isinstance(item, int):
            integers.append(item)
        elif isinstance(item, str):
            strings.append(item)
    return integers, strings
mixed_list = [1, 2, 'apple', 'banana', 3, 'orange', 4, 'kiwi']
integers, strings = separate_integers_and_strings(mixed_list)
print("Integers:", integers)
print("Strings:", strings)


#Write a function to check if a string is a palindrome
def is_palindrome(s):
    s = s.lower()
    s = s.replace(" ", "")
    reversed_s = s[::-1]
    return s == reversed_s
print(is_palindrome('radar'))   # Output: True
print(is_palindrome('John'))    # Output: False


#Write a function that returns the amount of words in a sentence with length > k
def sum_over_k(sentence, k):
    words = sentence.split()
    count = sum(1 for word in words if len(word) > k)
    return count
sentence = 'Do or do not there is no try'
k = 2
print(sum_over_k(sentence, k))  # Output: 3


#Write a function that returns the average value in a dictionary
def dict_avg(dictionary):
    values = list(dictionary.values())
    avg = sum(values) / len(values)
    return avg
dictionary = {'a': 1, 'b': 2, 'c': 8, 'd': 1}
print(dict_avg(dictionary))  # Output: 3.0


#Write a function that returns common divisors of 2 numbers
def common_div(a, b):
    min_num = min(a, b)
    common_divisors = []
    for i in range(1, min_num + 1):
        if a % i == 0 and b % i == 0:
            common_divisors.append(i)
    return common_divisors
print(common_div(10, 20))  # Output: [1, 2, 5, 10]


#Write a function that test if a number is prime
def is_prime(n):
    if n < 2:
        return False
    for i in range(2, int(n**0.5) + 1):
        if n % i == 0:
            return False
    return True
print(is_prime(7))   # Output: True
print(is_prime(10))  # Output: False


#Write a function that prints elements of a list if the index and the value are even
def weird_print(lst):
    for index, value in enumerate(lst):
        if index % 2 == 0 and value % 2 == 0:
            print(value)
weird_print([1, 2, 2, 3, 4, 5])  


#Write a function that accepts an undefined number of keyworded arguments and return the count of different types
def type_count(**kwargs):
    type_counts = {"int": 0, "str": 0, "float": 0, "bool": 0}
    for value in kwargs.values():
        if isinstance(value, int):
            type_counts["int"] += 1
        elif isinstance(value, str):
            type_counts["str"] += 1
        elif isinstance(value, float):
            type_counts["float"] += 1
        elif isinstance(value, bool):
            type_counts["bool"] += 1
    return type_counts
print(type_count(a=1, b='string', c=1.0, d=True, e=False))


#Convert a string into a password format.
def convert_to_password(input_string):
    return '*' * len(input_string)
input_string = "mypassword"
output_password = convert_to_password(input_string)
print(output_password)  # Output: ***********



