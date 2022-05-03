class Person {
  // Person 타입의 새로운 객체가 생성될 때, cunstructor가 실행됨
  constructor() {
    console.log("constructor");
  }
}

var lee = new Person();
console.log("lee", lee);
// var lee = new Person("lee", 10, 20, 30);
// lee.sum = function () {
//   return "this : " + (this.first + this.second + this.third);
// };
// var park = new Person("park", 10, 10, 10);
// console.log("lee.sum()", lee.sum());
// console.log("park.sum()", park.sum());
