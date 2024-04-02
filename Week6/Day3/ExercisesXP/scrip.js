class Animal {
    constructor(name, type, color) {
        this.name = name;
        this.type = type;
        this.color = color;
    }
}

//Create a class Mamal that extends from the Animal class. Inside the class, add a method called sound()
class Mamal extends Animal {
    sound(soundMade) {
        return `${soundMade} I'm a ${this.type}, named ${this.name} and I'm ${this.color}`;
    }
}

//Create a farmerCow object that is an instance of the class Mamal. The object accepts a name, a type and a color and calls the sound method that “moos” her information.
const farmerCow = new Mamal('Lily', 'cow', 'brown and white');
console.log(farmerCow.sound('Moooo'));