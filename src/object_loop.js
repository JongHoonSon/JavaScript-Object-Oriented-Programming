// 배열 생성
var memberArray = ["egoing", "graphittie", "leezhce"];

// 반복문으로 배열의 모든 원소에 접근
var i = 0;
console.group("array loop");
while (i < memberArray.length) {
  console.log(i, memberArray[i]);
  i = i + 1;
}
console.groupEnd("array loop");

// 객체 생성
var memberObject = {
  manager: "egoing",
  developer: "graphittie",
  designer: "leezhce",
};

// 반복문으로 객체의 모든 원소에 접근

console.group("object loop");

// name = memberObject에 정의된 속성이름을 하나씩 가져옴
for (var name in memberObject) {
  console.log(name, memberObject[name]);
}
console.groupEnd("object loop");
