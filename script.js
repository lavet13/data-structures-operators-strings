'use strict';

// Data needed for a later exercise
const flights =
  '_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30';

// ES6 compute property names instead of having to write them out manually and literally. (SOLVE Third enhancement)
const weekdays = ['mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'sun'];
const [, , , thu, fri, sat, sun] = weekdays;

const openingHours = {
  [thu]: {
    open: 12,
    close: 22,
  },
  [fri]: {
    open: 11,
    close: 23,
  },
  [sat]: {
    open: 0, // Open 24 hours
    close: 24,
  },
  [sun]: 0,
  // FIXME if it returns null?
  // SOLVE it doesn't instead returns undefined
  deb: null, // so that's the optional chaining (?.)
};

// Data needed for first part of the section
const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],
  // openingHours: openingHours, // before ES6 we would have to write like this

  // ES6 enhanced object literals(SOLVE First enhancement)
  openingHours,

  // old way to write function expression to the property
  // order: function (starterIndex, mainIndex) {
  //   return [(this.starterMenu[starterIndex], this.mainMenu[mainIndex])];
  // },

  // ES6 writing methods(SOLVE Second enhancement) which allows us to instead of creating a property and set it to a function expression just write a method as if we would create one in a class (ES6)
  order(starterIndex, mainIndex) {
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  },

  orderDelivery({
    starterIndex: starter = -1,
    mainIndex: main = 0,
    address,
    time = '20:00',
  }) {
    console.log(
      `Order received! ${this.starterMenu[starter]} and ${this.mainMenu[main]} will be delivered to ${address} at ${time}`
    );
  },

  orderPasta(ing1, ing2, ing3) {
    console.log(
      `Here is your delicious pasta with ${ing1}, ${ing2} and ${ing3}`
    );
  },

  orderPizza(mainIngredient, ...otherIngredients) {
    console.log(mainIngredient);
    console.log(otherIngredients);
    return 1;
  },
};

/*
//////////////////////////////////////////////////////
// String Methods Practice

const getCode = str => str.replace(/[0-9]/g, '').toUpperCase();
let outputs = [];

for (const flight of flights.split('+')) {
  const [type, from, to, time] = flight.split(';');

  outputs.push(
    `${type.startsWith('_Delayed') ? '¯_(ツ)_/¯ ' : ''}${type
      .replace(/_/g, ' ')
      .trim()} from ${getCode(from)} to ${getCode(to)} (${time.replace(
      ':',
      'h'
    )})`.trim()
  );
}

for (const i in outputs) {
  console.log(
    +i !== 0 ? outputs[i].padStart(outputs[i - 1].length + 1) : outputs[i]
  );
}
*/

/*
//////////////////////////////////////////////////////
// Working With Strings - Part 3

// Split and Join
console.log('a+very+nice+string'.split('+'));
console.log('Jonas Schmedtmann'.split(' '));

const [firstName, lastName] = 'Jonas Schmedtmann'.split(' ');
console.log(firstName, lastName);

const newName = ['Mr.', firstName, lastName.toUpperCase()].join(' ');
console.log(newName);

const capitalizeName = function (string) {
  let names = string.split(' ');

  names = names.map(name => {
    // return name[0].toUpperCase() + name.slice(1);
    return name.replace(name[0], name[0].toUpperCase());
  });

  return names.join(' ');
};

console.log(capitalizeName('jessica ann smith davis'));
console.log(capitalizeName('ivan skinder'));

// Padding
const message = 'Go to gate 23!';
console.log(message.padStart(20, '+').padEnd(30, '+')); // so 20 length should be the new string as a result, after that padEnd method is called and it then going to add 10 pluses to the end of the string, because we padded until the length of 30
console.log('Jonas'.padStart(20, '+').padEnd(30, '+'));
// 'asdf'.padStart(10).padEnd('asdf'.padStart(10).length - 'asdf'.length + 10)

// Practical Example
const maskCreditCard = function (number) {
  const str = number + '';
  const fourDigit = str.slice(-4);

  return fourDigit.padStart(str.length, '*');
};

console.log(maskCreditCard(43215678));
console.log(maskCreditCard(4237947392847));
console.log(maskCreditCard('84798327498237498322731283712'));

// Repeat
const message2 = 'Bad weather... All Departures Delayed... ';
console.log(message2.repeat(5).trim());

const planesInLine = function (number) {
  console.log(`There are ${number} planes in line ${'✈'.repeat(number)}`);
};

planesInLine(5);
planesInLine(3);
planesInLine(12);
*/

