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
