// ///// Exercise 0 /////

// // 1. Create a variable whose value holds a string.
// // 2. Create a variable whose value holds a number.
// // 3. Create a variable whose value holds an object.
// // 4. Create a variable whose value holds a boolean.
// // 5. Create a variable whose value holds null.
// // 6. Create a variable whose value is undefined.
// // 7. Create a variable whose value holds a symbol.
// // Console log the types of your variables.

// const string = "Hello World!";

// const number = 5;

// const object = {
//   color: "red",
//   width: 30,
// };

// const boolean = true;

// const myNull = null;

// let myUndefined;

// const symbol = Symbol();

// console.log(string);
// console.log(number);
// console.log(object);
// console.log(boolean);
// // console.log(myUndefined);
// console.log(myNull);
// console.log(symbol);

// ///// Exercise 1 /////

// /*1. Which of the following is/are strings?
// Answer:
// c) '4'

// 2. Which of the following is/are numbers?
// Answer:
// a) 4
// b) 4.0
// d) -4

// 3. Which of the following is/are booleans?
// Answer:
// a) true
// b) false

// 4. What is the result of 80 + 71.2?
// Answer:
// a) 151.2

// 5. What is the result of "80" + 71.2?
// Answer:
// c) "8071.2"

// 6. Does 100 + 30 produce a number or a string?
// Answer:
// a) number

// 7. Does "100" + 30 produce a number or a string?
// Answer:
// b)string */

// //create three different ways to declare variables

// var a = "a";
// let b = "b";
// const c = "c";

// //declare a variable and reassign a value to it

// let myVariable1 = "value";
// myVariable1 = "new value";

// //create a variable and after that assign a string with its value being: He's got it!

// const myString = "He's got it!";

// /*
// 1. create a variable and assign a value on how
// much a restaurant bill is.
// 2. create a variable and assign a value on how
// much tax they should pay.
// 3. create a variable that will calculate the bill
// * tax and its output would be: Your total bill is
// <total bill> $.
// */

// const restaurantBill = 100;
// const taxAmount = 10;
// const totalBill = restaurantBill + taxAmount;

// console.log(`Total bill is ${totalBill}$`);

// // Round the number 50.6 to its nearest integer

// const roundNumber = Math.round(50.6);
// console.log(roundNumber);

// //Create a variable that is undefined
// let undefinedVariable;

// ///// Exercise 2 /////

// /* 1. Write a function called ‘countryInfo’ which takes three
// parameters: 'country', 'population' and 'capitalCity'. Based
// on this input, the function returns a string with this format:
// ‘Spain has 47 million people and its capital city is Madrid’
// 2. Call this function 3 times, with input data for 3 different
// countries. Store the returned values in 3 different
// variables, and log them to the console. */

// function countryInfo(country, population, capitalCity) {
//   return `${country} has ${population} million people and its capital city is ${capitalCity}`;
// }

// const spainInfo = countryInfo("Spain", 47, "Madrid");
// const israelInfo = countryInfo("Israel", 9, "Jerusalem");
// const japanInfo = countryInfo("Japan", 125, "Tokyo");

// console.log(spainInfo);
// console.log(israelInfo);
// console.log(japanInfo);

// ///// Exercise 3 /////

// /*
// Instructions
// Why pay a fortune teller when you can just program your
// fortune yourself?
// 1. Write a function named `tellFortune` that takes 4
// parameters:
// jobTitle, location, partnerName, numberOfChildren.
// Based on this output the function returns a string with this
// format:
// ‘You will be a programmer in New York married to Rana
// with 2 children’.
// */

// function tellFortune(jobTitle, location, partnerName, numberOfChildren) {
//   return `You will be a ${jobTitle} in ${location} married to ${partnerName} with ${numberOfChildren} children.`;
// }

// const yourFortune = tellFortune("writer", "Edinburgh", "Neil Murray", 3);

// console.log(yourFortune);

// ///// Exercise 4 /////

// /*Write a function that calculates the circle area by a given radius
// as an argument. Print the area as it is calculated and then print
// it rounded to two decimal places.*/

// function calculateCircleArea(radius) {
//   const circleArea = Math.PI * radius * radius;

//   console.log("Circle area is:", circleArea);

//   const roundCircleArea = +circleArea.toFixed(2);

//   console.log("Rounded circle area is:", roundCircleArea);
// }

// calculateCircleArea(7);

// ///// Exercise 5 /////

// /*1. Name of the current day e.g. Sunday
// 2. Current day of the month e.g. 31
// 3. Current month e.g January
// 4. Current Year e.g 2021
// Create a function that will return a string in the following format:
// `Today is Sunday the 31 of January 2021’*/

// function getTodaysDate() {
//   const currentDate = new Date();

//   const dayOfWeek = currentDate.toLocaleString("en-US", { weekday: "long" });
//   const dayOfMonth = currentDate.getDate();
//   const monthName = currentDate.toLocaleString("en-US", { month: "long" });
//   const year = currentDate.getFullYear();

//   const todaysDate = `Today is ${dayOfWeek} the ${dayOfMonth} of ${monthName} ${year}`;

//   return todaysDate;
// }

