// 현재는 객체가 생성될 때 마다 sum이라는 메소드도 함께 생성됨 (자원 낭비)
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
