var kim = { name: "kim", first: 10, second: 20 };
var lee = { name: "lee", first: 10, second: 10 };

function sum(prefix) {
  return prefix + (this.first + this.second);
}

sum.call(kim);

// sum이 kim과 lee의 멤버가 됨
console.log("sum.call(kim)", sum.call(kim, " => "));
console.log("sum.call(lee)", sum.call(lee, " : "));
var kimSum = sum.bind(kim, " -> ");
console.log("kimSum()", kimSum());
