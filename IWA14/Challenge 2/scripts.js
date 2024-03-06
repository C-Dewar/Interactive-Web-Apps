// script.js

function add (a, b) {
	return a + b;
}

function multiply(a, b){
	return a * b 
}

function internal(){
	const added = this.add(this.internal.a, this.internal.b)
	const multiplied = this.multiply(added, this.internal.c)
	console.log(multiplied)
	return multiplied
}


// Not allowed to change below this

const example1 = {
	internal: {
		a: 2,
		b: 4,
		c: 8,
	},
	add,
	multiply,
  calculate: internal
}

const example2 = {
	internal: {
		a: 2,
		b: 2,
		c: 3,
	},
	add,
	multiply,
  calculate: internal
}

example1.calculate()
example2.calculate()


// Not 100% sure if I'm allowed to add code at the end of the Untouchable code section. I might have cut a corner here without intending to.
// console.log(example1.calculate());
// console.log(example2.calculate());
