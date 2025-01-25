// 1.
function ucFirstLetters(str) {
    return str
      .split(" ")
      .map(word => word[0].toUpperCase() + word.slice(1))
      .join(" ");
  }
  console.log(ucFirstLetters("los angeles")); // Los Angeles
  
  // 2.
  function truncate(str, max) {
    return str.length > max ? str.slice(0, max) + "..." : str;
  }
  console.log(truncate("This text will be truncated if it is too long", 25)); // This text will be truncat...
  
  // 3.
  const animals = ["Tiger", "Giraffe"];
  // a) 
  animals.push("Elephant", "Lion");
  // b) 
  animals.unshift("Panda", "Koala");
  // c) 
  animals.sort();
  // d)
  function replaceMiddleAnimal(newValue) {
    const middleIndex = Math.floor(animals.length / 2);
    animals[middleIndex] = newValue;
  }
  replaceMiddleAnimal("Zebra");
  // e)
  function findMatchingAnimals(beginsWith) {
    return animals.filter(animal =>
      animal.toLowerCase().startsWith(beginsWith.toLowerCase())
    );
  }
  console.log(findMatchingAnimals("t"));
  console.log(animals);
  
  // 4.
  // a.)
  function camelCase(cssProp) {
    return cssProp
      .split('-') // Split the string into parts by dashes
      .map((word, index) => index === 0 ? word : word[0].toUpperCase() + word.slice(1)) // Capitalize first letter of words (except the first one)
      .join(''); // Join them back into a single string
  }
  
  // Example
  console.log(camelCase('margin-left')); // marginLeft
  console.log(camelCase('background-image')); // backgroundImage
  console.log(camelCase('display')); // display

  // b.)
  function camelCaseWithForLoop(cssProp) {
    let parts = cssProp.split('-');
    for (let i = 1; i < parts.length; i++) {
      parts[i] = parts[i][0].toUpperCase() + parts[i].slice(1);
    }
    return parts.join('');
  }

  // c.)

  //with conditional operator
  function camelCaseWithConditional(cssProp) {
    return cssProp
      .split('-')
      .map((word, index) => index === 0 ? word : word[0].toUpperCase() + word.slice(1))
      .join('');
  }
  
  // Example
  console.log(camelCaseWithConditional('margin-left')); // marginLeft
  console.log(camelCaseWithConditional('background-image')); // backgroundImage
  console.log(camelCaseWithConditional('display')); // display
  
  //without conditional operator
  function camelCaseWithoutConditional(cssProp) {
    let parts = cssProp.split('-');
    let result = parts[0];
    for (let i = 1; i < parts.length; i++) {
      if (i > 0) {
        result += parts[i][0].toUpperCase() + parts[i].slice(1);
      }
    }
    return result;
  }
  
  // Example Usage
  console.log(camelCaseWithoutConditional('margin-left')); // marginLeft
  console.log(camelCaseWithoutConditional('background-image')); // backgroundImage
  console.log(camelCaseWithoutConditional('display')); // display
  
  
  // 5. 

  // a) the addition concatenates the strings.
  // b) 
  function currencyAddition(float1, float2) {
    return Math.round((float1 + float2) * 100) / 100;
  }
  // c) 
  function currencyOperation(float1, float2, operation) {
    switch (operation) {
      case "+":
        return Math.round((float1 + float2) * 100) / 100;
      case "-":
        return Math.round((float1 - float2) * 100) / 100;
      case "*":
        return Math.round(float1 * float2 * 100) / 100;
      case "/":
        return Math.round((float1 / float2) * 100) / 100;
      default:
        return null;
    }
  }
  // d) Extension
  function currencyOperationExtended(float1, float2, operation, numDecimals = 2) {
    const factor = Math.pow(10, numDecimals);
    switch (operation) {
      case "+":
        return Math.round((float1 + float2) * factor) / factor;
      case "-":
        return Math.round((float1 - float2) * factor) / factor;
      case "*":
        return Math.round(float1 * float2 * factor) / factor;
      case "/":
        return Math.round((float1 / float2) * factor) / factor;
      default:
        return null;
    }
  }
  console.log(currencyAddition(0.1, 0.2)); // 0.3
  
  // 6. 
  function unique(duplicatesArray) {
    return [...new Set(duplicatesArray)];
  }
  console.log(unique(["red", "green", "blue", "red"]));
  
  // 7. 
  const books = [
    { id: 1, title: "The Great Gatsby", author: "F. Scott Fitzgerald", year: 1925 },
    { id: 2, title: "To Kill a Mockingbird", author: "Harper Lee", year: 1960 },
    { id: 3, title: "1984", author: "George Orwell", year: 1949 },
    { id: 4, title: "Brave New World", author: "Aldous Huxley", year: 1932 },
    { id: 5, title: "The Catcher in the Rye", author: "J.D. Salinger", year: 1951 },
  ];
  function getBookTitle(bookId) {
    const book = books.find(book => book.id === bookId);
    return book ? book.title : null;
  }
  function getOldBooks() {
    return books.filter(book => book.year < 1950);
  }
  function addGenre() {
    return books.map(book => ({ ...book, genre: "classic" }));
  }
  function getTitles(authorInitial) {
    return books
      .filter(book => book.author.startsWith(authorInitial))
      .map(book => book.title);
  }
  
  // 8. 
  const phoneBookDEF = new Map([
    ["Daniel", "0412121212"],
    ["Eve", "0423434343"],
  ]);
  phoneBookABC.set("Caroline", "0455222233");
  function printPhoneBook(contacts) {
    contacts.forEach((value, key) => console.log(`${key}: ${value}`));
  }
  const combinedPhoneBook = new Map([...phoneBookABC, ...phoneBookDEF]);
  console.log([...combinedPhoneBook.keys()]);
  
  // 9.
  function sumSalaries(salaries) {
    return Object.values(salaries).reduce((sum, salary) => sum + salary, 0);
  }
  function topEarner(salaries) {
    return Object.entries(salaries).reduce((max, current) =>
      current[1] > max[1] ? current : max
    )[0];
  }
  
  // 10.
  const today = new Date();
  console.log(`Current time is ${today.toLocaleTimeString()}`);
  console.log(`${today.getHours()} hours have passed so far today`);
  console.log(`${today.getHours() * 60 + today.getMinutes()} minutes`);
  console.log(
    `${today.getHours() * 3600 + today.getMinutes() * 60 + today.getSeconds()} seconds`
  );
  function daysInBetween(date1, date2) {
    const msInDay = 24 * 60 * 60 * 1000;
    return Math.abs((date2 - date1) / msInDay);
  }
  