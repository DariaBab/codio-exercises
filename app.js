///// Exercise 0 /////

// 1. Create a variable whose value holds a string.
// 2. Create a variable whose value holds a number.
// 3. Create a variable whose value holds an object.
// 4. Create a variable whose value holds a boolean.
// 5. Create a variable whose value holds null.
// 6. Create a variable whose value is undefined.
// 7. Create a variable whose value holds a symbol.
// Console log the types of your variables.

const string = "Hello World!";

const number = 5;

const object = {
  color: "red",
  width: 30,
};

const boolean = true;

const myNull = null;

let myUndefined;

const symbol = Symbol();

console.log(string);
console.log(number);
console.log(object);
console.log(boolean);
// console.log(myUndefined);
console.log(myNull);
console.log(symbol);

///// Exercise 1 /////

/*1. Which of the following is/are strings?
Answer:
c) '4'

2. Which of the following is/are numbers?
Answer:
a) 4
b) 4.0
d) -4

3. Which of the following is/are booleans?
Answer:
a) true
b) false

4. What is the result of 80 + 71.2?
Answer:
a) 151.2

5. What is the result of "80" + 71.2?
Answer:
c) "8071.2"

6. Does 100 + 30 produce a number or a string?
Answer:
a) number

7. Does "100" + 30 produce a number or a string?
Answer:
b)string */

//create three different ways to declare variables

var a = "a";
let b = "b";
const c = "c";

//declare a variable and reassign a value to it

let myVariable1 = "value";
myVariable1 = "new value";

//create a variable and after that assign a string with its value being: He's got it!

const myString = "He's got it!";

/*
1. create a variable and assign a value on how
much a restaurant bill is.
2. create a variable and assign a value on how
much tax they should pay.
3. create a variable that will calculate the bill
* tax and its output would be: Your total bill is
<total bill> $.
*/

const restaurantBill = 100;
const taxAmount = 10;
const totalBill = restaurantBill + taxAmount;

console.log(`Total bill is ${totalBill}$`);

// Round the number 50.6 to its nearest integer

const roundNumber = Math.round(50.6);
console.log(roundNumber);

//Create a variable that is undefined
let undefinedVariable;



///// Exercise 2 /////

/* 1. Write a function called ‘countryInfo’ which takes three
parameters: 'country', 'population' and 'capitalCity'. Based
on this input, the function returns a string with this format:
‘Spain has 47 million people and its capital city is Madrid’
2. Call this function 3 times, with input data for 3 different
countries. Store the returned values in 3 different
variables, and log them to the console. */

function countryInfo(country, population, capitalCity) {
  return `${country} has ${population} million people and its capital city is ${capitalCity}`;
}

const spainInfo = countryInfo("Spain", 47, "Madrid");
const israelInfo = countryInfo("Israel", 9, "Jerusalem");
const japanInfo = countryInfo("Japan", 125, "Tokyo");

console.log(spainInfo);
console.log(israelInfo);
console.log(japanInfo);



///// Exercise 3 /////

/*
Instructions
Why pay a fortune teller when you can just program your
fortune yourself?
1. Write a function named `tellFortune` that takes 4
parameters:
jobTitle, location, partnerName, numberOfChildren.
Based on this output the function returns a string with this
format:
‘You will be a programmer in New York married to Rana
with 2 children’.
*/

function tellFortune(jobTitle, location, partnerName, numberOfChildren) {
  return `You will be a ${jobTitle} in ${location} married to ${partnerName} with ${numberOfChildren} children.`;
}

const yourFortune = tellFortune("writer", "Edinburgh", "Neil Murray", 3);

console.log(yourFortune);



///// Exercise 4 /////

/*Write a function that calculates the circle area by a given radius
as an argument. Print the area as it is calculated and then print
it rounded to two decimal places.*/

function calculateCircleArea(radius) {
  const circleArea = Math.PI * radius * radius;

  console.log("Circle area is:", circleArea);

  const roundCircleArea = +circleArea.toFixed(2);

  console.log("Rounded circle area is:", roundCircleArea);
}

calculateCircleArea(7);



///// Exercise 5 /////

/*1. Name of the current day e.g. Sunday
2. Current day of the month e.g. 31
3. Current month e.g January
4. Current Year e.g 2021
Create a function that will return a string in the following format:
`Today is Sunday the 31 of January 2021’*/

