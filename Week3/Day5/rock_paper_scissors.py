import random

class Game:
    def __init__(self):
        self.items = ["rock", "paper", "scissors"]

    def get_user_item(self):
        while True:
            user_item = input("Please choose one of rock, paper, scissors: ").lower()
            if user_item in self.items:
                return user_item
            else:
                print("Invalid choice. Please try again.")

    def get_computer_item(self):
        return random.choice(self.items)

    def get_game_result(self, user_item, computer_item):
        if user_item == computer_item:
            return "draw"
        elif (user_item == "rock" and computer_item == "scissors") or \
                (user_item == "scissors" and computer_item == "paper") or \
                (user_item == "paper" and computer_item == "rock"):
            return "win"
        else:
            return "loss"

    def play(self):
        user_item = self.get_user_item()
        computer_item = self.get_computer_item()
        result = self.get_game_result(user_item, computer_item)

        print("You selected {}. The computer selected {}. You {}!".format(user_item, computer_item, result))
        return result

game = Game()
game.play()


def get_user_menu_choice():
    print("\nMenu:")
    print("1. Play a new game")
    print("2. Show scores")
    print("3. Quit")
    choice = input("Enter your choice: ")
    return choice

def print_results(results):
    print("\nGame Results:")
    print("Wins: ", results.get("win", 0))
    print("Losses: ", results.get("loss", 0))
    print("Draws: ", results.get("draw", 0))
    print("Thanks for playing!")

def main():
    game_results = {"win": 0, "loss": 0, "draw": 0}

    while True:
        choice = get_user_menu_choice()

        if choice == "1":
            game_instance = Game() 
            result = game_instance.play() 
            if result in game_results:
                game_results[result] += 1

        elif choice == "2":
            print_results(game_results)

        elif choice == "3":
            print_results(game_results)
            break

        else:
            print("Invalid choice. Please try again.")

if __name__ == "__main__":
    main()