// console.log(getTodaysDate());

// ///// Exercise 6 /////

// /*
// JavaScript - Declaring Functions
// The following exercise contains the following
// subjects:
// * functions
// Instructions
// * Please reformat the following function
// declarations to function expression.
// * Please reformat the following function
// expressions to function declarations.
// Submit the file to Hive
// */

// // From function declarations to function expressions
// const welcome = function () {
//   let welcome = "Welcome to Appleseeds Bootcamp!";
//   return welcome;
// };
// const power = function (a) {
//   let myNumber = a;
//   let result = Math.pow(myNumber, 2);
//   return result;
// };
// const add = function (a, b = 5) {
//   let myNumber = a;
//   let sum = myNumber + b;
//   return sum;
// };

// // From function expressions to function declarations

// function hello() {
//   return "Hello!";
// }

// function squareRoot(a) {
//   return Math.sqrt(a);
// }

// function andomNumbers(a, b) {
//   return Math.random() * (a - b) + b;
// }

// ///// Exercise 7 /////

// /* Please reformat the following function
// expressions to IIFE functions.
// * Please reformat the following function
// declarations in two ways, explicit return and implicit
// return functions*/

// /* From function declarations to explicit and implicit
// return functions (one of each).*/

// // explicit //
// const welcomeExplicit = () => {
//   let welcome = "Welcome to Appleseeds Bootcamp!";
//   return welcome;
// };

// // implicit //
// const welcomeImplicit = () => "Welcome to Appleseeds Bootcamp!";

// // explicit //
// const powerExplicit = a => {
//   let myNumber = a;
//   let result = Math.pow(myNumber, 2);
//   return result;
// };

// // implicit //
// const powerImplicit = a => Math.pow(a, 2);

// // From function expressions to IIFE functions.

// const squareRoot = ((a) => Math.sqrt(a))(4);
// const randomNumbers = ((a, b) => Math.random() * (a - b) + b)(4, 2);

// ///// Exercise 8 /////

// /*
// 1. The world population is 7900 million people. Create
// a function declaration called 'percentageOfWorld1'
// which receives a 'population' value, and returns the
// percentage of the world population that the given
// population represents. For example, China has
// 1441 million people, so it's about 18.2% of the world
// population.
// 2. To calculate the percentage, divide the given
// 'population' value by 7900 and then multiply by 100.
// 3. Call 'percentageOfWorld1' for 3 populations of
// countries of your choice, store the results into
// variables and log them to the console.
// 4. Create a function expression that does the exact
// same thing, called 'percentageOfWorld2', and also
// call it with 3 country populations (can be the same
// populations)
// */

function percentageOfWorld1(population) {
  const countryPopulation = (population / 7900) * 100;
  return countryPopulation.toFixed(2);
}

// const israelPopulation = percentageOfWorld1(9.3);
// const japanPopulation = percentageOfWorld1(125.7);
// const newZealandPopulation = percentageOfWorld1(5.1);

// console.log(`Israel population is ${israelPopulation}% of the world
// population` );
// console.log(`Japan population is ${japanPopulation}% of the world
// population` );
// console.log(`New Zealand population is ${newZealandPopulation}% of the world
// population` );

// const percentageOfWorld2 = function(population) {
//     const countryPopulation  = (population / 7900) * 100;
//     return countryPopulation.toFixed(2)
// }

// console.log(`Israel population is ${percentageOfWorld2(9)}% of the world
// population` );
// console.log(`Japan population is ${percentageOfWorld2(125)}% of the world
// population` );
// console.log(`New Zealand population is ${percentageOfWorld2(5)}% of the world
// population` );

// ///// Exercise 9 /////

// /*Instructions
// Use the prompt method to get information from the user.
// The Exercise
// 1. Declare a variable 'numSiblings' based on a prompt input
// like this:
// prompt('How many siblings do you have?');
// 2. If you have one sibling, log to the console '1 sibling!' (use
// loose equality == for now)
// 3. Use an else-if block to log 'More than 1 sibling' in case
// 'numSiblings' is greater than 1
// 4. Use an else block to log 'No siblings' (this block will be
// executed when 'numSiblings' is 0 or any other value)
// 5. Test the code with different values of 'numSiblings',
// including 1 and 0.
// 6. Change == to ===, and test the code again, with the same
// values of 'numSiblings'. Notice what happens when there
// is exactly 1 sibling! Why is this happening?
// 7. Finally, convert 'numSibling' to a number, and watch what
// happens now when you input 1.
// 8. Reflect on why we should use the === operator and type
// conversion in this situation.*/

// const numSiblings = +prompt('How many siblings do you have?', '');

// if (numSiblings === 1) {
//     console.log('1 sibling!');
// } else if (numSiblings > 1) {
//     console.log('More than 1 sibling');
// } else {
//     console.log('No siblings');
// }

// ///// Exercise 10 /////

// /*Create a function that takes 1 argument, a number score.
// Returns either “A”, ”B”, “C”, “D”, “F”.
// score of:
// 0-64 is a “F”
// 65-69 is a “D”
// 70-79 is a “C”
// 80-89 is a “B”
// 90-100 is an “A*/

