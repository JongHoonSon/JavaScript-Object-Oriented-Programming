function Person(name, first, second, third) {
  this.name = name;
  this.first = first;
  this.second = second;
  this.third = third;
  this.sum = function () {
    return this.first + this.second + this.third;
  };
}

var lee = new Person("lee", 10, 20, 30);
var park = new Person("park", 10, 10, 10);
console.log("lee.sum()", lee.sum());
console.log("park.sum()", park.sum());