/*
//////////////////////////////////////////////////////
// Working With Strings - Part 2

const airline = 'TAP Air Portugal';

// doesn't require any arguments
console.log(airline.toLowerCase());
console.log(airline.toUpperCase());
console.log('jonas'.toUpperCase());

// Fix capitalization in name
const passengerCapitalization = function (passenger) {
  const passengerLower = passenger.toLowerCase();
  return passengerLower[0].toUpperCase() + passengerLower.slice(1);
};

const passengerCorrect = passengerCapitalization('jOnAs');
console.log(passengerCorrect);

// Comparing email
const compareEmails = function (email1, email2) {
  return email1.toLowerCase().trim() === email2.toLowerCase().trim();
};

const email = 'hello@jonas.io';
const loginEmail = '  Hello@Jonas.iO \n';

// const lowerEmail = loginEmail.toLowerCase();
// const trimmedEmail = lowerEmail.trim();
// console.log(trimmedEmail);

// const normalizedEmail = loginEmail.toLowerCase().trim();
// console.log(normalizedEmail);
// console.log(email === normalizedEmail);

console.log(compareEmails(email, loginEmail));

// https://stackoverflow.com/questions/6507056/replace-all-whitespace-characters

// since ES2019 trimStart and trimEnd, to trim only from the start or only from the end

// replacing (case sensitive)
const priceRUB = '288,97rub';
const priceUS = priceRUB.replace('rub', '$').replace(',', '.'); // returns new string so we can do chaining

console.log(priceUS);

const announcement =
  'All passengers come to boarding door 23. Boarding door 23!';

// console.log(announcement.replace('door', 'gate'));
// console.log(announcement.replaceAll('door', 'gate'));

console.log(announcement.replace(/door/g, 'gate'));

// Booleans
const plane = 'Airbus A320neo';
console.log(plane.includes('A320'));
console.log(plane.includes('Boeing'));

console.log(plane.startsWith('Air'));

if (plane.startsWith('Airbus') && plane.endsWith('neo'))
  console.log('Part of the NEW Airbus family');

// Practical exercise
const checkBaggage = function (items) {
  // make sure that everything into a lowercase, because it makes a lot easier to compare to something
  const baggage = items.toLowerCase();

  if (baggage.includes('knife') || baggage.includes('gun')) {
    console.log('You are NOT allowed on board');
  } else {
    console.log('Welcome aboard!');
  }
};

checkBaggage('I have a laptop, some Food and a pocket knife');
checkBaggage('Socks and camera');
checkBaggage('Got some snacks and a gun for protection');
*/

/*
//////////////////////////////////////////////////////
// Working With Strings - Part 1
const airline = 'TAP Air Portugal';
const plane = 'A320';

console.log(plane[0]);
console.log(plane[1]);
console.log(plane[2]);
console.log('B737'[0]);

console.log(airline.length);
console.log('B737'.length);

console.log(airline.indexOf('r'));
console.log(airline.lastIndexOf('r'));
console.log(airline.indexOf('Portugal')); // case sensitive

// returns new string
console.log(airline.slice(4));
console.log(airline.slice(4, 7)); // it stops extracting before reaching index number 7, so doesn't include actually 7, and so the length of the extracting string is always going to be end minus beginning, so 7 - 4 = 3, so 3 is the length

console.log(airline.slice(0, airline.indexOf(' ')));
console.log(airline.slice(airline.lastIndexOf(' ') + 1));

console.log(airline.slice(-2)); // two last elements from original array to a new array would be got
console.log(airline.slice(1, -1)); // first and last elements didn't include in a new array

const checkMiddleSeat = function (seat) {
  // B and E are middle seats
  const s = seat.slice(-1);
  if (s === 'B' || s === 'E') {
    console.log('You got the middle seat');
  } else console.log('You got lucky');
};

checkMiddleSeat('11B'); // check if string contains a B or an E
checkMiddleSeat('23C');
checkMiddleSeat('3E');
// Whenever we call a method on a string, JavaScript will automatically behind the scenes convert that string primitive to a string object with the same content, and then it's on that object where the methods are called, and this process is called boxing because it basically takes our string and puts it into a box which is the object

console.log(new String('jonas'));
console.log(typeof new String('jonas')); // object
// this conversion is what JavaScript does behind the scenes whenever we call a method on a string, and then when the operation is done, the object is converted back to a regular string primitive, and in fact all string methods return primitives, even if called on a string object

console.log(typeof new String('jonas').slice(0)); // result of the slice method is the string primitive
*/
//////////////////////////////////////////////////////
// Summary Which Data Structure to Use
/*

in JavaScript there are built-in data structures WeakMap and WeakSet in JavaScript;

Other Data Structures that are not build-in JavaScript these can be stacks, queues, linked lists, trees or hash tables

we should use arrays, sets for simple lists of values, when we don't need to describe the values;

we should use arrays whenever you need to store values in order and when these values might contain duplicates, and also you should always use arrays when you need to manipulate data because there are a ton of useful array methods;

you can use sets in situations when high performance is really important because operations like searching for an item or deleting an item from a set can be up to 10 times faster in sets than in arrays, and also sets can store unique values, Now one great use case for sets is to remove duplicate values from an array, like we already did before, so sets are really not meant to replace arrays but rather to compliment them whenever we are dealing with unique values;

we should use objects and maps(key value pairs data structures) whenever we need to describe the values using keys, right?
but when to use objects and when to use maps?

Well, objects have been traditional key value data structure simply because we didn't have maps before ES6, but using objects simply as key value stores has a couple of technical disadvantages, and that's why some people say that we've been abusing objects for this;

Now maps on the other hand are way better suited, for simple key value stores because they offer better performance in fact, also map keys can have any data type and they're also easy to iterate and it's easy to compute the size of a map, however the biggest advantage of objects is probably how easy it is to write them and to access data by simply using the dot or the brackets operator, also most developers are already super used to objects and so they simply keep using them for simply key value stores, anyway as a conclusion you should use maps when you simply need to map keys to values and also when you need keys that are not strings, because that can be very powerful sometimes, now if you need functions as values then you should absolutely use an object for that, so in objects these functions are then called methods and you can use the this keyword to access properties of the same object, which is impossible in maps, also when working with JSON data, you will probably be using objects for that as well, unless you then want to convert the objects to maps, but that's usually not something that we do, so in fact, we still use objects all the time, but maps are also a very important data structure right now, and way more important than sets;
*/

