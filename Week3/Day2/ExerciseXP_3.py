import random 
from dog import Dog

class PetDog(Dog):
    def __init__(self, name, age, weight):
        super().__init__(name, age, weight)
        self.trained = False

    def train(self):
        print(self.bark())
        self.trained = True

    def play(self, *args):
        dog_names = ", ".join([dog.name for dog in args])
        print(f'{dog_names} all play together.')

    def do_a_trick(self):
        if self.trained:
            tricks = [f'{self.name} does a barrel roll.',
                      f'{self.name} stands on his back legs.',
                      f'{self.name} shakes your hand.',
                      f'{self.name} plays dead.']
            print(random.choice(tricks))
            
dog1 = Dog('Simba', 3, 12)
dog2 = Dog('Jasper', 5, 15)
dog3 = Dog('Rex', 5, 18)

pet = PetDog('Rocky', 3, 15)

pet.train()

pet.do_a_trick()

pet.play(pet,dog1, dog2, dog3)