function getTodaysDate() {
  const currentDate = new Date();

  const dayOfWeek = currentDate.toLocaleString("en-US", { weekday: "long" });
  const dayOfMonth = currentDate.getDate();
  const monthName = currentDate.toLocaleString("en-US", { month: "long" });
  const year = currentDate.getFullYear();

  const todaysDate = `Today is ${dayOfWeek} the ${dayOfMonth} of ${monthName} ${year}`;

  return todaysDate;
}

console.log(getTodaysDate());



///// Exercise 6 /////

/*
JavaScript - Declaring Functions
The following exercise contains the following
subjects:
* functions
Instructions
* Please reformat the following function
declarations to function expression.
* Please reformat the following function
expressions to function declarations.
Submit the file to Hive
*/

// From function declarations to function expressions
const welcome = function () {
  let welcome = "Welcome to Appleseeds Bootcamp!";
  return welcome;
};
const power = function (a) {
  let myNumber = a;
  let result = Math.pow(myNumber, 2);
  return result;
};
const add = function (a, b = 5) {
  let myNumber = a;
  let sum = myNumber + b;
  return sum;
};

// From function expressions to function declarations

function hello() {
  return "Hello!";
}

function squareRoot(a) {
  return Math.sqrt(a);
}

function andomNumbers(a, b) {
  return Math.random() * (a - b) + b;
}



///// Exercise 7 /////

/* Please reformat the following function
expressions to IIFE functions.
* Please reformat the following function
declarations in two ways, explicit return and implicit
return functions*/

/* From function declarations to explicit and implicit
return functions (one of each).*/

// explicit //
const welcomeExplicit = () => {
  let welcome = "Welcome to Appleseeds Bootcamp!";
  return welcome;
};

// implicit //
const welcomeImplicit = () => "Welcome to Appleseeds Bootcamp!";

// explicit //
const powerExplicit = a => {
  let myNumber = a;
  let result = Math.pow(myNumber, 2);
  return result;
};

// implicit //
const powerImplicit = a => Math.pow(a, 2);


// From function expressions to IIFE functions.

const squareRoot = ((a) => Math.sqrt(a))(4);
const randomNumbers = ((a, b) => Math.random() * (a - b) + b)(4, 2);


///// Exercise 8 /////

/*
1. The world population is 7900 million people. Create
a function declaration called 'percentageOfWorld1'
which receives a 'population' value, and returns the
percentage of the world population that the given
population represents. For example, China has
1441 million people, so it's about 18.2% of the world
population.
2. To calculate the percentage, divide the given
'population' value by 7900 and then multiply by 100.
3. Call 'percentageOfWorld1' for 3 populations of
countries of your choice, store the results into
variables and log them to the console.
4. Create a function expression that does the exact
same thing, called 'percentageOfWorld2', and also
call it with 3 country populations (can be the same
populations)
*/

function percentageOfWorld1(population) {
    const countryPopulation  = (population / 7900) * 100;
    return countryPopulation.toFixed(2)
}

const israelPopulation = percentageOfWorld1(9.3);
const japanPopulation = percentageOfWorld1(125.7);
const newZealandPopulation = percentageOfWorld1(5.1);

console.log(`Israel population is ${israelPopulation}% of the world
population` );
console.log(`Japan population is ${japanPopulation}% of the world
population` );
console.log(`New Zealand population is ${newZealandPopulation}% of the world
population` );

const percentageOfWorld2 = function(population) {
    const countryPopulation  = (population / 7900) * 100;
    return countryPopulation.toFixed(2)
}

console.log(`Israel population is ${percentageOfWorld2(9)}% of the world
population` );
console.log(`Japan population is ${percentageOfWorld2(125)}% of the world
population` );
console.log(`New Zealand population is ${percentageOfWorld2(5)}% of the world
population` );



///// Exercise 9 /////