/*
//////////////////////////////////////////////////////
// Maps(Iteration)
// FIXME check if "for in" loop works
// SOLVE didn't work

const question = new Map([
  ['question', 'What is the best programming language in the world'],
  [1, 'C'],
  [2, 'Java'],
  [3, 'JavaScript'],
  ['correct', 3],
  [true, 'Correct 🎉'],
  [false, 'Try again! 😁'],
]);

for (let index in question) {
  // seemed not to work at all
  console.log(index, question[index]);
}

// convert object to map
console.log(Object.entries(openingHours));
const hoursMap = new Map(Object.entries(openingHours));
console.log(hoursMap);

// i have no clue why do i need entries method in map data structure, it's similar as below(Quiz app), but we can use Map Iterator which sometimes can be useful
// key value pair
for (let array of question.entries()) {
  console.log(array);
}

// Quiz app
console.log(question.get('question'));

for (const [key, value] of question) {
  // we wouldn't need any method as for example entries, and also because object literals(Object.entries(o)) aren't iterables, maps - iterable
  // analogy of that is an array.entries()
  if (typeof key === 'number') console.log(`Answer: ${key}: ${value}`);
}

// const answer = Number(prompt('Your answer'));
const answer = 3;
console.log(question.get(answer));

console.log(question.get(question.get('correct') === answer)); // so we get boolean value, and we are getting value from that particular key which is whether it's gonna be true or false

// convert map back to an array
const array = [...question]; // Array.from(question)
console.log(array);

// https://github.com/tc39/proposal-object-from-entries
const obj = array.reduce((previousValue, [key, value]) => {
  return Object.assign(previousValue, { [key]: value });
}, {});

let obj = { abc: 1, def: 2, ghij: 3 };
let res = Object.entries(obj)
    .filter(([key]) => key.length === 3)
    .map(([key, value]) => [key, value * 2]).reduce((acc, [key, value]) => {
        return Object.assign(acc, {[key]: value});
    }, {});
// more convenient way to write is to use Object.fromEntries
res = Object.fromEntries(
  Object.entries(obj)
  .filter(([ key, val ]) => key.length === 3)
  .map(([ key, val ]) => [ key, val * 2 ])
);


// and some additional stuff is that don't forget to use Array.from() to your map and set data structure, for instance:
map = new Map().set('foo', true).set('bar', false);
arr = Array.from(map);
set = new Set(map.values()); // if it was array, we could simply use map for that to get rid of keys, i mean get rid of first value in array element itself

obj = { foo: true, bar: false };
map = new Map(Object.entries(obj));
obj = Array.from(map).reduce((acc, [ key, val ]) => Object.assign(acc, { [key]: val }), {});

console.log(obj);

// another example
let sum = [{x: 1}, {x:2}, {x:3}].reduce(function (accumulator, currentValue) {
    // return (accumulator.x ? accumulator.x : accumulator) + currentValue.x;
    return (accumulator.x ?? accumulator) + currentValue.x; // stops when it finds truthy value, so it nullish concept if it null or undefined it goes to the second operand
}); // so without initialValue, it still doable 

console.log([...question]);
console.log([...question.entries()]); // no point to use entries, except that returns Map Iterator, but the whole picture didn't change lulw
console.log([...question.keys()]);
console.log([...question.values()]);
*/