// function getResult(score) {
//     if (score >= 0 && score <= 64) {
//         return "F";
//     } else if (score >= 65 && score <= 69) {
//         return "D";
//     } else if (score >= 70 && score <= 79) {
//         return "C";
//     } else if (score >= 80 && score <= 89) {
//         return "B";
//     } else if (score >= 90 && score <= 100) {
//         return "A";
//     } else {
//         return "You are too cool for this universe!";
//     }
// }

// ///// Exercise 11 /////

// /*Instructions
// John and Mike both play basketball on different teams. In the
// latest 3 games, John's team scored 89, 120, and 103 points,
// while Mike's team scored 116, 94, and 123 points.
// 1. Calculate the average score for each team.
// 2. Decide which team wins on average (highest average
// score), and print the winner to the console. Also include
// the average score in the output.
// 3. Then change the scores to show different winners. Don't
// forget to take into account that there might be a draw (the
// same average score).
// 4. EXTRA: Mary also plays basketball, and her team scored
// 97, 134, and 105 points. Like before, log the average
// winner to the console.
// 5. Like before, change the scores to generate different
// winners, keeping in mind there might be draws.*/

// const johnTeam = [89, 120, 103];
// const mikeTeam = [116, 94, 123];
// const maryTeam = [116, 94, 123];

// function getAverageScore(scoreList) {
//     const sumScore = scoreList.reduce((acc, curr) => acc + curr, 0);
//     const averageScore = sumScore/scoreList.length;
//     return averageScore
// };

// const johnAverage = getAverageScore(johnTeam);
// const mikeAverage = getAverageScore(mikeTeam);
// const maryAverage = getAverageScore(maryTeam);

// const winners = {
//     John: johnAverage,
//     Mike: mikeAverage,
//     Mary: maryAverage
// };

// let winner = { name: '', score: 0 };

// Object.entries(winners).forEach(([name, score]) => {
//     if (score > winner.score) {
//         winner = { name, score };
//     } else if (score === winner.score) {
//         winner.name += ` and ${name}`;
//     }
// });

// console.log(`${winner.name}'s team wins with an average score of ${winner.score}`);

// ///// Exercise 12 /////

// /*Instructions
// Write a function that takes one argument n, an integer.
// Print out all the numbers between 1 to n.
// If the number is only divisible by 7 print “BOOM”
// If the number is divisible by 7 and also includes the digit 7 print
// “BOOM-BOOM”
// If either of the above cases prints the number.
// Example of numbers between 1 to 18:
// 1,2,3,4,5,6, BOOM-BOOM,8,9,10,11,12,13,BOOM,15,16,17,18
// Hint:
// Use the includes method to find out if the number includes a 7.*/

// function superBoom(n) {
//     for (let i = 1; i <= n; i++) {
//         if (i % 7 === 0 && String(i).includes('7')) {
//             console.log('BOOM-BOOM');
//         } else if (i % 7 === 0) {
//             console.log('BOOM');
//         } else {
//             console.log(i);
//         }
//     }
// }

// superBoom(18)

// ///// Exercise 13 /////

// /*Instructions
// Create a JS function to determine whether or not a given year
// is a leap year. The function should take a year as an argument:
// 1. Determine whether or not it is a leap year
// ● If the given year is a leap year, the program should print "It
// is indeed a leap year", otherwise the program will print
// "This is not a leap year."
// Help:
// every year that is divisible by 4 is a leap year except for the
// ones that are also divisible by 100 unless it is divisible by 400.
// Example: 2012 is the leap year 2100 is not But 2400 is.*/

// function isLeapYear(year) {
//     if ((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0) {
//         console.log("It is indeed a leap year");
//     } else {
//         console.log("This is not a leap year");
//     }
// }

// isLeapYear(2024);
// isLeapYear(2100);
// isLeapYear(2400);

// ///// Exercise 14 /////

// /*
// 1. Create a function called ‘countryToLiveIn’ that takes 4
// parameters:
// language, isIsland, population, and country. isIsland’s
// argument value should be true or false. population’s
// argument value should be an integer. country should be a
// string of a country. Language should be a string.
// 2. Let's say Sarah is looking for a new country to live in. She
// wants to live in a country that speaks English, has less
// than 50 million people, and is not an island.
// 3. Write an if statement inside your function to help Sarah
// figure out if your country is right for her. You will need to
// write a condition that accounts for all of Sarah's criteria.
// Take your time with this, and check part of the solution if
// necessary.
// 4. If yours is the right country, log a string like this: 'You
// should live in Finland. If not, log 'Finland does not meet
// your criteria'.
// 5. If your country does not meet all the criteria, go back and
// temporarily change some argument values in order to
// make the condition true.
// */

// function countryToLiveIn(language, isIsland, population, country) {
//     if (language === 'English' && !isIsland && population < 50) {
//         console.log(`You should live in ${country}.`);
//     } else {
//         console.log(`${country} does not meet your criteria.`);
//     }
// }

// countryToLiveIn('English', false, 30, 'Finland');
// countryToLiveIn('Japanese', true, 125, 'Japan');

