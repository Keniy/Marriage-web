"use strict"

class Hero {
	constructor(name, age) {
		this.name = name;
		this.age = age;
	}

	sayName() {
		console.log('I am, ' + this.name);
	}

	sayAge() {
		console.log('and i am ' + this.age + 'year old');
	}
}

let h = new Hero('Super Man', 28);
h.sayName();
h.sayAge();