/*
//////////////////////////////////////////////////////
// Maps(Fundamentals)

// a map is a data structure that we can use to map values to keys, so just like an object, data is stored in key value pairs in maps, the big diff between objects and maps is that in maps, the keys can have any type and this can be huge, basically in objects we always have string as a property, but in maps we can have any type of key such as objects, arrays, or other maps.


const rest = new Map();
rest.set('name', 'Classico Italiano');
rest.set(1, 'Firenze, Italy');
console.log(rest.set(4, 'Lisbon, Portugal'));

// since a set method returns updated map, we can use chaining
rest
  .set('categories', ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'])
  .set('open', 11)
  .set('close', 23)
  .set(true, 'We are open :D')
  .set(false, 'We are closed :(');

// in order to read data from a map we use the get method
console.log(rest.get('name'));
// console.log(rest.get('true')); // undefined, because data type of the key matters
console.log(rest.get(true));
// console.log(rest.get('1')); // likewise as with 'true'
console.log(rest.get(1));

const time = 10;
console.log(rest.get(time > rest.get('open') && time < rest.get('close'))); // first and second operands are booleans, so entire result of this OR operation will be either true or false

// as with sets we have the same method 'has'
console.log(rest.has('categories')); // true, - so we trying to find element based on the key, and it returns boolean value, objects do also have a method which is called hasOwnProperty

// Now comparing to objects(object literals) we can actually delete properties from objects using something called "delete" operator but, that's a really slow process and usually it's not encouraged to do that.
console.log(rest.delete(4)); // again based on the key, it returns true if it was deleted or false if it's not
// rest.clear(); // remove all the elements from the map

const arr = [1, 2]; // now it's gonna work because it's contain address of the array in the heap
// use keys as arrays or objects
rest.set(arr, 'Test');
rest.set(document.querySelector('h1'), 'Heading');

console.log(rest);
console.log(rest.size);

console.log(rest.get(arr)); // it could be undefined if we didn't specify variable that contains address of the array that would point to the one in the heap

*/
// as always it's an iterable so we can use "for of" loop and spread operator
// for (let value of rest) {
//   console.log(value);
// }

/*
//////////////////////////////////////////////////////
// Sets (ESX, two more data structures were finally introduced and that are sets and maps(in another lecture))
// a set is basically just a collection of unique values, so that means that a set can never have any duplicates.

// NOTE: so we can only create objects based on existing object if you are using spread operator, and that's all (-_-'), and because it's not iterable, you cannot pass object into a function by using spread operator as we did with arrays, strings already

// Iterables are arrays, strings, maps and sets, but NOT objects
// we need to pass iterables in our set
const ordersSet = new Set([
  'Pasta',
  'Pizza',
  'Pizza',
  'Risotto',
  'Pasta',
  'Pizza',
]);

console.log(ordersSet);
console.log(ordersSet.size); // 3 unique values
console.log(ordersSet.has('Pasta')); // true
console.log(ordersSet.has('Bread')); // false
ordersSet.add('Garlic Bread'); // updated set is returned, we can use chain for that
ordersSet.add('Garlic Bread'); // the second will be ignored
ordersSet.delete('Risotto'); // deleting Risotto
// ordersSet.clear(); // delete all elements of a set
console.log(ordersSet);
// in sets there are actually no indexes;
// and in fact, there is no way of getting values out of a set, and if we think about this, then it makes sense;
// so there's really no need for getting data out of a set. That's because if all values are unique, and if their order does not matter, then there is no point of retrieving values out of a set, all we need to know is whether a certain value is in the set or not;

// if your goal is to actually store values in order and then retrieve it, then the best use case, is to just use an array, you wouldn't use a set for that and so again, there's no need for getting values out of a set, because if you need it, then you will just use an array;

// so as he said in the beginning, sets are also iterables, and therefore we can loop over them;
for (const order of ordersSet) {
  console.log(order);
}

// SOLVE
// doesn't work i mean it didn't even entry the "for in" loop
for (const order in ordersSet) {
  console.log(order, ordersSet[order]);
}

// so in a normal code base, the main use case of sets is actually to remove duplicate values of arrays;
// EXAMPLE
const staff = ['Waiter', 'Chef', 'Waiter', 'Manager', 'Chef', 'Waiter']; // basically an iterable
// for some reason, we are interested in knowing only which different positions there are in our restaurant, or in other words, we would basically like to have a unique values of the array, so without all the duplicates;
console.log(staff);

// the conversion from a set to an array is pretty easy, because they're both iterables, so remember from earlier that the spread operator works on all iterables, so that includes sets
const staffUnique = [...new Set(staff)]; // pass iterable(array) into a set, and then unpack the entire set to create an array based on that set

// so if a certain data structure is an iterable, that means that we can use "spread operator" and "for of" loop
console.log(staffUnique);

// the same could even be done with counting how many different letters there are in a string, because string is also an iterable;
console.log('jonasschmedtmann'.length); // 16
console.log(new Set('jonasschmedtmann').size); // 11 unique characters

const teacher = new Set('Jonas');

console.log(teacher); // it looks familiar to what did with strings by using spread operator, but not similar, subtle difference, there are only unique values, so they aren't identically equal
console.log(teacher.size);

// So as a conclusion, sets are not intended to replace arrays at all, so whenever you need to store values in order, and that might contain duplicates, always just use arrays, that's also true when you need to really manipulate data, because arrays have access to a lot of great array methods, now sets have this very useful property of being unique and it's also very easy to interact with (sets) by using all of their straightforward methods, however they are not nearly as important as arrays, so keep sets in mind when you need to work with unique values, but besides(помимо, кроме того) that, you can just continue using arrays;
*/