// ///// Exercise 15 /////

// /*Switch
// Instructions
// 1. Create a function that takes one parameter, a language.
// 2. Use a switch statement to log the following string for the
// given 'language':
// mandarin: 'MOST number of native speakers!'
// Spanish: '2nd place in a number of native speakers'
// English: '3rd place'
// Hindi: 'Number 4'
// Arabic: '5th most spoken language'
// for all others simply log 'Not in the top 5'*/

// function languagePlace(language) {
//     switch (language) {
//         case 'mandarin':
//             console.log('MOST number of native speakers!');
//             break;
//         case 'Spanish':
//             console.log('2nd place in a number of native speakers');
//             break;
//         case 'English':
//             console.log('3rd place');
//             break;
//         case 'Hindi':
//             console.log('Number 4');
//             break;
//         case 'Arabic':
//             console.log('5th most spoken language');
//             break;
//         default:
//             console.log('Not in the top 5');
//     }
// }

// languagePlace('English');
// languagePlace('Russian');

// ///// Exercise 16 /////

// /*Ternaries
// Logical operators
// Instructions
// Create a simple password validation function that takes a
// password string as an argument.
// If the length of the password is more than 7 characters return
// “Strong”. If it is less than 7 characters long return “Weak.*/

// //1. Create a function that uses an if/else conditional expression.
// function passwordValidation1(password) {
//     if (password.length > 7) {
//         return "Strong";
//     } else {
//         return "Weak";
//     }
// }

// //2. Create a function that uses a ternary conditional expression.
// function passwordValidation2(password) {
//     return password.length > 7 ? "Strong" : "Weak";
// }

// //3. Create a function that uses a && logical operator.

// /*4. Create an “advanced” password validation function that
// takes a password string as an argument.
// If the password length is more than 7 characters long and
// has at least one capital letter return “Very Strong”. If the
// password length is only 7 characters long returns “Strong”.
// If the password length is less than 7 characters long return
// “Weak”
// Use only a ternary conditional expression.*/
// function advancedPasswordValidation(password) {
//     return password.length > 7 && /[A-Z]/.test(password) ? "Very Strong"
//          : password.length === 7 ? "Strong"
//          : "Weak";
// }

// ///// Exercise 17 /////

// /*Instructions
// Create a function that receives one argument, a string color.
// Create a switch statement that:
// 1. If the color is yellow, pink, or orange return from the
// function “light color”.
// 2. If the color is a blue, purple, or brown return from the
// function “dark color”.
// 3. If the color is none of the above return “Unknown color”.
// Note:
// It shouldn’t be case sensitive*/

// function getColor(color) {

//     color = color.toLowerCase();

//     switch (color) {
//         case 'yellow':
//         case 'pink':
//         case 'orange':
//             console.log("light color");
//             break;
//         case 'blue':
//         case 'purple':
//         case 'brown':
//             console.log("dark color");
//             break;
//         default:
//             console.log("Unknown color");
//     }
// }

// getColor('BluE');





///// js_exercises_02////

///// Exercise 19 /////

/*
Instructions
For each of the questions below, answer the questions with this
array:*/

let people = ["Greg", "Mary", "Devon", "James"];

//1. Using a loop, iterate through this array and console.log all of the people.

for (let i = 0; i < people.length; i++) {
  console.log(people[i]);
}

// 2. Write the command to remove "Greg" from the array.

people.shift("Greg");

// 3. Write the command to remove "James" from the array.

people.pop("James");

// 4. Write the command to add "Matt" to the front of the array.

people.unshift("Matt");

// 5. Write the command to add your name to the end of the array.

people.push("Daria");

// 6. Using a loop, iterate through this array, and after console.log "Mary", exit from the loop.

for (let i = 0; i < people.length; i++) {
        console.log(people[i])

        if(people[i] == "Mary") {
            break
        }
};

// 7. Write the command to make a copy of the array using a slice. The copy should NOT include "Mary" or "Matt".

const copyOfPeople = people.slice(2);

// 8. Write the command that gives the indexOf where "Mary" is located.

people.indexOf("Mary");

// 9. Write the command that gives the indexOf where "Foo" is located (this should return -1).

people.indexOf("Foo");

// 10. Redefine the people variable with the value you started
// with. Using the splice command, remove "Devon" from
// the array and add "Elizabeth"
// and "Artie". Your array should look like this when you are
// done ["Greg", "Mary", "Elizabeth", "Artie",
// "James"].

people = ["Greg", "Mary", "Devon", "James"];
people.splice(2, 1, "Elizabeth", "Artie");

// 11. Create a new variable called withBob and set it equal
// to the people array concatenated with the string of "Bob"

const withBob = people.concat("Bob");
console.log(withBob);



 ///// Exercise 20 /////

 /*● Array
Instructions
Write a function that will receive an array of strings and will
return a new array containing all the lengths of all the strings in
the array it got as a parameter.
So that if you call this function with this array for example:
["boo", "doooo", "hoo","ro"]
it will return this array: [3, 5, 3, 2].*/

const arrayOfStrings = ["boo", "doooo", "hoo","ro"];

