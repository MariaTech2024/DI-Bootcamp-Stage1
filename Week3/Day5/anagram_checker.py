class AnagramChecker:
    def __init__(self):
        with open('sowpods1.txt', 'r') as f:
            self.words = [word.strip().lower() for word in f.readlines()]

    def is_valid_word(self, word):
        return word.lower() in self.words

    def get_anagrams(self, word):
        return [word_from_list for word_from_list in self.words if self.is_anagram(word, word_from_list)]

    @staticmethod
    def is_anagram(word1, word2):
        return sorted(word1.lower()) == sorted(word2.lower())