/*
//////////////////////////////////////////////////////
// Looping Objects; Object Keys, Values and Entries

// Property Names
const properties = Object.keys(openingHours);
console.log(properties);

let openStr = `We are open on ${properties.length} days: `;

for (const day of properties) {
  openStr += `${day}, `;
}
console.log(openStr);

// Property Values
const values = Object.values(openingHours);
console.log(values);

// Entire Object
let entries = Object.entries(openingHours);
console.log(entries);

entries = entries.filter(x => {
  if (
    x.includes(undefined) ||
    x.includes(null) ||
    x.includes(0) ||
    x.includes('')
  )
    return false;

  return true;
});

console.log(entries);

// for (let x of entries) {
//   // x = x.filter(value => {
//   //   // FIXME what is this? value === 0?
//   //   if (value === 0) return true; // SOLVE because 0 is returned, and filter method interpreted like a falsy value
//   //   return value ?? false; // implicitly change type of a variable to boolean
//   // });
//   // console.log(x);

//   const [key, value] = x; // you could also do "const [key, {open, close}] = x;"
//   if (!value) continue; // SOLVE because you can't destructure object if it not an object at all, like in my case i had zero and null

//   const { open, close } = value;

//   console.log(`On ${key} we open at ${open} and close at ${close}`);
// }
*/

/*
///////////////////////////////////////////
// Optional Chaining (?.) ES2020 introduced optional chaining which checks if a certain property does not exist, then UNDEFINED is returned immediately;

if (restaurant.openingHours && restaurant.openingHours.mon)
  console.log(restaurant.openingHours.mon.open);
// restaurant.openingHours.mon && console.log(restaurant.openingHours.mon.open); // doesn't not exist
// restaurant.openingHours.fri && console.log(restaurant.openingHours.fri.open); // exists

// WITH optional chaining
console.log(restaurant.openingHours.mon?.open); // nullish concept, a property exists if it's not null and not undefined, so if it's zero or the empty string then it still exists of course;
console.log(restaurant.openingHours?.mon?.open);
console.log(restaurant.openingHours.deb?.open); // checks the property before question mark (?.), if it doesn't exist it should returns an UNDEFINED, otherwise it goes after question mark and do whatever it is, calling a method or just sets a property or returns one

// Example
const days = ['mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'sun'];

for (const day of days) {
  const open = restaurant.openingHours[day]?.open ?? 'closed';
  console.log(open);

  // open ?? console.log(`On ${day}, we open at ${open}`); // ?? console.log(`test`) // it's just trying to catch both undefined and null

  // open || console.log(`On ${day}, we open at ${open}`); // it's also try to catch 0 and empty string along with undefined and null

  // !open || console.log(`On ${day}, we open at ${open}`); // this is similar as beneath here, so it looks for falsy values, because we're inverting the operation "!open || ..." as if it was AND operator
  open && console.log(`On ${day}, we open at ${open}`); // stops when it finds falsy value
  open === 0 && console.log(`On ${day}, we open at ${open}`);
}

// Optional Chaining WITH Methods
console.log(restaurant.order?.(0, 0) ?? 'Method does not exist');
console.log(restaurant.orderRisotto?.(0, 0) ?? 'Method does not exist');

// Optional Chaining WITH Arrays
const users = [{ email: 'hello@jonas.io' }];

// SOLVE convert objects into an array key pairs
users.map((o) => {
    const [[key, value]] = Object.entries(o); // nested array
    console.log(key, value);
    return [key, value];
})

// const users = []; // Empty array

console.log(users[1]?.name ?? "User array empty or property doesn't exist");

// if (users.length > 0) console.log(users[0].name ?? "Property's value doesn't exist");
// else console.log('User array empty');
*/
///////////////////////////////////////////
// Enhanced Object literals

// ES6 enhanced object literals(SOLVE First enhancement) implicitly takes a variable name and set it to property name so to say
// ES6 writing methods(SOLVE Second enhancement) which allows us to instead of creating a property and set it to a function expression just write a method as if we would create one in a class (ES6)
// ES6 compute property names by using bracket notation, instead of having to write them out manually and literally. (SOLVE Third enhancement)