/*Instructions
Use the prompt method to get information from the user.
The Exercise
1. Declare a variable 'numSiblings' based on a prompt input
like this:
prompt('How many siblings do you have?');
2. If you have one sibling, log to the console '1 sibling!' (use
loose equality == for now)
3. Use an else-if block to log 'More than 1 sibling' in case
'numSiblings' is greater than 1
4. Use an else block to log 'No siblings' (this block will be
executed when 'numSiblings' is 0 or any other value)
5. Test the code with different values of 'numSiblings',
including 1 and 0.
6. Change == to ===, and test the code again, with the same
values of 'numSiblings'. Notice what happens when there
is exactly 1 sibling! Why is this happening?
7. Finally, convert 'numSibling' to a number, and watch what
happens now when you input 1.
8. Reflect on why we should use the === operator and type
conversion in this situation.*/


const numSiblings = +prompt('How many siblings do you have?', '');

if (numSiblings === 1) {
    console.log('1 sibling!');
} else if (numSiblings > 1) {
    console.log('More than 1 sibling');
} else {
    console.log('No siblings');
}



///// Exercise 10 /////

/*Create a function that takes 1 argument, a number score.
Returns either “A”, ”B”, “C”, “D”, “F”.
score of:
0-64 is a “F”
65-69 is a “D”
70-79 is a “C”
80-89 is a “B”
90-100 is an “A*/

function getResult(score) {
    if (score >= 0 && score <= 64) {
        return "F";
    } else if (score >= 65 && score <= 69) {
        return "D";
    } else if (score >= 70 && score <= 79) {
        return "C";
    } else if (score >= 80 && score <= 89) {
        return "B";
    } else if (score >= 90 && score <= 100) {
        return "A";
    } else {
        return "You are too cool for this universe!";
    }
}



///// Exercise 11 /////

/*Instructions
John and Mike both play basketball on different teams. In the
latest 3 games, John's team scored 89, 120, and 103 points,
while Mike's team scored 116, 94, and 123 points.
1. Calculate the average score for each team.
2. Decide which team wins on average (highest average
score), and print the winner to the console. Also include
the average score in the output.
3. Then change the scores to show different winners. Don't
forget to take into account that there might be a draw (the
same average score).
4. EXTRA: Mary also plays basketball, and her team scored
97, 134, and 105 points. Like before, log the average
winner to the console.
5. Like before, change the scores to generate different
winners, keeping in mind there might be draws.*/

const johnTeam = [89, 120, 103];
const mikeTeam = [116, 94, 123];
const maryTeam = [116, 94, 123];

function getAverageScore(scoreList) {
    const sumScore = scoreList.reduce((acc, curr) => acc + curr, 0);
    const averageScore = sumScore/scoreList.length;
    return averageScore
};

const johnAverage = getAverageScore(johnTeam);
const mikeAverage = getAverageScore(mikeTeam);
const maryAverage = getAverageScore(maryTeam);

const winners = {
    John: johnAverage,
    Mike: mikeAverage,
    Mary: maryAverage
};

let winner = { name: '', score: 0 };

Object.entries(winners).forEach(([name, score]) => {
    if (score > winner.score) {
        winner = { name, score };
    } else if (score === winner.score) {
        winner.name += ` and ${name}`;
    }
});

console.log(`${winner.name}'s team wins with an average score of ${winner.score}`);



///// Exercise 12 /////

/*Instructions
Write a function that takes one argument n, an integer.
Print out all the numbers between 1 to n.
If the number is only divisible by 7 print “BOOM”
If the number is divisible by 7 and also includes the digit 7 print
“BOOM-BOOM”
If either of the above cases prints the number.
Example of numbers between 1 to 18:
1,2,3,4,5,6, BOOM-BOOM,8,9,10,11,12,13,BOOM,15,16,17,18
Hint:
Use the includes method to find out if the number includes a 7.*/

function superBoom(n) {
    for (let i = 1; i <= n; i++) {
        if (i % 7 === 0 && String(i).includes('7')) {
            console.log('BOOM-BOOM');
        } else if (i % 7 === 0) {
            console.log('BOOM');
        } else {
            console.log(i);
        }
    }
}

superBoom(18)



///// Exercise 13 /////

/*Instructions
Create a JS function to determine whether or not a given year
is a leap year. The function should take a year as an argument:
1. Determine whether or not it is a leap year
● If the given year is a leap year, the program should print "It
is indeed a leap year", otherwise the program will print
"This is not a leap year."
Help:
every year that is divisible by 4 is a leap year except for the
ones that are also divisible by 100 unless it is divisible by 400.
Example: 2012 is the leap year 2100 is not But 2400 is.*/

