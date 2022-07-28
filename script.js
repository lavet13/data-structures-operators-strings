'use strict';

// Data needed for a later exercise
const flights =
  '_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30';

const openingHours = {
  thu: {
    open: 12,
    close: 22,
  },
  fri: {
    open: 11,
    close: 23,
  },
  sat: {
    open: 0, // Open 24 hours
    close: 24,
  },
};

// Data needed for first part of the section
const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],
  // openingHours: openingHours, // before ES6 we would have to write like this

  // ES6 enhanced object literals, so we took that opening hours object and put it here and it is created a property name with exactly that variable name
  openingHours, // so with enhanced object literals you can easily write this way

  // order: function (starterIndex, mainIndex) {
  //   return [(this.starterMenu[starterIndex], this.mainMenu[mainIndex])];
  // },

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
///////////////////////////////////////////
// Enhanced Object literals

/*
///////////////////////////////////////////
// ES6 for of loop

const menu = [...restaurant.starterMenu, ...restaurant.mainMenu];

// we can still use the continue and break keywords
for (const item of menu) console.log(item);

// for (const array of menu.entries()) console.log(array);

for (const [key, value] of menu.entries()) {
  // Array Iterator is a menu.entries(), which has arrays that contain the index with the value in the array element itself, so it obviously to use destructure assignment
  console.log(`${key + 1}: ${value}`);
}

console.log(...menu.entries()); // get individual elements from Array Iterator object, similar to "for of" loop
console.log([...menu.entries()]);
console.log(Object.fromEntries([...menu.entries()])); // convert to object
*/

/*
///////////////////////////////////////////
// 3 new logical assignment operators were introduced in ES2021

const rest1 = {
  name: 'Capri',
  // numGuests: 20,
  numGuests: 0,
};

const rest2 = {
  name: 'La Piazza',
  owner: 'Giovanni Rossi',
};

// OR assignment operator
// rest2.numGuests = rest2.numGuests ? rest2.numGuests : 10;

// rest1.numGuests = rest1.numGuests || 10; // stops when it finds truthy value in case OR operator, for ADD operator - falsy value
// rest2.numGuests = rest2.numGuests || 10; // stops when it finds truthy value in case OR operator, for ADD operator - falsy value
// rest1.numGuests ||= 10;
// rest2.numGuests ||= 10;

// Nullish assignment operator (null or undefined)
rest1.numGuests ??= 10;
rest2.numGuests ??= 10; // in a nutshell, the nullish assignment operator will assign a value to a variable if that exact variable is currently nullish(so null or undefined, not a zero and empty string).

// AND assignment operator
// rest1.owner = rest1.owner && '<ANONYMOUS>';
// rest2.owner = rest2.owner && '<ANONYMOUS>';

// so if i ever need to assign a value to a variable that is already defined, so that has a value that is currently truthy, then you can use logical add assignment operator
rest1.owner &&= '<ANONYMOUS>'; // fixes the result of AND operator which returns an undefined if it didn't find a property and instead of it actually didn't do anything lule
rest2.owner &&= '<ANONYMOUS>'; // so basically, what the logical and assignment operator does is to assign a value to a variable if it is currently truthy;

console.log(rest1);
console.log(rest2);
*/

/*
////////////////////////////////////////////////////////////////////
// Nullish Coalescing Operator (??), which was introduced in ES2020

restaurant.numGuests = 0;

const guests = restaurant.numGuests || 10;
console.log(guests);

// Nullish: null and undefined. That's it, it does not include a zero or the empty string, so basically for the nullish coalescing operator, it is as if the zero and the empty string were not falsy values and were instead truthy values as well; it does work with the principle of nullish values, and all the nullish values will short circuit the evaluation, so only if it was the null or undefined then the second operand would be executed and returned;
const guestCorrect = restaurant.numGuests ?? 10; // it pretends that the empty string and zero are truthy values, but in the case of OR operator, it's not
console.log(guestCorrect);
*/

/*
// Summarize: the OR operator will return the first truthy value of all the operands, or simply the last value if all of them are falsy; On the other hand, the AND operator will return the first falsy value or the last value if all of them are truthy;
// and as FOR THE PRACTICAL APPLICATIONS, we can use the OR operator to set default values, and we can use the AND operator to execute code in the second operand if the first one is true
console.log('------ OR ------');

// there are three properties about logical operators: Use ANY data type, return ANY data type, short-circuiting(also call it short circuit evaluation)
// In case OR operator, short circuiting means that if the first value is a truthy value, it will immediately return that first value, so if the first operand is truthy value in the OR operator, then the other operand will not even be evaluated.
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

// if the first operand is a falsy value, then the entire AND operation will actually be undefined(in the case of objects)... otherwise it's gonna be the second operand, so it means is that the code above is similiar to what we wrote here
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
({ asdf: number1 = 999, b: number2 = 999 } = obj);
console.log(number1, number2);

// 2) Functions(with REST PATTERN)
// WITH ARRAYS
const add = function (...array) {
  console.log(array);
  return array.reduce((previous, current) => {
    return previous + current;
  });
};

// SOLVE rest pattern is still an array, in case with functions, but in destructuring assignment it will be either array or object, depending on what we are currently have
const testObj = {
  a: 2,
  b: 3,
  c: 4,
};

// console.log(add(2, 3));
// console.log(add(5, 3, 7, 2));
// console.log(add(8, 2, 5, 3, 2, 1, 4));
// console.log(add([1, 2, 3]));
add(...testObj); // so we can only create objects based on existing object, and that's all (-_-'), and because it's not iterable, you cannot pass object into a function by using spread operator as we did with arrays, strings, also we have maps and sets but we don't even know what exactly they are LULE, WITH OBJECTS DOESN'T WORK AT ALL

const x = [23, 5, 7];
add(...x);

restaurant.orderPizza('mushrooms', 'onion', 'olives', 'spinach');
restaurant.orderPizza('mushrooms');

*/

/*
// Spread Operator(building new arrays based on previous one and also passing multiple values into a function, and in both cases, we use the spread operator to expand an array into individual elements)
const arr = [7, 8, 9];
const badNewArray = [1, 2, arr[0], arr[1], arr[2]];
console.log(badNewArray);

const newArray = [1, 2, ...arr];
console.log(newArray);

console.log(...newArray); // it logged the individual elements of the array.

const newMenu = [...restaurant.mainMenu, 'Gnocci'];
console.log(newMenu);

//
//https://www.freecodecamp.org/news/how-to-clone-an-array-in-javascript-1d3183468f6a/
//
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
  ...restaurantCopy2
} = { ...restaurant };

restaurantCopy.name = 'Ristorante Roma';
console.log(restaurantCopy.name);
console.log(restaurant.name);
console.log(restaurantCopy2);
console.log(deb1);
console.log(deb2);
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
let a = 111;
let b = 999;
const obj = { a: 23, b: 7, c: 14 };

// override these two inital variables, but in order to do it
// we had to wrap this destructuring assignment into parenthesis;
({ a = 2, b = 2 } = obj);
console.log(a, b);

// Nested Objects
const {
  fri: { open: o = 0, close: c = 0 },
} = openingHours;
console.log(o, c);
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
const [p = -1, q = -1, r = -1] = [8];
const [o, u, i] = [9];
console.log(o, u, i);
console.log(p, q, r);
console.log(p);
*/