/*
///////////////////////////////////////////
// ES6 for of loop
const menu = [...restaurant.starterMenu, ...restaurant.mainMenu];

// we can still use the continue and break keywords
for (const item of menu) console.log(item);

// for (const array of menu.entries()) console.log(array);

for (const [key, value] of menu.entries()) {
  // menu.entries() is an Array Iterator(which has next method), which has array that contains the index with the value, so it obviously to use destructure assignment
  console.log(`${key + 1}: ${value}`);
}

const testArr = menu.entries();
console.log(testArr); // Array Iterator, so we have access to next, return, throw;
console.log(testArr.next().value); // value is an array, so actually it's simple to use destructure assignment
console.log(testArr.next().value);
console.log(testArr.next().value);

console.log(...menu.entries()); // get individual elements from Array Iterator object, similar to "for of" loop, spread operator i forgor that is used with entries method holyyyy
console.log([...menu.entries()]);
console.log(Object.fromEntries([...menu.entries()])); // convert to object

// polyfill for fromEntries method
console.log(
  menu.reduce((previousValue, currentValue, index) => {
    return Object.assign(previousValue, { [index]: currentValue });
  }, {})
); // almost forgot that reduce doesn't return an array, instead it returns computed previousValue variable which is an object literal essentially that initially gotten by the second operand and accumulates by the result of callback function

*/

/*
///////////////////////////////////////////
// 3 new logical assignment operators were introduced in ES2021
const rest1 = {
  name: 'Capri',
  // numGuests: 20,
  numGuests: 0,
  owner: null,
};

const rest2 = {
  name: 'La Piazza',
  owner: 'Giovanni Rossi',
};

// OR assignment operator
// rest2.numGuests = rest2.numGuests ? rest2.numGuests : 10;

// rest1.numGuests = rest1.numGuests || 10; // stops and returns when it finds truthy value in case OR operator, for ADD operator - falsy value
// rest2.numGuests = rest2.numGuests || 10; // stops and returns when it finds truthy value in case OR operator, for ADD operator - falsy value
// rest1.numGuests ||= 10;
// rest2.numGuests ||= 10;

// Nullish assignment operator (null or undefined)
rest1.numGuests ??= 10;
rest2.numGuests ??= 10; // stops and returns when it finds truthy value(so it didn't reassign variable), the nullish assignment operator will assign a value(10) to a variable if that exact variable is currently nullish(so null or undefined, not a zero and empty string which are exist).

// AND operator
// rest1.owner = rest1.owner && '<ANONYMOUS>';
// rest2.owner = rest2.owner && '<ANONYMOUS>';

// AND assignment operator
// so if i ever need to assign a value to a variable that is already defined, so that has a value that is currently truthy, then you can use logical and assignment operator

// SOLVE so if it exists, then it will simply be reassigned, but if it's not exist, then wouldn't do anything
rest1.owner &&= '<ANONYMOUS>'; // fixes the result of AND operator which assign to the property an undefined if it didn't find a property and instead of it actually didn't create a property with value, even though it had to do so
rest2.owner &&= '<ANONYMOUS>'; // so basically, what the logical AND assignment operator does is to assign a value to a variable if it is currently truthy, and it treats a zero and empty string as they are falsy value

console.log(rest1);
console.log(rest2);
 */

/*
////////////////////////////////////////////////////////////////////
// Nullish Coalescing Operator (??), which was introduced in ES2020

restaurant.numGuests = 0;

const guests = restaurant.numGuests || 10;
console.log(guests);

// Nullish: null and undefined. That's it, it does not include a zero or the empty string, so basically for the nullish coalescing operator, it is as if the zero and the empty string were not falsy values and were instead truthy values as well; it does work with the principle of nullish values, and all the truthy values will short circuit the evaluation, so only if it was the null or undefined then the second operand would be executed and returned;

const guestCorrect = restaurant.numGuests ?? 10; // it pretends that the empty string and zero are truthy values, but in the case of OR operator, it's not

console.log(guestCorrect);
*/

/*
// Summarize: the OR operator will return the first truthy value of all the operands, or simply the last value if all of them are falsy; On the other hand, the AND operator will return the first falsy value or the last value if all of them are truthy;
// and as FOR THE PRACTICAL APPLICATIONS, we can use the OR operator to set default values, and we can use the AND operator to execute code in the second operand if the first one is true
console.log('------ OR ------');

// there are three properties about logical operators: Use ANY data type, return ANY data type, short-circuiting(also call it short circuit evaluation)
// In case OR operator, short circuiting means that if the first value is a truthy value, it will immediately return that first value, then the other operand will not even be evaluated.
console.log(3 || 'Jonas'); // 3
console.log('' || 'Jonas'); // Jonas
console.log(true || 0); // true
console.log(undefined || null); // null

console.log(undefined || 0 || '' || 'Hello' || 23 || null); // Hello

restaurant.numGuests = 23;
const guests1 = restaurant.numGuests ? restaurant.numGuests : 10;
console.log(guests1);

const guests2 = restaurant.numGuests || 10;
console.log(guests2);

console.log('------ AND ------'); // works in the exact opposite way of the OR operator, so it's short circuits when the first value is falsy and then immediately returns that falsy value without even evaluating the second operand
// the And operator is only true if all the operands are true

console.log(0 && 'Jonas'); // if the first value is false, then it means that the entire result of the AND operation will already be false anyway, and so there is no need to even look at any of the other operands, result is 0

console.log(7 && 'Jonas'); // it is truthy, it means that the evaluation continues and then simply the last value is returned, so the "Jonas", it means that the evaluation could go even further

console.log('Hello' && 23 && null && 'Jonas'); // the result here is null, so when it finds a falsy value, it will immediately returns one, and therefore evaluation no longer needs to continue

// Practical example
// Many times we can use the AND operator to actually avoid an if statement, where all we want to do is to check if a certain property or value actually exists
if (restaurant.orderPizza) {
  restaurant.orderPizza('mushrooms', 'spinach');
}

// if the first operand is a falsy value, then the entire AND operation will be return this falsy value... otherwise it's gonna be the second operand, so it means is that the code above is similiar to what we wrote here
console.log(
  restaurant.orderPizza && restaurant.orderPizza('mushrooms', 'spinach')
);

*/

