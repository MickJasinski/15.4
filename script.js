// Zadanie I

const hello = 'Hello';
const world = 'World';

const sayHello = (`${hello} ${world}`);


// Zadanie II

const multiply = (a, b = 1) => a * b;


//  Zadanie III

const avarange = (...args) => {
	let sum = 0;
	args.forEach(args => {
		sum = sum + args;
	});
	return sum / args.length;
}


// Zadanie IV

const grades = [1, 5, 5, 5, 4, 3, 3, 2, 1];

const getAverange = avarange(...grades);


// Zadanie V

const mixedData = [1, 4, 'Iwona', false, 'Nowak'];

const [ , , firstName, , lastName] = mixedData;


console.log(firstName, lastName);


