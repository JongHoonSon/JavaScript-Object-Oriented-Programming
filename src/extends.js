class Person {
  constructor(name, first, second, third) {
    this.name = name;
    this.first = first;
    this.second = second;
    this.third = third;
    console.log("constructor");
  }
  sum() {
    return "prototype : " + (this.first + this.second + this.third);
  }
}

class PersonPlus extends Person {
  constructor(name, first, second, third, fourth) {
    super(name, first, second, third);
    this.fourth = fourth;
  }
  sum() {
    return super.sum() + this.fourth;
  }
  avg() {
    return (this.first + this.second) / 2;
  }
}

var lee = new PersonPlus("lee", 10, 20, 30);
console.log("lee.sum()", lee.sum());
console.log("lee.avg()", lee.avg());
