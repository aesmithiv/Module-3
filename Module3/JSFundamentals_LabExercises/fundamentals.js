//QUESTION 1
                              //PREDICTIONS//
"" + 1 + 0 // 10                **CORRECT
"" - 1 + 0 // -1                **CORRECT
true + false // 1               **CORRECT
!true // false                  **CORRECT
6 / "3" //2                     **CORRECT
"2" * "3" //6                   **CORRECT
4 + 5 + "px" //45px             **WRONG
"$" + 4 + 5 // $45              **CORRECT
"4" - 2 // 2                    **CORRECT
"4px" - 2 // 2px                **WRONG
"-9 " + 5 // -95                **why is there a space before the 5?
" -9 " - 5 // -4                **WRONG
null + 1 //null1                **WRONG
undefined + 1 // undefined1     **WRONG
undefined == null // false      **WRONG
undefined === null // false     **CORRECT
" \t \n" - 2 // -2              **CORRECT  (But I guessed...)

                            //ACTUAL OUTPUT//
console.log("" + 1 + 0)         //10
console.log("" - 1 + 0)         //-1
console.log(true + false)       //1
console.log(!true)              //false
console.log(6 / "3" )           //2
console.log("2" * "3")          //6
console.log(4 + 5 + "px")       //9px
console.log("$" + 4 + 5)        //$45
console.log("4" - 2)            //2
console.log("4px" - 2)          //Nan
console.log("-9" + 5)           //-9 5
console.log(" -9 " - 5)         //-14
console.log(null + 1)           //1
console.log(undefined + 1)      //Nan
console.log(undefined == null)  //true
console.log(undefined === null) //false
console.log(" \t \n" - 2)       //-2

//QUESTION 2

let three = "3"
let four = "4"
let thirty = "30"

//what is the value of the following expressions?

// let addition = three + four                      //34 - Needs correction
let addition = Number(three) + Number(four)         // CORRECTED

let multiplication = three * four                   //12
let division = three / four                         //0.75
let subtraction = three - four                      //-1
let lessThan1 = three < four                        //True

// let lessThan2 = thirty < four                    //True - Needs correction
let lessThan2 = Number(thirty) < Number(four)       //True - CORRECTED

//OUTPUT
console.log(addition)                   //WRONG
console.log(multiplication)             //CORRECT
console.log(division)                   //CORRECT
console.log(subtraction)                //CORRECT
console.log(lessThan1)                  //CORRECT
console.log(lessThan2)                  //WRONG

//QUESTION 3 - Which of the following console.log messages will print? Why?
if (0) console.log('#1 zero is true')   //does not output            Reason: 0 is falsy
if ("0") console.log('#2 zero is true') //OUTPUT = #2 zero is true   Reason: "0" is truthy
if (null) console.log('null is true')   //does not output -          Reason: Null is falsy
if (-1) console.log('negative is true') //OUTPUT = negative is true  Reason: -1 is truthy
if (1) console.log('positive is true')  //OUTPUT = positive is true  Reason: 1 is truthy

//QUESTION 4

/* Original code from question:

let a = 2, b = 3;
let result = `${a} + ${b} is `;
if (a + b < 10) {
result += 'less than 10';
} else {
result += 'greater than 10';
}

*/

let a = 2, b = 3;
let result = `${a} + ${b} is `;

result += (a + b < 10) ? 'less than 10' : 'greater than or equal to 10';

console.log(result);

//QUESTION 5

function getGreeting(name) {
    return 'Hello ' + name + '!';
}


// a)
const getGreeting = function(name) {
        return 'Hello ' + name + '!';
    };
    console.log(getGreeting('Alice')); 
// b)
const getGreeting = (name) => 'Hello ' + name + '!';
    console.log(getGreeting('Alice')); 


//QUESTION 6

const westley = {
    name: 'Westley',
    numFingers: 5
};

const rugen = {
    name: 'Count Rugen',
    numFingers: 6
};

