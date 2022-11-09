var names = ["Kass", "V", "Valerie", "Ward"];
var ages = [16, 25, 43, 67];
var boolean = [true, false, false, true]

// This method will replace all elements in an array with the inputted value.
names.fill("Kass");
console.log(names);

// This method will remove the first element from the array, which can then be returned by logging a new variable.
var firstAge = ages.shift();
console.log(ages);
console.log(firstAge);

// This method will add a new element to the array.
boolean.push(false)
console.log(boolean)

// This should return "67". Had I not used the .shift method previously, this would return "43".
console.log(ages[2]);

// This should return "true".
console.log(boolean[0]);
