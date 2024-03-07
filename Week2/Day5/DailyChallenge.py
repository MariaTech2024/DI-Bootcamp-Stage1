#Challenge1

word_sequence = input("Enter a comma separated sequence of words: ")

words = [word.strip() for word in word_sequence.split(",")]
sorted_words = sorted(words)

print(",".join(sorted_words))



#Challenge2

def longest_word(sentence):
    words = sentence.split()
    longest = max(words, key=len)
    return longest.strip(".,?!")

sentence = "Margaret's toy is a pretty doll."
print(longest_word(sentence)) 

sentence = "A thing of beauty is a joy forever."
print(longest_word(sentence))  

sentence = "Forgetfulness is by all means powerless!"
print(longest_word(sentence))  