function Person(name, first, second, third) {
  this.name = name;
  this.first = first;
  this.second = second;
  this.third = third;
}

// Person으로 생성된 객체는 모두 sum 함수를 사용할 수 있도록함
Person.prototype.sum = function () {
  // prototype의 값을 변경하면 모든 객체에 적용됨
  return "prototype : " + (this.first + this.second + this.third);
};

var lee = new Person("lee", 10, 20, 30);
// 한 객체의 메소드만 변경할 수 있음, 나머지 객체는 prototype 적용
lee.sum = function () {
  return "this : " + (this.first + this.second + this.third);
};
var park = new Person("park", 10, 10, 10);
console.log("lee.sum()", lee.sum());
console.log("park.sum()", park.sum());