/*
// 1) Destructuring(with REST PATTERN)
// WITH ARRAYS

// REST PATTERN and REST PARAMETERS
// rest pattern actually does the opposite of the spread operator(it uses the same syntax as the spread operator, however to collect multiple elements and condense(сжимать) them into an array, so that's really the opposite of spread which unpacking an array, while rest is to pack elements into an array).

const arr = [1, 2, ...[3, 4]]; // so here we are using the spread syntax, and we know that this is the spread syntax, because we are using it on the right hand side of the assignment operator, so of the equal sign;

console.log(arr);

// however we can also use it on the left hand side of the assignment operator together with destructuring.
const [a, b, ...others] = [1, 2, 3, 4, 5]; // so here it is the rest syntax because it's on the left hand side of the assignment operator, so of the equal sign. It's called the rest because it will take the rest of the elements, so the remaining elements of the array and then put them into a new array and in this case, we call this array "others".

console.log(a, b, others); // basically the rest pattern collects the elements that are unused in the destructuring assignment

// Example where we will use the three dots on both sides of the assignment operator and it can only be one rest in any destructure assignment
const [pizza, , risotto, ...otherFood] = [
  ...restaurant.mainMenu,
  ...restaurant.starterMenu,
];

console.log(pizza, risotto, otherFood); // otherFood is an array

// WITH OBJECTS
const { sat: saturday = -1, ...weekdays } = restaurant.openingHours;
console.log(saturday, weekdays); // weekdays contains objects and it's an object itself

const Ivan = {
  name: 'Ivan',
  surName: 'Skinder',
};

const { ...person } = { ...Ivan };
const { ...person2 } = { name: 'Pasha', surName: 'Skinder' };

console.log(person); // works for object too(rest pattern)
person.name = 'Vasya';

console.log(person);
console.log(Ivan);
console.log(person2);

let number1 = 4;
let number2 = 15;
console.log(number1, number2);
[number1, number2] = [number2, number1]; // switching variables by using destructure assignment, and that's works with square brackets not for curly braces
console.log(number1, number2);

const obj = { a: 1, b: 2, c: { d: 3, e: 4 } };
({ a: number1 = 999, b: number2 = 999 } = obj);
console.log(number1, number2);

// 2) Functions(with REST PATTERN)
// WITH ARRAYS
const add = function (...array) {
  // https://stackoverflow.com/questions/767486/how-do-i-check-if-a-variable-is-an-array-in-javascript
  if (array[0] instanceof Array) {
    // SOLVE make sure that first value is an array
    return array[0].reduce((previous, current) => {
      return previous + current;
    });
  } else {
    return array.reduce((previous, current) => {
      return previous + current;
    });
  }
};

// SOLVE rest pattern is still an array, in case with functions, but in destructuring assignment it will be either array or object, depending on what we are currently using
const testObj = {
  a: 2,
  b: 3,
  c: 4,
};

console.log(add(2, 3));
// console.log(add(5, 3, 7, 2));
// console.log(add(8, 2, 5, 3, 2, 1, 4));
console.log(add([1, 2, 3])); // array.reduce - keep in mind that
add(...testObj); // so we can only create objects based on existing object, and that's all (-_-'), and because it's not iterable, you cannot pass object into a function by using spread operator as we did with arrays, strings, also we have maps and sets but we don't even know what exactly they are LULE. SOLVE Uncaught TypeError: Found non-callable @@iterator

const x = [23, 5, 7];
add(...x);

restaurant.orderPizza('mushrooms', 'onion', 'olives', 'spinach');
restaurant.orderPizza('mushrooms');

*/