function getLengths(arr) {
   const length = arr.map( el => el.length);
   return length
}

console.log(getLengths(arrayOfStrings));



///// Exercise 21 /////

/*1. Create an array containing 4 population values of 4
countries of your choice. Store this array into a variable
called 'populations'*/

let populations = [9, 125, 428, 59];

/*2. Create a function called ‘populationPercentages’ that
takes the population array as an argument.
3. Inside the function, create an empty array called
‘percentages’.
4. Use a for loop to iterate over the population array you
received as an argument..
5. On each iteration use the function we created earlier
(module 3, ex.3.3-declarations vs expressions) for each
element of the array.
6. Push the result to the ‘percentages’ array.
7. Return from the function the ‘percentages’ array.*/

function populationPercentages(arr) {
  let percentages = [];
  for (let i = 0; i < arr.length; i++) {
   let percentage = percentageOfWorld1(arr[i]);
   percentages.push(percentage);
  }
  return percentages
}

console.log(populationPercentages(populations));



///// Exercise 23 /////

/*Create a function that received an array of integers as a
parameter.
Return a new array without any duplicates inside. You
indexOf as part of your solution.
Example:
[3,4,4,3,6,3] --→ [3,4,6]*/

const dupNumArray = [2,8,9,8,4,3,3];

function removeDuplicates(array) {
    const numSet = new Set(array);
    const numArray = [...numSet];
   return numArray
}

console.log(removeDuplicates(dupNumArray));

// js_exercises_03 ///

///// Exercise 27 /////

/*Instructions
Create a function that takes one argument, an array.
Use this array:
const array = ["Hello", "Good Day", "Your
Welcome", "hotdog", "hamburgers"];
to count over all the letters and return an object with the
letter as the key and the letter count as the value.
Expected output:
{ h: 3, e: 4, l: 3, o: 7, g: 3, d: 3, a: 2, y: 2, u: 2, r: 3, w: 1, c:
1, m: 2, t: 1, b: 1, s: 1 }
Note:
that it shouldn’t be case sensitive
Extra:
return the letter with the most occurrences as well*/

const array = ["Hello", "Good Day", "Your Welcome", "hotdog", "hamburgers"];

function setValueOfLetters(arr) {

  const oneString = arr.join("").toLowerCase().replaceAll(" ", "");
  const valueOfLetters = {};
  let maxCount = 0;
  let mostFrequentLetter = "";

  for (const letter of oneString) {
    valueOfLetters[letter] = (valueOfLetters[letter] || 0) + 1;
    if (valueOfLetters[letter] > maxCount) {
      maxCount = valueOfLetters[letter];
      mostFrequentLetter = letter;}
  }
  return {valueOfLetters, mostFrequentLetter};
}

console.log(setValueOfLetters(array));

///// Exercise 28 /////

/*Instructions
You are given two arrays:
const food = ["Noodle", "Pasta", "Ice-cream",
"Meat", "Cucumber", "Olives"];
const food1 = ["Fries", "Ice-cream", "Pizza",
"Olives", "Hamburgers"];
Create a function that takes these two arrays as
arguments.
Compare these two arrays using 2 for loops and return the
items that are the same. If none are the same return false.*/

const food = ["Noodle", "Pasta", "Ice-cream", "Meat", "Cucumber", "Olives"];
const food1 = ["Fries", "Ice-cream", "Pizza", "Olives", "Hamburgers"];

function isDuplicateFood(arr, arr1) {
  const duplicateItems = [];

  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr1.length; j++) {
      if (arr[i] === arr1[j]) {
        duplicateItems.push(arr[i]);
        break;
      }
    }
  }

  return duplicateItems.length > 0 ? duplicateItems : false;
}

console.log(isDuplicateFood(food, food1));

///// Exercise 29 /////

/*Write a function that has one argument, a positive integer.
Let's call it N.
The function should console log a step shape.
With N levels using the # character. Make sure the step has
spaces on the right-hand side if empty!
Note:
Examples:
steps(2)
‘# ‘
‘##’
steps(3)
‘# ‘
‘## ‘
‘###’
steps(4)
‘# ‘
‘## ‘
‘### ‘
‘####’
Notice that if each step is not populated by a step it should
consist of empty space. For example, if n = 3:
steps(3)
‘# ‘ ←-- 2 empty spaces
‘## ‘ ←-- 1 empty space
‘###’
Ninja:
You are not allowed to use the repeat method. Use 2 loops
instead*/

function setShapeLevels(n) {
  
  let sharps = "";
  let spaces = new Array(n+1).join("|");
  for (let index = 0; index < n; index++) {
    sharps += "#";
    spaces = spaces.slice(0, -1);
    console.log(sharps, spaces);
  }
}

setShapeLevels(3);

/// Exercise 30 /////

/*1. Write a function called ‘isString’ that receives 2 arguments,
a string and a callback function. The function checks that
the string is indeed a string. If the string is a string, pass
the string to a callback function that logs that string to the
console.
*/

const myInput = "Hello World!";
function showString(showMe) {
  console.log(showMe);
}

function isString(input, callback) {
  if (typeof input === "string") {
    callback(input);
  } else {
    console.log(`${input} is not a string`);
  }
}

