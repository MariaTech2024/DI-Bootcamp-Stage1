import random

class Card:
    def __init__(self, suit, value):
        self.suit = suit
        self.value = value

    def __str__(self):
        return f"{self.value} of {self.suit}"


class Deck:
    def __init__(self):
        suits = ["Hearts", "Diamonds", "Clubs", "Spades"]
        values = ["A", "2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K"]
        self.cards = [Card(suit, value) for suit in suits for value in values]

    def shuffle(self):
        random.shuffle(self.cards)

    def deal(self):
        if not self.cards:
            return None
        return self.cards.pop(0)

if __name__ == "__main__":
    deck = Deck()
    print("Deck before shuffling:")
    for card in deck.cards:
        print(card)

    print("\nShuffling the deck...")
    deck.shuffle()

    print("\nDeck after shuffling:")
    for card in deck.cards:
        print(card)

    print("\nDealing a card:")
    card_dealt = deck.deal()
    print("Card dealt:", card_dealt)

    print("\nDeck after dealing a card:")
    for card in deck.cards:
        print(card)