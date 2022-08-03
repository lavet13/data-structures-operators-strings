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

//////////////////////////////////////////////////////
// Sets (ESX, two more data structures were finally introduced and that are sets and maps(in another lecture))
// a set is basically just a collection of unique values, so that means that a set can never have any duplicates.

// NOTE: so we can only create objects based on existing object, and that's all (-_-'), and because it's not iterable, you cannot pass object into a function by using spread operator as we did with arrays, strings

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
console.log(ordersSet.size);
console.log(ordersSet.has('Pasta'));
console.log(ordersSet.has('Bread'));
ordersSet.add('Garlic Bread');
ordersSet.add('Garlic Bread'); // the second was ignored
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

// big use case for them, so in a normal code base, the main use case of sets is actually to remove duplicate values of arrays;
// EXAMPLE
const staff = ['Waiter', 'Chef', 'Waiter', 'Manager', 'Chef', 'Waiter']; // basically an iterable
// for some reason, we are interested in knowing only which different positions there are in our restaurant, or in other words, we would basically like to have a unique values of the array, so without all the duplicates;
console.log(staff);

// the conversion from a set to an array is pretty easy, because they're both iterables, so remember from earlier that the spread operator works on all iterables, so that includes sets
const staffUnique = [...new Set(staff)]; // pass iterable(array) into a set, and then unpack the entire set to create an array based on that set, so these elements from the set would be unpacked as if they were an individual elements separated by commas
// so if a certain data structure is an iterable, that means that we can use "spread operator" and "for of" loop for example, and also in a specific situation we would use the rest pattern along with spread operator maybe
console.log(staffUnique);

// the same could even be done with counting how many different letters there are in a string, because string is also an iterable;
console.log('jonasschmedtmann'.length); // 16
console.log(new Set('jonasschmedtmann').size); // 11 unique characters

const teacher = new Set('Jonas');

console.log(teacher); // it looks familiar to what did with strings by using spread operator
console.log(teacher.size);

// So as a conclusion, sets are not intended to replace arrays at all, so whenever you need to store values in order, and that might contain duplicates, always just use arrays, that's also true when you need to really manipulate data, because arrays have access to a lot of great array methods, now sets have this very useful property of being unique and it's also very easy to interact with sets by using all of their straightforward methods, however they are not nearly as important as arrays, so keep sets in mind when you need to work with unique values, but besides(помимо, кроме того) that, you can just continue using arrays;

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
const entries = Object.entries(openingHours);
console.log(entries);

for (let x of entries) {
  // actually why did i write this
  x = x.filter(value => {
    if (value === 0) return true;
    return value ?? false;
  });
  // no idea...

  const [key, value] = x; // you could also do "const [key, {open, close}] = x;"
  if (!value) continue;

  const { open, close } = value;

  console.log(`On ${key} we open at ${open} and close at ${close}`);
}
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
console.log(restaurant.openingHours.deb?.open); // checks the property before question mark (?.), if it doesn't exist it should returns an UNDEFINED, as if it was short circuiting, otherwise it goes after question mark and do whatever it is, calling a method or just sets a property or returns one

// Example
const days = ['mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'sun'];

for (const day of days) {
  const open = restaurant.openingHours[day]?.open ?? 'closed';
  console.log(open);

  // open ?? console.log(`On ${day}, we open at ${open}`); // ?? console.log(`test`) // it's just trying to catch both undefined and null

  // open || console.log(`On ${day}, we open at ${open}`); // it's also try to catch 0 and empty string along with undefined and null

  // !open || console.log(`On ${day}, we open at ${open}`); // this is similar as beneath here
  open && console.log(`On ${day}, we open at ${open}`);
  open === 0 && console.log(`On ${day}, we open at ${open}`);
}

// Optional Chaining WITH Methods
console.log(restaurant.order?.(0, 0) ?? 'Method does not exist');
console.log(restaurant.orderRisotto?.(0, 0) ?? 'Method does not exist');

// Optional Chaining WITH Arrays
const users = [{ email: 'hello@jonas.io' }];
// const users = []; // Empty array

console.log(users[1]?.name ?? "User array empty or property doesn't exist");

// if (users.length > 0) console.log(users[0].name ?? "Property doesn't exist");
// else console.log('User array empty');
*/
///////////////////////////////////////////
// Enhanced Object literals

// ES6 enhanced object literals(SOLVE First enhancement)
// ES6 writing methods(SOLVE Second enhancement) which allows us to instead of creating a property and set it to a function expression just write a method as if we would create one in a class (ES6)
// ES6 compute property names instead of having to write them out manually and literally. (SOLVE Third enhancement)

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
rest2.numGuests ??= 10; // in a nutshell, the nullish assignment operator will assign a value to a variable if that exact variable is currently nullish(so null or undefined, not a zero and empty string).

// AND operator
// rest1.owner = rest1.owner && '<ANONYMOUS>';
// rest2.owner = rest2.owner && '<ANONYMOUS>';

// AND assignment operator
// so if i ever need to assign a value to a variable that is already defined, so that has a value that is currently truthy, then you can use logical add assignment operator
// FIXME try to create a property with value of undefined or null, test it
// SOLVE so if it exists and also has a value of null or undefined it will simply be reassigned or won't do anything
rest1.owner &&= '<ANONYMOUS>'; // fixes the result of AND operator which returned an undefined if it didn't find a property and instead of it actually didn't create a property with value, even though it had to do so
rest2.owner &&= '<ANONYMOUS>'; // so basically, what the logical AND assignment operator does is to assign a value to a variable if it is currently truthy

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

// SOLVE rest pattern is still an array, in case with functions, but in destructuring assignment it will be either array or object, depending on what we are currently using
const testObj = {
  a: 2,
  b: 3,
  c: 4,
};

// console.log(add(2, 3));
// console.log(add(5, 3, 7, 2));
// console.log(add(8, 2, 5, 3, 2, 1, 4));
// console.log(add([1, 2, 3]));
add(...testObj); // so we can only create objects based on existing object, and that's all (-_-'), and because it's not iterable, you cannot pass object into a function by using spread operator as we did with arrays, strings, also we have maps and sets but we don't even know what exactly they are LULE.

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
const [p = -1, q = -1, r = -1] = [8]; // 8 -1 -1
const [o, u, i] = [9]; // 9 undefined undefined
console.log(o, u, i); // undefined if it didn't find a value
console.log(p, q, r); // default values will be assigned(-1 in this case) if it didn't find a value
console.log(p); // 8
 */
