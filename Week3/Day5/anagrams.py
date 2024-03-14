from anagram_checker import AnagramChecker

def main():
    anagram_checker = AnagramChecker()

    while True:
        print("\nMenu:")
        print("1. Input a word")
        print("2. Exit")
        choice = input("Enter your choice: ")

        if choice == '2':
            break

        elif choice == '1':
            word = input("\nEnter a word: ").strip()

            if not word.isalpha():
                print("Invalid input. Only alphabetic characters are allowed.")
                continue

            if ' ' in word:
                print("Invalid input. Only a single word is allowed.")
                continue

            if not anagram_checker.is_valid_word(word):
                print(f"\nYOUR WORD : \"{word.upper()}\"")
                print("This is not a valid English word.")
                continue

            anagrams = anagram_checker.get_anagrams(word)

            print(f"\nYOUR WORD : \"{word.upper()}\"")
            print("This is a valid English word.")
            print(f"Anagrams for your word: {', '.join(anagrams)}.")

        else:
            print("Invalid choice. Please choose either 1 or 2.")

if __name__ == "__main__":
    main()