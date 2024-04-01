//Daily challenge: Car Inventory
//Part I
const inventory = [
    { id: 1, car_make: "Lincoln", car_model: "Navigator", car_year: 2009 },
    { id: 2, car_make: "Mazda", car_model: "Miata MX-5", car_year: 2001 },
    { id: 3, car_make: "Honda", car_model: "Accord", car_year: 1983 },
    { id: 4, car_make: "Land Rover", car_model: "Defender Ice Edition", car_year: 2010 },
    { id: 5, car_make: "Honda", car_model: "Accord", car_year: 1995 },
  ];

//Create a function getCarHonda(carInventory) that takes a single parameter. carInventory‘s value is an array which is an inventory of cars

function getCarHonda(carInventory) {
    const hondaCar = carInventory.find(car => car.car_make === "Honda");//loop through the array of object and return the first car with the name “Honda”.
    if (hondaCar) {
      return `This is a ${hondaCar.car_make} ${hondaCar.car_model} from ${hondaCar.car_year}.`;//return a string in the format This is a {car_make} {car_model} from {car_year}.
    } else {
      return "No Honda car found in the inventory.";
    }
  }  
console.log(getCarHonda(inventory));

//Part II
//Create a function sortCarInventoryByYear(carInventory) that takes a single parameter. carInventory‘s value is an array which is an inventory of cars 
function sortCarInventoryByYear(carInventory) {
    return carInventory.sort((a, b) => a.car_year - b.car_year);//the function returns an inventory that is sorted by car_year, ascending.
  }
  
  console.log(sortCarInventoryByYear(inventory));