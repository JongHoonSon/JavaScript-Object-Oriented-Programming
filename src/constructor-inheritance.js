function Person(name, first, second, third) {
  this.name = name;
  this.first = first;
  this.second = second;
  this.third = third;
}

Person.prototype.sum = function () {
  return this.first + this.second + this.third;
};

function PersonPlus(name, first, second, third, fourth) {
  Person.call(this, name, first, second);
  this.fourth = fourth;
}

PersonPlus.prototype.avg = function () {
  retrun(this.first + this.second + this.third + this.fourth) / 4;
};

var lee = new PersonPlus("lee", 10, 20, 30, 40);
console.log("lee.sum()", lee.sum());
console.log("lee.avg()", lee.avg());
