//EXERCISE 1: Location
//Analyze the code below. What will be the output?
const person = {
    name: 'John Doe',
    age: 25,
    location: {
        country: 'Canada',
        city: 'Vancouver',
        coordinates: [49.2827, -123.1207]
    }
}

const {name, location: {country, city, coordinates: [lat, lng]}} = person;

console.log(`I am ${name} from ${city}, ${country}. Latitude(${lat}), Longitude(${lng})`);

//Output: I am John Doe from Vancouver, Canada. Latitude(49.2827), Longitude(-123.1207)


//EXERCISE 2:  Display Student Info
//Destructure the parameter inside the function and return a string 
function displayStudentInfo(objUser){
    const {first, last} = objUser;
    return `Your full name is ${first} ${last}`;
}
console.log(displayStudentInfo({first: 'Elie', last:'Schoppik'}));
//Output : 'Your full name is Elie Schoppik'


//EXERCISE 3: User & ID
//Turn the users object into an array
const users = { user1: 18273, user2: 92833, user3: 90315 }
const usersArray = Object.entries(users);
console.log(usersArray)
//Modify the outcome of part 1, by multipling the user’s ID by 2.
const modifiedUsersArray = usersArray.map(([user, id]) => [user, id * 2]);
console.log(modifiedUsersArray)


//EXERCISE 4: Person Class
//Analyze the code below. What will be the output?
class Person {
    constructor(name) {
      this.name = name;
    }
  }
const member = new Person('John');
console.log(typeof member); //Output: object


//EXERCISE 5: Dog Class
//Analyze the options below. Which constructor will successfully extend the Dog class?
class Dog {
    constructor(name) {
      this.name = name;
    }
};
// 2
class Labrador extends Dog {
    constructor(name, size) {
      super(name);
      this.size = size;
    }
};


//EXERCISE 6: Challenges
//Evaluate these (ie True or False)
//Comparing two different objects with strict equality will always return false, regardless of their content.
[2] === [2] //False
{} === {} //False

//What is, for each object below, the value of the property number and why?
const object1 = { number: 5 }; 
const object2 = object1; 
const object3 = object2; 
const object4 = { number: 5};

object1.number = 4;
console.log(object2.number)//Output: 4
console.log(object3.number)//Output: 4
console.log(object4.number)//Output: 5

//Create a class Animal with the attributes name, type and color.
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