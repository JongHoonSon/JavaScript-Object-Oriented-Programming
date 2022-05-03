// 배열 생성 및 사용
var memberArray = ["egoing", "graphittie", "leezhce"];
console.log("memberArray[2]", memberArray[2]);

// 객체 생성
var memberObject = {
  manager: "egoing",
  developer: "graphittie",
  designer: "leezhce",
};

// 객체 사용
console.log("memberObject.designer", memberObject.designer);
console.log("memberObject['designer']", memberObject["designer"]);

// 객체의 값 수정
memberObject.designer = "leezche";
console.log("memberObject.designer", memberObject.designer);

// 객체의 값 삭제
delete memberObject.manager;
console.log("memberObject.manager", memberObject.manager);
