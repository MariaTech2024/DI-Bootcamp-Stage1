#Exercise1

class Cat:
    def __init__(self, cat_name, cat_age):
        self.name = cat_name
        self.age = cat_age

cat1 = Cat('Luna',1)
cat2 = Cat('Felix',3)
cat3 = Cat('Jasper',5)

cats = [cat1, cat2, cat3]

def oldest():
    return max(cats, key = lambda cat: cat.age)

oldest_cat = oldest()

print(f'The oldest cat is {oldest_cat.name}, and is {oldest_cat.age} years old.')



#Exercise2

class Dog:
    def __init__(self, name, height):
        self.name = name
        self.height = height
    def bark(self):
        print(f"{self.name} goes woof!")
    def jump(self):
        print(f"{self.name} jumps {self.height * 2} cm high!")

davids_dog = Dog("Rex", 50)
print(f"David's dog's name is {davids_dog.name} and his height is {davids_dog.height} cm.")
davids_dog.bark()
davids_dog.jump()

sarahs_dog = Dog("Teacup", 20)
print(f"Sarah's dog's name is {sarahs_dog.name} and his height is {sarahs_dog.height} cm.")
sarahs_dog.bark()
sarahs_dog.jump()

if davids_dog.height > sarahs_dog.height:
    print(f"The bigger dog is {davids_dog.name}.")
elif sarahs_dog.height > davids_dog.height:
    print(f"The bigger dog is {sarahs_dog.name}.")
else:
    print("Both dogs are the same height.")



#Exercise3

class Song:
    def __init__(self, lyrics: list):
        self.lyrics = lyrics
    def sing_me_a_song(self):
        for line in self.lyrics:
            print(line)
            
stairway = Song(["There’s a lady who's sure",
                 "all that glitters is gold",
                 "and she’s buying a stairway to heaven"])

stairway.sing_me_a_song()



#Exercise4

class Zoo:
    def __init__(self, zoo_name):
        self.animals = []
        self.name = zoo_name
        self.sorted_animals = {}

    def add_animal(self, *new_animal):
        if new_animal not in self.animals:
            self.animals.extend(new_animal)

    def get_animals(self):
        print(self.animals)

    def sell_animal(self, animal_sold):
        if animal_sold in self.animals:
            self.animals.remove(animal_sold)

    def sort_animals(self):
        self.animals.sort()
        self.sorted_animals = {}
        current_letter =  ''
        for animal in self.animals:
            if animal[0] != current_letter:
                current_letter = animal[0]
                self.sorted_animals[len(self.sorted_animals) + 1] = [animal]
            else:
                self.sorted_animals[len(self.sorted_animals)].append(animal)

    def get_groups(self):
        for key, value in self.sorted_animals.items():
            print(f"Group {key}: {value}")


ramat_gan_safari = Zoo("Ramat Gan Safari")
ramat_gan_safari.add_animal("Ape", "Baboon", "Bear", "Cat", "Cougar", "Eel", "Emu")

ramat_gan_safari.get_animals()

ramat_gan_safari.sell_animal("Baboon")

ramat_gan_safari.get_animals()

ramat_gan_safari.sort_animals()

ramat_gan_safari.get_groups()