isString(myInput, showString);

/*2. Create a function called ‘firstWordUpperCase’ that
receives 2 arguments, a string and a callback function.
The function will capitalize the first word in the sentence
and pass the string to a callback function which will create
dashes between the words.
3. Call the ‘firstWordUpperCase’ function with a callback of
your choice.
4. Create your own function that will receive from one of its
arguments a callback function*/

const myInput1 = "Fortune favors the bold";

function createDashes(input) {
return input.replaceAll(" ", "-");
}

function firstWordUpperCase(input, callback) {
  const arr = input.split(" ");
  arr[0] = arr[0].toUpperCase();
  inputUpperCase = arr.join(" ");
  return callback(inputUpperCase);
}

console.log(firstWordUpperCase(myInput1, createDashes))


/// Exercise 31 /////

/*Instructions
Write the following functions using the reduce built-in function.
1. max*/

const myNumbers = [2, 8, 55, 9, 15]

function getMaxOfArray(arr) {
  return Math.max.apply(null, arr);
}

console.log(getMaxOfArray(myNumbers));

//2. the sum of even numbers

function sumOfEvenNumbers(arr) {
  return arr.reduce((sum, current) => {
    if (current % 2 === 0) {
      return sum + current;
    }
    return sum;
  }, 0);
}

console.log(sumOfEvenNumbers(myNumbers));

//3. average

function getAverage(arr) {
  if (arr.length === 0) {
    return 0;
  } else {
    const sum = arr.reduce((sum, current) => sum + current, 0);
    return sum / arr.length;
  }
  
}

console.log(getAverage(myNumbers));



// js_exercises_04 ///

///// Exercise 31 /////

/*Instructions
# Note: We ask you not to solve the bug by finding it with
your eyes but to use the debugging tools we've learned!
What is wrong with this code?
1. First, find the line that contains the problem. Write it down.
2. Which debug method did you use to find the bug?
3. Explain the bug in your own words.
4. Fix the code and submit it all.*/

// I used console.log statements and code execution in a debugger to find the bug.

function getSum(arr1, arr2){
let sum = 0; // Changed const to let to allow reassignment
for (let i=0; i < arr1.length; i++){
sum += arr1[i];
}
for (let i=0; i < arr2.length; i++){
sum += arr2[i];
}
return sum // Added return statement to return the calculated sum
}
console.log(getSum([1,2,3], [5,66,23])); // Corrected the array syntax

///// Exercise 32 /////

/*Instructions
# Note: We ask you not to solve the bug by finding it with
your eyes but to use the debugging tools we've learned!
What is wrong with this code?
1. First, find the line that contains the problem. Write it down.
2. Which debug method did you use to find the bug?
3. Explain the bug in your own words.
4. Fix the code and submit it all.*/

// To find the bug, I used console.log statements and code execution in a debugger.

function findSmallest(a, b, c){
  if (a > b && b > c){ //Modified the condition to use logical AND (&&) operators
    return c;
  } else if (a > c && c > b) {
    return b;
  } else {
    return a;
  }
}
console.log(findSmallest(52, 66, 2)); //Corrected the function name

///// Exercise 33 /////

/*
Instructions
# Note: We ask you not to solve the bug by finding it with
your
eyes but to use the debugging tools we've learned!
What is wrong with this code?
1. First, find the line that contains the problem. Write it down.
2. Which debug method did you use to find the bug?
3. Explain the bug in your own words.
4. Fix the code and submit it all.
we want to sum all numbers in even cells in arrays of size 10:
[1,2,3,4,5,6,7,8,9,10] => 2+4+6+8+10 = 30*/

//The problematic line is return arr[2] + arr[4] + arr[6] + arr[8] + arr[10];.
//The bug is caused by attempting to access the array index arr[10], which doesn't exist.

//Here's the fixed code:
function getSumOfEven(arr) {
  return arr[1] + arr[3] + arr[5] + arr[7] + arr[9];
}
console.log(getSumOfEven([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]));

//Here's another way to solve the problem:
function getSumOfEven(arr){
  return arr.reduce((sum, current) => {
    if (current % 2 === 0) {
      return sum + current;
    }
    return sum;
  }, 0);
}
console.log(getSumOfEven([1,2,3,4,5,6,7,8,9,10]));

/// Exercise 34 /////

/*Instructions
# Note: We ask you not to solve the bug by finding it with
your eyes but to use the debugging tools we've learned!
What is wrong with this code?
1. First find the line that contains the problem. Write it down.
2. Which debug method did you use to find the bug?
3. Explain the bug in your own words.
4. Fix the code and submit it all.*/

/*The bug in the code is that the variable sum is not initialized
with a value before being used in the loop. This leads to an initial
value of undefined being added to the array elements, resulting in an incorrect sum.*/

//Here's the fixed code:

function calcAverage(arr) {
let sum = 0 ;
for ( let i = 0 ; i < arr.length; i++ ){
sum += arr[i];
} return sum/arr.length; //Since the function is named calcAverage, I added division of the sum by the length of the array.
}
console.log(calcAverage([85, 90, 92]));

