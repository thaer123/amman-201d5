//javascript Hoisting
//var msgExpression
showMsg();

// console.log('from here',x);
// var x = 10;

console.log('call function',msgExpression);
// msgExpression(); //msgExpression is not a function

globalFunc();

function showMsg() {
  console.log("I am the showMsg function");
}

var msgExpression = function() {
  console.log("I am the msgExpression function expression");
};

msgExpression();
//global scope
var name = "Dan";

function globalFunc() {
  console.log("I can be called anywhere");
}

//function scope
var privateVar;
function scopyFunc(doggy) {
  function privateFunc() {
    privateVar = "woof!";
    return doggy + " says " + privateVar;
  }
  console.log(privateVar); //privateVar is not defined
  console.log("doggy is only defined inside scopyFunc: " + doggy);
  return privateFunc();
}

// privateFunc();
console.log(scopyFunc("Fido"));
console.log(privateVar); //privateVar is not defined

x=10;
console.log(x);
var x;
// console.log();

//object context
var teacherBot = {
  first: "Razan",
  last: "Quran",
  age: 28,
  speak: function() {
    return "Hello humanoid, I am " + this.first + " " + this.last;
  }
};

console.log(teacherBot.age); //28
console.log(teacherBot.speak()); //'Hello humanoid, I am Razan Quran'
// age; //age is not defined


// SyntaxError: usually typos
// var b = 9;
// var a = b;

var arr = [1,2,'hello',{name:'razan',lname:'Quran'}];
var someObj = [ {a: 10,b: 9} ];
someObj.push(20);
console.log(someObj);
console.log(someObj[0].a);

// someObj = [{a: 10,b: 9}, 20]
