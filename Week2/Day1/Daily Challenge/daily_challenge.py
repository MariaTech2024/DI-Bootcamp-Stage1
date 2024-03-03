import random

sentence=str(input("Provide a string which is 10 characters long: "))
if len(sentence) < 10:
    print("String not long enough")
elif len(sentence) > 10:
    print("String too long")
else:
    print("Perfect string")
    
firstChar=sentence[0]
print(firstChar)

lastChar=sentence[-1]
print(lastChar)

for i in range(len(sentence)):
    print(sentence[:i+1])

shuffled_sentence=''.join(random.sample(sentence, len(sentence)))
print (shuffled_sentence)