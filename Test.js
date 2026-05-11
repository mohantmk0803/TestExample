const os1 = require("os");
console.log(os1.platform());
//console.log(os1);

class Animal {
  constructor(name) {
    this.name = name;
  }
}

class Dog extends Animal {
  // no constructor

  greet() {
    console.log("Hello, my name is " + this.name);
  }
}

const d = new Dog("Max");
const s1 = new dog();
console.log(s1.name);
console.log(d.name); // ✅ Max
