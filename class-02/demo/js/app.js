'use strict';

//string. boolean, numeric
var uname = 'my name is razan';
var myNumber = 2; //2.5
var bool = true; // false

// console.log('type of uname is ',typeof(uname));
// console.log('type of myNumber is ',typeof myNumber);
// console.log('type of bool is ',typeof bool);

// var answer1 = confirm('Are you ready ?');
// console.log('answer1 is ',answer1);

// if (answer1 == true) {
//     console.log('GREAT');
// } else {
//     console.log('Go to sleep');
// }

// == value
// === value & datatype

// logical operaters
// AND OR NOT
// T AND T -> T
// T AND F -> F
// T OR T -> T
// T OR F -> T
// F OR F -> F

var myBool = true;
var anotherBool = false;
var thirdBool = true;



// if(myBool === true) {
//     console.log('myBool is true');
// } else {
//     console.log('myBool is false');
// }

//AND - both conditions have to be true
if(myBool && thirdBool) {
    console.log('myBool AND thirdBool were true');
} else if(myBool || anotherBool) {
    console.log('myBool OR anotherBool was true');
} else if (thirdBool) {
    console.log('myBool and anotherBool were false, but the thirdBool is true')
} else {
    console.log('all of them are false!!')
}


// Switch statement -> perform different actions on different conditions

var color = prompt('what\'s your fav color ?');
// var color2 = color.toLowerCase();
// console.log(color2);
//red Red REd -> red
switch(color.toLowerCase()) {
    case 'red':
        console.log('you fav color is red');
        break;
    case 'blue':
        console.log('you fav color is blue');
        break
    default:
        console.log('your fav color is not my list');
}