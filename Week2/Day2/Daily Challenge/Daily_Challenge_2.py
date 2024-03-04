string = str(input("Enter a string: "))
a = ""
for char in string:
    if char not in a:
        a = a + char
print(a)