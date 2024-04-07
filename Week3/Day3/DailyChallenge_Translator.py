from googletrans import Translator

french_words = ["Bonjour", "Au revoir", "Bienvenue", "A bientôt"]
translator = Translator()
translations = {}

# Translate each word and store in the dictionary
for word in french_words:
    translation = translator.translate(word, src='fr', dest='en').text
    translations[word] = translation

print(translations)