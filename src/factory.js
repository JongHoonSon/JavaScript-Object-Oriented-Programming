// 생성자를 이용해서 객체 생성
var lee = new Person("lee", 10, 20, 30);
var park = new Person("park", 10, 10, 10);
console.log("lee.sum()", lee.sum());
console.log("park.sum()", park.sum());

// 새로운 Date 객체를 new로 생성하고, d1에 저장
var d1 = new Date("2020-02-22");
console.log("d1.getFullYear()", d1.getFullYear());
console.log("d1.getMonth()", d1.getMonth());

// JS에서 생성자는 함수로 선언하고 new를 붙혀 사용함
function Person(name, first, second, third) {
  this.name = name;
  this.first = first;
  this.second = second;
  this.third = third;
  this.sum = function () {
    return this.first + this.second + this.third;
  };
}
console.log("Person()", Person());
console.log("new Person()", new Person());
