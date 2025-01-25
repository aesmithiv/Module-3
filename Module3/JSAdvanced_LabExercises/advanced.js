// 1.)
function makeCounter(startFrom = 0, incrementBy = 1) {
    let currentCount = startFrom;
    return function () {
      currentCount += incrementBy;
      console.log(currentCount);
      return currentCount;
    };
  }
  
  let counter1 = makeCounter();
  counter1(); // 1
  counter1(); // 2
  
  let counter2 = makeCounter(10, 5); 
  counter2(); // 15
  counter2(); // 20
  
// 2.)
// a) order: #4, #3, #2, #1
function delayMsg(msg) {
    console.log(`This message will be printed after a delay: ${msg}`);
  }
  setTimeout(delayMsg, 100, '#1: Delayed by 100ms');
  setTimeout(delayMsg, 20, '#2: Delayed by 20ms');
  setTimeout(delayMsg, 0, '#3: Delayed by 0ms');
  delayMsg('#4: Not delayed at all');
  
  // b)
  const delayMsgArrow = (msg) =>
    console.log(`This message will be printed after a delay: ${msg}`);
  
  // c) 
  const timerId = setTimeout(delayMsgArrow, 11000, '#5: Delayed by 11 seconds');
  
  // d) 
  clearTimeout(timerId);

// 3.)

function debounce(func, ms = 1000) {
    let timeout;
    return function (...args) {
      clearTimeout(timeout);
      timeout = setTimeout(() => func(...args), ms);
    };
  }
  
  function printMe(msg) {
    console.log(`Printing debounced message: ${msg}`);
  }
  printMe = debounce(printMe, 1000);
  
  setTimeout(() => printMe('Call 1'), 100);
  setTimeout(() => printMe('Call 2'), 200);
  setTimeout(() => printMe('Call 3'), 300);

  // 4.)

  function printFibonacci(limit) {
    let [a, b] = [0, 1];
    let count = 0;
    const intervalId = setInterval(() => {
      if (count >= limit) clearInterval(intervalId);
      else {
        console.log(a);
        [a, b] = [b, a + b];
        count++;
      }
    }, 1000);
  }
  
  function printFibonacciTimeouts(limit) {
    let [a, b] = [0, 1];
    let count = 0;
    function next() {
      if (count >= limit) return;
      console.log(a);
      [a, b] = [b, a + b];
      count++;
      setTimeout(next, 1000);
    }
    next();
  }
  printFibonacci(10);

  // 5.) 
 
  let car = {
    make: 'Porsche',
    model: '911',
    year: 1964,
    description() {
      console.log(`This car is a ${this.make} ${this.model} from ${this.year}`);
    },
  };
  
  // a) 
  setTimeout(() => car.description(), 200);
  
  // b) 
  const newCar = { ...car, year: 2022 };
  
  // c) Delayed call uses original values due to closure over the original object
  
  // d) 
  const boundDescription = car.description.bind(car);
  setTimeout(boundDescription, 200);
  
  // e) 
  newCar.model = 'Cayenne';
 
  // 6.)
  Function.prototype.delay = function (ms) {
    const originalFunction = this;
    return function (...args) {
      setTimeout(() => originalFunction.apply(this, args), ms);
    };
  };
  
  function multiply(a, b) {
    console.log(a * b);
  }
  multiply.delay(500)(5, 5);
  
  function add(a, b, c, d) {
    console.log(a + b + c + d);
  }
  add.delay(1000)(1, 2, 3, 4);

  // 7.)

  class DigitalClock {
    constructor(prefix) {
      this.prefix = prefix;
    }
    display() {
      const date = new Date();
      const [hours, mins, secs] = [
        String(date.getHours()).padStart(2, '0'),
        String(date.getMinutes()).padStart(2, '0'),
        String(date.getSeconds()).padStart(2, '0'),
      ];
      console.log(`${this.prefix} ${hours}:${mins}:${secs}`);
    }
    stop() {
      clearInterval(this.timer);
    }
    start() {
      this.display();
      this.timer = setInterval(() => this.display(), 1000);
    }
  }
  
  class PrecisionClock extends DigitalClock {
    constructor(prefix, precision = 1000) {
      super(prefix);
      this.precision = precision;
    }
    start() {
      this.display();
      this.timer = setInterval(() => this.display(), this.precision);
    }
  }
  
  class AlarmClock extends DigitalClock {
    constructor(prefix, wakeupTime = '07:00') {
      super(prefix);
      this.wakeupTime = wakeupTime;
    }
    display() {
      super.display();
      const now = new Date();
      const timeNow = `${String(now.getHours()).padStart(2, '0')}:${String(
        now.getMinutes()
      ).padStart(2, '0')}`;
      if (timeNow === this.wakeupTime) {
        console.log('Wake Up!');
        this.stop();
      }
    }
  }

  // 8.)

  function validateStringArg(fn) {
    return function (...args) {
      if (args.some(arg => typeof arg !== 'string')) {
        throw new Error('All arguments must be strings');
      }
      return fn(...args);
    };
  }
  
  function orderItems(...itemNames) {
    return `Order placed for: ${itemNames.join(', ')}`;
  }
  
  const validatedOrderItems = validateStringArg(orderItems);
  try {
    console.log(validatedOrderItems('Apple', 'Banana'));
    console.log(validatedOrderItems(123, 'Banana')); // Error
  } catch (error) {
    console.error(error.message);
  }

//9.)

function randomDelay() {
    const delay = Math.floor(Math.random() * 20000) + 1000;
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (delay % 2 === 0) resolve(`Success after ${delay} ms`);
        else reject(`Failure after ${delay} ms`);
      }, delay);
    });
  }
  
  randomDelay()
    .then(message => console.log(message))
    .catch(error => console.error(error));

// 10.)

import fetch from 'node-fetch';

async function fetchURLDataAsync(urls) {
  try {
    const responses = await Promise.all(
      urls.map(async url => {
        const response = await fetch(url);
        if (!response.ok) {
          throw new Error(`Failed with status ${response.status}`);
        }
        return response.json();
      })
    );
    return responses;
  } catch (error) {
    console.error(error.message);
  }
}

fetchURLDataAsync(['https://jsonplaceholder.typicode.com/todos/1']);