/*
// Spread Operator(building new arrays based on previous one and also passing multiple values into a function, and in both cases, we use the spread operator to expand an array into individual elements; NOTE: spread operator doesn't work with objects when we would try to use it to pass elements into a function)
const arr = [7, 8, 9];
const badNewArray = [1, 2, arr[0], arr[1], arr[2]];
console.log(badNewArray);

const newArray = [1, 2, ...arr];
console.log(newArray);

console.log(...newArray); // it logged the individual elements of the array.

const newMenu = [...restaurant.mainMenu, 'Gnocci'];
console.log(newMenu);


//https://www.freecodecamp.org/news/how-to-clone-an-array-in-javascript-1d3183468f6a/
// SOLVE it receives any iterable object and turn it into an array
let string = "test";
console.log(Array.from(string));
console.log([...string]);

// Copy arrays(shallow copy), and it's a bit similar to object.assign that we used in the previous section
const mainMenuCopy = [...restaurant.mainMenu];
console.log(mainMenuCopy);

// Join two arrays(or more of course) together by using the spread operator
const menu = [...restaurant.mainMenu, ...restaurant.starterMenu];
console.log(menu);

// Iterables are arrays, strings, maps and sets, but NOT objects
const str = 'Jonas';
const letters = [...str, ' ', 'S.'];
console.log(letters);
console.log(...str);
//console.log(`${...str}`); // that's not a place where it expects multiple values separated by a comma

const ingredients = [
  // prompt("Let's make pasta! Ingredient 1?"),
  // prompt('Ingredient 2?'),
  // prompt('Ingredient 3?'),
];

console.log(ingredients);

restaurant.orderPasta(...ingredients);
//restaurant.orderPasta(ingredients[0], ingredients[1], ingredients[2]); // old way to pass values into a function(horrible one)

// Objects: since ES2018 works as well also for objects, even though objects are not iterables.
const newRestaurant = {
  foundedIn: 1998,
  ...restaurant,
  founder: 'Giuseppe',
};

console.log(newRestaurant);
// Shallow copy of the original object, restaurant in this case, and modified name of the restaurant;
// const restaurantCopy = Object.assign({}, restaurant);
const restaurantCopy = { ...restaurant };

const {
  starterMenu: deb1,
  mainMenu: deb2,
  name: naimenovanie,
  location: loc,
  ...restaurantCopy2
} = { ...restaurant };

// restaurantCopy.name = 'Ristorante Roma';
// console.log(restaurantCopy.name);
console.log(restaurant.name);
console.log(restaurantCopy2);
console.log(deb1);
console.log(deb2);
console.log(loc);
console.log(naimenovanie);


// FIXME try to switch values using destructure assignment which are wrapped by curly braces
// SOLVE only works with square brackets
const aObj = {
  first: 1,
  second: 2,
  three: 3,
};

let { first, second } = aObj;

console.log(first, second);
[first, second] = [second, first];
console.log(first, second);
*/

/*
// Destructuring Objects

// passing object to a method
restaurant.orderDelivery({
  time: '22:30',
  address: 'Via del Sole, 21',
  mainIndex: 2,
  starterIndex: 2,
});

restaurant.orderDelivery({
  address: 'Via del Sole, 21',
  starterIndex: 1,
});


const { name, categories, openingHours } = restaurant;
console.log(name, categories, openingHours);

// Renaming variables
const {
  name: restaurantName,
  openingHours: hours,
  categories: tags,
} = restaurant;
console.log(restaurantName, hours, tags);

// Default values + renaming variable
const { menu = [], starterMenu: starters = [] } = restaurant;
console.log(menu, starters);

// Mutating variables
let number1 = 111;
let number2 = 999;
const obj = { a: 23, b: 7, c: 14 };

// override these two inital variables, but in order to do it
// we had to wrap this destructuring assignment into parenthesis;
({ a: number1 = 2, b: number2 = 2 } = obj);
console.log(number1, number2);

// Nested Objects
// const {
//   fri: { open: o = 0, close: c = 0 },
// } = openingHours;
// console.log(o, c);
*/

/*
// Destructuring Arrays
const arr = [2, 3, 4];

const a = arr[0];
const b = arr[1];
const c = arr[2];

const [x, y, z] = arr;
console.log(x, y, z);
console.log(arr);

// receive 2 values(first and third elements) from an array
let [main, , secondary] = restaurant.categories;
console.log(main, secondary);

// Switching variables
// const temp = main;
// main = secondary;
// secondary = temp;
// console.log(main, secondary);

// Switching with destructuring
[main, secondary] = [secondary, main];
console.log(main, secondary);

// Receive 2 values from a function
const [starterElement, mainElement] = restaurant.order(2, 0);
console.log(starterElement, mainElement);

// Nested destructuring
const nested = [2, 4, [5, 6]];
const [first, , [third, fourth]] = nested;
console.log(first, third, fourth);

// Default values
const [p = -1, q = -1, r = -1] = [8]; // 8 -1 -1
const [o, u, i] = [9]; // 9 undefined undefined
console.log(o, u, i); // undefined if it didn't find a value
console.log(p, q, r); // default values will be assigned(-1 in this case) if it didn't find a value
console.log(p); // 8
 */
