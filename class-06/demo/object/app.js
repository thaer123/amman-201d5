'use strict';

// person has properties like name, birthYear, weight and methods (walk() talk() eat())

var person = {
    name: 'Razan',
    birthYear: 1992,
    sayHi: function(userName) {
        console.log(`hi ${userName}`);
    }
}

console.log(person);
// add a new property -> Bracket notation
person['weight'] = 56;

console.log(person);

// change the value of a property -> Dot notation
person.name = 'Basma';
console.log(person);

person['name'] = 'Dana';
console.log(person);

person.sayHi('Ahmad');

console.table(person);
