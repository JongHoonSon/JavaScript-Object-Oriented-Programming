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

// 객체의 메소드를 바꾸려면, 생성된 모든 객체에 직접 접근해야됨
var lee = new Person("lee", 10, 20, 30);
lee.sum = function () {
  return "modified : " + (this.first + this.second);
};
var park = new Person("park", 10, 10, 10);
park.sum = function () {
  return "modified : " + (this.first + this.second);
};
console.log("lee.sum()", lee.sum());
console.log("park.sum()", park.sum());