const inigo = {
    firstName: 'Inigo',
    lastName: 'Montoya',

    greeting(person) {
        let greeting = `Hello ${person.name}, my name is ${this.firstName} ${this.lastName}. `;
        console.log(greeting + this.getCatchPhrase(person));
    },

    getCatchPhrase: (person) =>
        person.numFingers === 6 
            ? "You killed my father. Prepare to die." 
            : "Nice to meet you."
};

// Test cases
inigo.greeting(westley);
inigo.greeting(rugen);

//QUESTION 7
const basketballGame = {
    score: 0,
    fouls: 0,

    freeThrow() {
        this.score++;
        return this; 
    },

    basket() {
        this.score += 2;
        return this; 
    },

    threePointer() {
        this.score += 3;
        return this; 
    },

    incrementFoul() {
        this.fouls++;
        return this;
    },

    halfTime() {
        console.log(`Halftime score is ${this.score}, with ${this.fouls} fouls.`);
        return this; 
    },

    fullTime() {
        console.log(`Full-time score is ${this.score}, with ${this.fouls} fouls.`);
        return this; 
    }
};

// Test chained method calls
basketballGame
    .basket()
    .freeThrow()
    .freeThrow()
    .basket()
    .threePointer()
    .incrementFoul()
    .incrementFoul()
    .halfTime()
    .basket()
    .incrementFoul()
    .fullTime();


//QUESTION 8
    const sydney = {
    name: 'Sydney',
    population: 5_121_000,
    state: 'NSW',
    founded: '26 January 1788',
    timezone: 'Australia/Sydney'
    }

    function printCityDetails(city) {
        for (let key in city) {
            console.log(`${key}: ${city[key]}`);
        }
    }
    
// A)
    // const sydney = {
    //     name: 'Sydney',
    //     population: 5_121_000,
    //     state: 'NSW',
    //     founded: '26 January 1788',
    //     timezone: 'Australia/Sydney'
    // };
    
    // printCityDetails(sydney);

// B)

const newYork = {
    name: 'New York',
    population: 8_336_817,
    state: 'New York',
    founded: '1624',
    timezone: 'America/New_York'
};

// Test 
printCityDetails(newYork);

// QUESTION 9

// Original variables
let teamSports = ['Hockey', 'Cricket', 'Volleyball'];
let dog1 = 'Bingo';
let cat1 = { name: 'Fluffy', breed: 'Siberian' };

// a) Create a new moreSports variable equal to teamSports
let moreSports = teamSports;

// Add new sports to moreSports
moreSports.push('Basketball'); 
moreSports.unshift('Soccer'); 

// b) Create a new dog2 variable equal to dog1
let dog2 = dog1;
dog2 = 'Max'; 

// c) Create a new cat2 variable equal to cat1
let cat2 = cat1;
cat2.name = 'Whiskers'; 

// d) Print the original variables
console.log('teamSports:', teamSports); 
console.log('dog1:', dog1);             
console.log('cat1:', cat1);             

// e) Modify moreSports and cat2 to ensure independence
let independentSports = [...teamSports];
independentSports.push('Tennis'); 

let independentCat = { ...cat1 }; 
independentCat.name = 'Shadow'; 

// Test independence
console.log('teamSports (unchanged):', teamSports);
console.log('independentSports:', independentSports);
console.log('cat1 (unchanged):', cat1);
console.log('independentCat:', independentCat);

// Question 10

function Person(name, age) {
    this.name = name;
    this.age = age;
    this.human = true;
    this.canDrive = function () {
        return this.age >= 18;
    };
}

// Create two people
const person1 = new Person('Alice', 25);
const person2 = new Person('Bob', 16);

// c) Print the properties of each person
console.log('Person 1:', person1);
console.log('Person 2:', person2);
console.log('Can Person 1 drive?', person1.canDrive());
console.log('Can Person 2 drive?', person2.canDrive());

class PersonClass {
    constructor(name, age) {
        this.name = name;
        this.age = age;
        this.human = true;
    }

    // Add a canDrive method
    canDrive() {
        return this.age >= 18;
    }
}

// Create third person using the class
const person3 = new PersonClass('Charlie', 30);

// Print third person and check if they can drive
console.log('Person 3:', person3);
console.log('Can Person 3 drive?', person3.canDrive());



    
    
    


