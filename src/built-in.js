// 우리가 기존에 사용했던 Math는 JS에서 기본적으로 제공하는 객체이다.
// PI는 객체의 일반 속성, random과 floor는 객체의 함수형태의 속성이다.

console.log("Math.PI", Math.PI);
console.log("Math.random()", Math.random());
console.log("Math.floor(3.9)", Math.floor(3.9));

// PI 변수, random, floor 메소드를 갖는 MyMath 객체 생성
// (객체 안에 정의된 함수는 메소드라 부름)
var MyMath = {
  PI: Math.PI,
  random: function () {
    return Math.random();
  },
  floor: function (val) {
    return Math.floor(val);
  },
};

// MyMath 객체의 속성 사용
console.log("MyMath.PI", MyMath.PI);
console.log("MyMath.random()", MyMath.random());
console.log("MyMath.floor(3.9)", MyMath.floor(3.9));

// 객체를 사용하지 않고 같은 기능을 하는 변수, 함수를 만드려면?
var MyMath_PI = Math.PI;
function MyMath_random() {
  return Math.random();
}
function MyMath_floor(val) {
  return Math.floor(val);
}