/// Exercise 35 /////

/*Instructions
# Note: We ask you not to solve the bug by finding it with
your eyes but to use the debugging tools we've learned!
What is wrong with this code?
1. First, find the line that contains the problem. Write it down.
2. Which debug method did you use to find the bug?
3. Explain the bug in your own words.
4. Fix the code and submit it all.*/

/*The bug in the code is that the increment operation counter + 1;
is not updating the value of counter. The correct syntax for
incrementing counter is counter += 1;*/

function countOccurrences(str, char) {
let counter = 0;
for ( let i = 0; i < str.length; i++ ){
if ( str.charAt(i) === char ){
counter +=1 ; // Fixed the increment operation
}}
 return counter ;
}
console.log(countOccurrences ( "ini mini miny moe" , "n" ));

/// Exercise 36 /////

/*Instructions
Without running the code below, explain in your own words
what the result of each block of code will be and why.
If there are any faulty outputs, please write on how we can fix
them.*/

//Block 1
//1)console.log(a) prints undefined because "a" is used before the variable has been declared
//2)console.log(foo()) prints 2 because the function "foo" returns 2, and this function is hoisted to the top of funcA,
//so it's accessible before its actual declaration in the code.
function funcA() {
var a = 1; // move the variable declaration to the top
console.log(a);
console.log(foo());
function foo() {
return 2;
}}
funcA();

//Block 2
//1) The line console.log(obj.prop.getFullName()) accesses the getFullName method inside the prop object of obj.
//And the output of this line will be "Aurelio De Rosa".
//2)The line var test = obj.prop.getFullName assigns the getFullName method to the variable test,
//but this assignment is without the parentheses, meaning test now holds a reference to the getFullName function but doesn't execute it yet.
var fullName = 'John Doe';
var obj = {
fullName: 'Colin Ihrig',
prop: {
fullName: 'Aurelio De Rosa',
getFullName: function () {
return this.fullName;
}
}
};
console.log(obj.prop.getFullName());
var test = obj.prop.getFullName(); // add parentheses
console.log(test());

//Block 3
//1)The output of this line console.log(typeof a); will be "undefined" because varible "a" is declared within the scope of the funcB function and is not accessible outside that scope.
//2)The output of this line console.log(typeof b); will log "number" because b is declared without the let keyword inside the funcB function, making it a global variable.

let c, g; // Declare variables a and b in the global scope.

function funcB() {
  c = g = 0;
  c++;
  return c;
}

funcB();
console.log(typeof c);
console.log(typeof g);

//Block 4
//JavaScript allows function redeclaration, but to avoid confusion
// it would be better to give each function a unique name
function funcC1() {
console.log("1");
}
funcC1();

function funcC2() {
console.log("2");
}
funcC2();

//Block 5
/*1) console.log(d) will output "1", because variable "d" is not declared using var,
let, or const, making it a global variable.
2) console.log(e) will output "undefined", because variable "e" is declared using var
which makes it a local variable scoped to the funcD2 function*/

let d, e; // Declare variables d and e in the global scope.

function funcD1() {
d = 1;
}
funcD1();
console.log(d);

function funcD2() {
e = 1;
}
funcD2();
console.log(e);

//Block 6
//1)The output of this line console.log("Value of f in local scope: ", f);
// inside the funcE function will be "1", because the variable "f" was
//declared before calling the funcE function.
//2) The second output of this line console.log("Value of f in local scope: ", f);
//will be "undefined" because the variable "f" is not declared at this stage yet.

var f = 1;  // move the variable declaration to the top
function funcE() {
console.log("Value of f in local scope: ", f);
}
console.log("Value of f in global scope: ", f);
funcE();

///// Exercise 37 /////

/*Instructions
Please make the following changes to the HTML file while
navigating the DOM.
Create a variable that holds the <li> element with the class
“start-here”. Use traverse methods to complete these tasks:*/

const startHere = document.querySelector(".start-here");

//1. Change the text from “title 2” to “main title”
startHere.textContent = "main title";

//2. Add another subtitle with the text “subtitle 4”
const ulSubtitles = document.querySelector("ul ul");
const newLiElement = document.createElement("li");
ulSubtitles.appendChild(newLiElement);
newLiElement.textContent = "subtitle 4";

//3. Delete the last <li> element from the list.
const ulElement = document.querySelector("ul");
const lastLiElement = ulElement.lastElementChild;
ulElement.removeChild(lastLiElement);

//4. Change the <title> element text to “Master Of The Dom”.
document.addEventListener("DOMContentLoaded", function () {
  document.title = "Master Of The Dom";
});

//5. Change the text of the <p> element ot something else of your
const pElement = document.querySelector("p");
pElement.textContent = "I changed the text";

///// Exercise 38 /////

