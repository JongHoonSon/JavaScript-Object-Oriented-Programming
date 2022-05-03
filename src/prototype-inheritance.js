var superObj = { superVal: "super" };
// var subObj = { subVal: "sub" };

// subObj.__proto__ = superObj;
var subObj = Object.create(superObj);
subObj.subVal = "sub";
console.log("subObj.subVal =>", subObj.subVal);
console.log("subObj.superVal =>", subObj.superVal);

subObj.subVal = "sub";
console.log("superObj.superVal =>", superObj.superVal);

var kim = {
  name: "kim",
  first: 10,
  second: 20,
  sum: function () {
    return this.first + this.second;
  },
};
var lee = Object.create(kim);
lee.name = "lee";
lee.first = 10;
lee.second = 10;
// var lee = {
//   name: "lee",
//   first: 10,
//   second: 10,
// };
// lee.__proto__ = kim;
console.log("kim.sum()", kim.sum());
console.log("lee.sum()", lee.sum());
