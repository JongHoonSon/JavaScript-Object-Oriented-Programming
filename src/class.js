class Person {
  // Person 타입의 새로운 객체가 생성될 때, constructor가 실행됨
  // constructor에서 객체의 기본 속성의 값 정의
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

var lee = new Person("lee", 10, 20, 30);
console.log("lee", lee);
var park = new Person("park", 10, 10, 10);
park.sum = function () {
  return "this : " + (this.first + this.second + this.third);
};
console.log("lee.sum()", lee.sum());
console.log("park.sum()", park.sum());
