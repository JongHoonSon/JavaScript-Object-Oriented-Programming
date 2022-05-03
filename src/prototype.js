// 현재는 객체가 생성될 때 마다 sum이라는 메소드도 함께 생성됨 (자원 낭비)
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

// 객체의 메소드를 바꾸려면, 생성된 모든 객체에 직접 접근해야됨
var lee = new Person("lee", 10, 20, 30);
var park = new Person("park", 10, 10, 10);
console.log("lee.sum()", lee.sum());
console.log("park.sum()", park.sum());
