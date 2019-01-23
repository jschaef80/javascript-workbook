const cars = ['ford', 'chevrolet', 'jeep', 'dodge']
console.log(cars);

const moreCars = ['kia','nissan','toyota','honda']
console.log(moreCars);

const totalCars = cars.concat(moreCars);
console.log(totalCars);

console.log(moreCars.indexOf('honda'));

console.log(cars.lastIndexOf('ford'));

const stringOfCars = totalCars.join();
console.log(stringOfCars);