function isLeapYear(year) {
    if ((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0) {
        console.log("It is indeed a leap year");
    } else {
        console.log("This is not a leap year");
    }
}

isLeapYear(2024); 
isLeapYear(2100); 
isLeapYear(2400); 




///// Exercise 14 /////

/*
1. Create a function called ‘countryToLiveIn’ that takes 4
parameters:
language, isIsland, population, and country. isIsland’s
argument value should be true or false. population’s
argument value should be an integer. country should be a
string of a country. Language should be a string.
2. Let's say Sarah is looking for a new country to live in. She
wants to live in a country that speaks English, has less
than 50 million people, and is not an island.
3. Write an if statement inside your function to help Sarah
figure out if your country is right for her. You will need to
write a condition that accounts for all of Sarah's criteria.
Take your time with this, and check part of the solution if
necessary.
4. If yours is the right country, log a string like this: 'You
should live in Finland. If not, log 'Finland does not meet
your criteria'.
5. If your country does not meet all the criteria, go back and
temporarily change some argument values in order to
make the condition true.
*/

function countryToLiveIn(language, isIsland, population, country) {
    if (language === 'English' && !isIsland && population < 50) {
        console.log(`You should live in ${country}.`);
    } else {
        console.log(`${country} does not meet your criteria.`);
    }
}

countryToLiveIn('English', false, 30, 'Finland'); 
countryToLiveIn('Japanese', true, 125, 'Japan'); 



///// Exercise 15 /////

/*Switch
Instructions
1. Create a function that takes one parameter, a language.
2. Use a switch statement to log the following string for the
given 'language':
mandarin: 'MOST number of native speakers!'
Spanish: '2nd place in a number of native speakers'
English: '3rd place'
Hindi: 'Number 4'
Arabic: '5th most spoken language'
for all others simply log 'Not in the top 5'*/

function languagePlace(language) {
    switch (language) {
        case 'mandarin':
            console.log('MOST number of native speakers!');
            break;
        case 'Spanish':
            console.log('2nd place in a number of native speakers');
            break;
        case 'English':
            console.log('3rd place');
            break;
        case 'Hindi':
            console.log('Number 4');
            break;
        case 'Arabic':
            console.log('5th most spoken language');
            break;
        default:
            console.log('Not in the top 5');
    }
}

languagePlace('English'); 
languagePlace('Russian');



///// Exercise 16 /////

/*Ternaries
Logical operators
Instructions
Create a simple password validation function that takes a
password string as an argument.
If the length of the password is more than 7 characters return
“Strong”. If it is less than 7 characters long return “Weak.*/

//1. Create a function that uses an if/else conditional expression.
function passwordValidation1(password) {
    if (password.length > 7) {
        return "Strong";
    } else {
        return "Weak";
    }
}

//2. Create a function that uses a ternary conditional expression.
function passwordValidation2(password) {
    return password.length > 7 ? "Strong" : "Weak";
}


//3. Create a function that uses a && logical operator.



/*4. Create an “advanced” password validation function that
takes a password string as an argument.
If the password length is more than 7 characters long and
has at least one capital letter return “Very Strong”. If the
password length is only 7 characters long returns “Strong”.
If the password length is less than 7 characters long return
“Weak”
Use only a ternary conditional expression.*/
function advancedPasswordValidation(password) {
    return password.length > 7 && /[A-Z]/.test(password) ? "Very Strong" 
         : password.length === 7 ? "Strong" 
         : "Weak";
}



///// Exercise 17 /////

/*Instructions
Create a function that receives one argument, a string color.
Create a switch statement that:
1. If the color is yellow, pink, or orange return from the
function “light color”.
2. If the color is a blue, purple, or brown return from the
function “dark color”.
3. If the color is none of the above return “Unknown color”.
Note:
It shouldn’t be case sensitive*/

function getColor(color) {
  
    color = color.toLowerCase();

    switch (color) {
        case 'yellow':
        case 'pink':
        case 'orange':
            console.log("light color");
            break;
        case 'blue':
        case 'purple':
        case 'brown':
            console.log("dark color");
            break;
        default:
            console.log("Unknown color");
    }
}

getColor('BluE');
