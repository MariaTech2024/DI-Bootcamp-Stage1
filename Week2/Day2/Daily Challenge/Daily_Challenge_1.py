number = int(input("Enter a number: "))
length = int(input("Enter a length: "))
list = []
for i in range(1, length+1):
    list.append(number*i)
print(list)
    