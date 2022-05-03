// this를 사용하지 않는 경우
// 객체의 속성을 계속해서 꺼내서 사용해야됨
var kim = {
  name: "kim",
  first: 10,
  second: 20,
  sum: function (f, s) {
    return f + s;
  },
};
console.log("kim.sum(kim.first, kim.second)", kim.sum(kim.first, kim.second));

// this를 사용하는 경우
// 객체의 속성을 다시 꺼낼 필요없이 함수 내에서 this로 접근하여 구현하면 됨
var park = {
  name: "park",
  first: 10,
  second: 20,
  sum: function () {
    return this.first + this.second;
  },
};
console.log("park.sum()", park.sum());
