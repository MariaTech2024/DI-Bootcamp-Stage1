import random

def get_words_from_file():
    with open('sowpods.txt', 'r') as f:
        words = f.read().splitlines()
    return words

def get_random_sentence(length):
    words = get_words_from_file()
    random_words = random.choices(words, k=length)
    sentence = ' '.join(random_words)
    sentence = sentence.lower()
    return sentence

def main():
    print("This program generates a random sentence of a length specified by the user.")

    try:
        length = int(input("Enter the length of the sentence (between 2 and 20): "))
    except ValueError:
        print("Invalid input. Please enter an integer.")
        return

    if length < 2 or length > 20:
        print("Invalid input. Please enter a number between 2 and 20.")
        return

    sentence = get_random_sentence(length)
    print("Here is your sentence:\n" + sentence)

if __name__ == "__main__":
    main()