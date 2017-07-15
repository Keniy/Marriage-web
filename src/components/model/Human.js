"use strict"

import Hero from './Hero.js'
class Human extends Hero.Hero {
	constructor(name) {
		// this.name = name;
		super(name, name);

	}

	rescue() {
		console.log('My name is ' + this.name);
		console.log('I am rescue by ' + this.name);
	}
}

let human = new Human('Johnny');
human.rescue();