/*
JavaScript – forEachDOM
The following exercise contains the following subjects:
● DOM
● foreach
Instructions
You get an array of objects of users from your database:*/
const users = [
  {
    id: 167464,
    firstName: "Jimmy",
    lastName: "Arnold",
    email: "jimmya@gmail.com",
  },
  {
    id: 578447,
    firstName: "Martha",
    lastName: "Goldman",
    email: "gold@hotmail.com",
  },
  {
    id: 864578,
    firstName: "Tim",
    lastName: "Burton",
    email: "timmy.hotmail.com",
  },
];
/*1. Loop over the array with the forEach method and
dynamically create an ordered list of the first and last
names of the objects.*/
/*3. Create a custom data attribute called “data-id” and attach
the id value to each li.
Your markup should look like this:*/
let listOfNames = document.createElement('ol');
document.body.appendChild(listOfNames);
users.forEach((el) => {
 let liNameElement = document.createElement('li');
 liNameElement.textContent = `${el.firstName} ${el.lastName}`;
 liNameElement.setAttribute('id', el.id)
 listOfNames.appendChild(liNameElement);

 });

/*2. Remove the bullet points of the ordered list with
JavaScript.*/
listOfNames.style.listStyleType = "none";

/// Exercise 39 /////
/*Instructions
Many times an application needs to verify the account by
sending a verification code by text message.
Let's create functionality that enables the user to paste the
verification code to the input fields.
Features:
1. The user is allowed to type the values manually. After
each value is inserted, the next input will be focused.
2. The user is allowed to paste the verification code.
3. An extra challenge will be to auto submit the form once all
inputs all populated.
Things to think about:
What happens if the user pastes only 3 digits and there are
6 inputs to fill out.
Here is an example.
Things to help you:
Google “paste event” to understand how to listen to a
paste event.
Google “clipboardData” to find out how to get the value of
a paste event.*/

document.addEventListener('DOMContentLoaded', function() {
    const verificationForm = document.getElementById('verification-form');
    const codeInputs = verificationForm.querySelectorAll('input');
    const submitButton = document.getElementById('submit-btn');

    function focusNextInput(currentInput) {
      const nextInputIndex = Array.from(codeInputs).indexOf(currentInput) + 1;
      if (nextInputIndex < codeInputs.length) {
        codeInputs[nextInputIndex].focus();
      } else {
        submitButton.click();
      }
    }

    codeInputs.forEach(function(input, index) {
      input.addEventListener('input', function() {
        if (this.value.length === 1) {
          focusNextInput(this);
        }
      });
    });

    verificationForm.addEventListener('paste', async function(event) {
        event.preventDefault();
        try {
          const clipboardData = await navigator.clipboard.readText();
          const pasteData = clipboardData.trim();
          for (let i = 0; i < pasteData.length && i < codeInputs.length; i++) {
            codeInputs[i].value = pasteData.charAt(i);
            if (i === codeInputs.length - 1) {
              submitButton.click();
            }
          }
        } catch (error) {
          console.error('Failed to read clipboard data: ', error);
        }
      });
  });

/// Exercise 40 /////
/*Instructions
Create a webpage that has some text and two buttons with ‘+’
and ‘-‘ Clicking the ‘+’ button should increase the text’s font-size
and clicking the ‘-‘ should decrease it.
Limit the font size to be between 6px and 100px.*/

document.addEventListener('DOMContentLoaded', function() {
    const textElement = document.getElementById('text');
    const increaseButton = document.getElementById('increase-btn');
    const decreaseButton = document.getElementById('decrease-btn');

    const FONT_SIZE_INCREMENT = 2;
    const MAX_FONT_SIZE = 100;
    const MIN_FONT_SIZE = 6;

    const changeFontSize = (delta) => {
      let currentFontSize = parseFloat(window.getComputedStyle(textElement).fontSize);
      currentFontSize += delta;
      if (currentFontSize >= MIN_FONT_SIZE && currentFontSize <= MAX_FONT_SIZE) {
        textElement.style.fontSize = currentFontSize + 'px';
      }
    };

    increaseButton.addEventListener('click', () => {
      changeFontSize(FONT_SIZE_INCREMENT);
    });

    decreaseButton.addEventListener('click', () => {
      changeFontSize(-FONT_SIZE_INCREMENT);
    });
  });



/// Exercise 41 /////

/*closures
Instructions
Without running the code below, explain in your own
words what the result of each block of code will be and
why.*/

//Block 1
var b = 1;
function someFunction(number) {
function otherFunction(input) {
return b; // Return the value of variable "b" = 5
}
b = 5; // Update the value of variable "b" to 5
return otherFunction; // Return the nested function otherFunction
}
var firstResult = someFunction(9); // Call someFunction and assign the returned function to firstResult (=5)
var result = firstResult(2); // Call the function stored in firstResult and assign the result to "result". reault = 5


//Block 2
var a = 1;
function b2() {
a = 10; // Update the value of variable "a" to 10, but this change is local to the function scope and doesn't affect the global variable "a"
return; // Return undefined.
function a() { }//Function a, defined after the return statement, will not be invoked during the execution of the function b2.
}
b2();
console.log(a); // will log 1


//Block 3
/*Because setTimeout operates asynchronously the log functions are executed after the loop, "i" will be "3" for each function call. 
Consequently, the console will display "3" three times, showing that "i" is "3" at the time of execution.*/
let i;
for (i = 0; i < 3; i++) {
const log = () => {
console.log(i);
}
setTimeout(log, 100);
}


