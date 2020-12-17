class Hello {
	name: string = "World";
	greetingMsg(): string {
		return "Hello " + this.name;
	}
}

let a: Hello = new Hello();
console.log(a.greetingMsg());
