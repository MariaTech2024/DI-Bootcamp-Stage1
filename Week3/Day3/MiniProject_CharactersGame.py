class Character:
    def __init__(self, name):
        self.name = name
        self.life = 20
        self.attack = 10
    
    def basic_attack(self, other):
        print(f"{self.name} attacks {other.name}!")
        other.life -= self.attack
        print(f"{other.name}'s life is now {other.life}")


class Druid(Character):
    def __init__(self, name):
        super().__init__(name)
        print(f"{name} the Druid is created!")
    
    def meditate(self):
        self.life += 10
        self.attack -= 2
        print(f"{self.name} meditates. Life is now {self.life} and attack is now {self.attack}.")
    
    def animal_help(self):
        self.attack += 5
        print(f"{self.name} uses animal help. Attack is now {self.attack}.")
    
    def fight(self, other):
        damage = 0.75 * self.life + 0.75 * self.attack
        print(f"{self.name} fights {other.name}!")
        other.life -= damage
        print(f"{other.name}'s life is now {other.life}")


class Warrior(Character):
    def __init__(self, name):
        super().__init__(name)
        print(f"{name} the Warrior is created!")
    
    def brawl(self, other):
        damage = 2 * self.attack
        print(f"{self.name} brawls with {other.name}!")
        other.life -= damage
        self.life += 0.5 * self.attack
        print(f"{other.name}'s life is now {other.life}")
        print(f"{self.name}'s life is now {self.life}")
    
    def train(self):
        self.attack += 2
        self.life += 2
        print(f"{self.name} trains. Attack is now {self.attack} and life is now {self.life}.")
    
    def roar(self, other):
        other.attack -= 3
        print(f"{self.name} roars at {other.name}. {other.name}'s attack is now {other.attack}")


class Mage(Character):
    def __init__(self, name):
        super().__init__(name)
        print(f"{name} the Mage is created!")
    
    def curse(self, other):
        other.attack -= 2
        print(f"{self.name} curses {other.name}. {other.name}'s attack is now {other.attack}")
    
    def summon(self):
        self.attack += 3
        print(f"{self.name} summons magic. Attack is now {self.attack}.")
    
    def cast_spell(self, other):
        if self.life > 0:
            damage = self.attack / self.life
            print(f"{self.name} casts a spell on {other.name}!")
            other.life -= damage
            print(f"{other.name}'s life is now {other.life}")
        else:
            print(f"{self.name} is too weak to cast a spell.")


# Now let's create one of each character and use their methods.
# Creating a Druid
druid = Druid("Merlin")
druid.meditate()
druid.animal_help()

# Creating a Warrior
warrior = Warrior("Conan")
warrior.train()
warrior.brawl(druid)

# Creating a Mage
mage = Mage("Gandalf")
mage.summon()
mage.curse(warrior)

# Testing fight and cast_spell methods
druid.fight(warrior)
mage.cast_spell(warrior)