// console.log('Class04 Demo!!');


// what is a function?

// function declaration (function follwed by the func name)

function sayHello() {
    console.log('hello world');
}

// invoke or call a function
sayHello();

// passing data in function (Parameter + Argument)
function sayBye(name) { // parameters
    console.log('good bye ',name);
}
sayBye('Razan'); // arguments
sayBye('Ahmad');

// return statement
function getFullName(fName,lName) {
    var FullName = fName + ' ' + lName;
    // var FullName = `${fName} ${lName}`;
    return FullName;
    // console.log('helloooooooooo'); // will never be executed
}

var result = getFullName('Razan','Quran');
console.log(result);

// So, now why do we need Functions? /reuse the code
function multiply(n1,n2) {
    var result = n1*n2;
    // console.log(result);
    return result;
}
var mresult1 = multiply(2,3);
var mresult2 = multiply(4,5);
var mresult3 =multiply(6,7);
console.log(mresult1,mresult2,mresult3)

// Returning Multiple Values
function square(length) {
    var area = length * length;
    var ocean = 4 * length;
    var result = [area,ocean];
    return result;
    // return ocean;
}
var mySquare = square(5);
console.log('Square area= ', mySquare[0]);

sayHi();
// Function Declaration
function sayHi() {
    console.log('hello Dec');
}

// Function Expression
var sayHi2 = function() {
    console.log('hello Exp');
}
sayHi2();

// IIFEs: Immediately-Invoked Function Expressions
var sayHi3 = ( function () {
    var uName = 'Razan'
    console.log('hello IIFEs');
    uName = 'Eman';
}) ();

// console.log(uName);



//local vs global scope
// 1- global variables (declared outside of any function) are available anywhere
// 2- local variables (declared inside a function) are only available inside the function.


var globalVar = 'universal';

function scoper(param) {
	var localVar = 'I like my privacy.';

	console.log('inside the function we can see param = ' + param);
	console.log('we can also see localVar = ' + localVar);
	console.log('and we can see globalVar = ' + globalVar);

	for (var i = 0; i < 3; i++) {
        var x =6;
		console.log('the value of i in the loop is ' + i);
	}
    console.log('x=',x);
    console.log('can we see i outside the loop? ' + i);
    return localVar;
}

var res = scoper('argument');
console.log('rrrrrrrrrrr',res);

// console.log('can we see i outside the function? ' + i);
console.log('globally we can see globalVar: ' + globalVar);
// console.log('but not localVar: ' + localVar);
console.log('or param: ' + param);