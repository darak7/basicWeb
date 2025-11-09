

function fizzBuzz(n) {
	if (Number.isNaN(n)) return 'Entrada no válida';
	if (n % 3 === 0 && n % 5 === 0) return 'FizzBuzz';
	if (n % 3 === 0) return 'Fizz';
	if (n % 5 === 0) return 'Buzz';
	return String(n);
}

function parseInputToNumber(input) {
	if (input === null) return NaN; 
    	const num = Number(input);
	return Number.isFinite(num) ? num : NaN;
}


if (typeof window !== 'undefined' && typeof prompt === 'function') {
	const raw = prompt('Introduce un número:');
	const num = parseInputToNumber(raw);
	if (Number.isNaN(num)) {
		alert('Entrada no válida. Por favor introduce un número.');
	} else {
		alert(fizzBuzz(num));
		console.log('Entrada:', raw, '=>', fizzBuzz(num));
	}
} else if (typeof process !== 'undefined' && process.versions && process.versions.node) {
	
	const arg = process.argv[2];
	if (arg !== undefined) {
		const num = parseInputToNumber(arg);
		if (Number.isNaN(num)) {
			console.log('Entrada no válida:', arg);
		} else {
			console.log(fizzBuzz(num));
		}
	} else {
		
		const readline = require('readline');
		const rl = readline.createInterface({ input: process.stdin, output: process.stdout });
		rl.question('Introduce un número: ', (answer) => {
			const num = parseInputToNumber(answer);
			if (Number.isNaN(num)) {
				console.log('Entrada no válida. Por favor introduce un número.');
			} else {
				console.log(fizzBuzz(num));
			}
			rl.close();
		});
	}
}


if (typeof module !== 'undefined' && module.exports) {
	module.exports = { fizzBuzz, parseInputToNumber };
}

