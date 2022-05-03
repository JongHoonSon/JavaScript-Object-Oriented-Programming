var lee = {
  name: "lee",
  first: 10,
  second: 20,
  third: 30,
  sum: function () {
    return this.first + this.second + this.third;
  },
};

var park = {
  name: "park",
  first: 10,
  second: 10,
  third: 10,
  sum: function () {
    return this.first + this.second + this.third;
  },
};
console.log("lee.sum()", lee.sum());
console.log("park.sum()", park.sum());

// 새로운 Date 객체를 new로 생성하고, d1에 저장
var d1 = new Date("2020-02-22");
console.log("d1.getFullYear()", d1.getFullYear());
console.log("d1.getMonth()", d1.getMonth());

// JS에서 생성자는 함수로 선언하고 new를 붙혀 사용함
function Person() {
  (this.name = "son"), (this.first = 10);
  this.second = 20;
  this.third = 30;
  this.sum = function () {
    return this.first + this.second + this.third;
  };
}
console.log("Person()", Person());
console.log("new Person()", new Person());
