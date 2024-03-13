import re
from collections import Counter
import string

class Text:
    def __init__(self, text):
        self.text = text
        self.words = self._preprocess()

    def _preprocess(self):
        return re.findall(r'\b\w+\b', self.text.lower())

    def frequency(self, word):
        word = word.lower()
        word_frequency = self.words.count(word)
        if word_frequency:
            return word_frequency
        else:
            return None

    def most_common_word(self):
        freqs = Counter(self.words)
        return freqs.most_common(1)[0][0]

    def unique_words(self):
        return list(set(self.words))

    @classmethod
    def from_file(cls, filename):
        with open(filename, 'r') as f:
            text = f.read()
        return cls(text)

class TextModification(Text):
    def __init__(self, text):
        super().__init__(text)
        self.punctuation = string.punctuation
        self.stopwords = ['i', 'me', 'my', 'myself', 'we', 'our', 'ours', 'ourselves', 'you', 'your', 'yours',
                          'yourself', 'yourselves', 'he', 'him', 'his', 'himself', 'she', 'her', 'hers', 'herself',
                          'it', 'its', 'itself', 'they', 'them', 'their', 'theirs', 'themselves', 'what', 'which',
                          'who', 'whom', 'this', 'that', 'these', 'those', 'am', 'is', 'are', 'was', 'were', 'be',
                          'been', 'being', 'have', 'has', 'had', 'having', 'do', 'does', 'did', 'doing', 'a', 'an',
                          'the', 'and', 'but', 'if', 'or', 'because', 'as', 'until', 'while', 'of', 'at', 'by', 'for',
                          'with', 'about', 'against', 'between', 'into', 'through', 'during', 'before', 'after',
                          'above', 'below', 'to', 'from', 'up', 'down', 'in', 'out', 'on', 'off', 'over', 'under',
                          'again', 'further', 'then', 'once', 'here', 'there', 'when', 'where', 'why', 'how', 'all',
                          'any', 'both', 'each', 'few', 'more', 'most', 'other', 'some', 'such', 'no', 'nor', 'not',
                          'only', 'own', 'same', 'so', 'than', 'too', 'very', 's', 't', 'can', 'will', 'just', 'don',
                          'should', 'now']

    def remove_punctuation(self):
        no_punct = "".join([c for c in self.text if c not in self.punctuation])
        return no_punct

    def remove_stopwords(self):
        words = self.words
        no_stop = " ".join([word for word in words if word not in self.stopwords])
        return no_stop

    def remove_special_characters(self):
        return re.sub('[^A-Za-z0-9 ]+', '', self.text)

txt = Text("A good book would sometimes cost as much as a good house.")
print(txt.frequency("good"))
print(txt.most_common_word())
print(txt.unique_words())

txt2 = Text.from_file('the_stranger.txt')
print(txt2.most_common_word())

txt_mod = TextModification("A good book would sometimes cost as much as a good house. @#%$!!")
print(txt_mod.remove_punctuation())
print(txt_mod.remove_stopwords())
print(txt_mod.remove_special_characters())