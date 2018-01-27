'use strict';

// Zadanie I

var hello = 'Hello';
var world = 'World';

var sayHello = hello + ' ' + world;

// Zadanie II

var multiply = function multiply(a) {
	var b = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 1;
	return a * b;
};

//  Zadanie III

var avarange = function avarange() {
	for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
		args[_key] = arguments[_key];
	}

	var sum = 0;
	args.forEach(function (args) {
		sum = sum + args;
	});
	return sum / args.length;
};

// Zadanie IV

var grades = [1, 5, 5, 5, 4, 3, 3, 2, 1];

var getAverange = avarange.apply(undefined, grades);

// Zadanie V

var mixedData = [1, 4, 'Iwona', false, 'Nowak'];

var firstName = mixedData[2],
    lastName = mixedData[4];


console.log(firstName, lastName);
