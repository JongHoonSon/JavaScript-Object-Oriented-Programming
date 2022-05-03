var lee = {
  name: "lee",
  first: 10,
  second: 20,
  sum: function () {
    return this.first + this.second;
  },
};

var park = {
  name: "park",
  first: 10,
  second: 10,
  sum: function () {
    return this.first + this.second;
  },
};
console.log("lee.sum()", lee.sum());
console.log("park.sum()", park.sum());
