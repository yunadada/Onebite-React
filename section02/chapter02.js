// function returnFalse() {
//     console.log("False 함수");
//     return false;
//     // return undefined;
// }

// function returnTrue() {
//     console.log("True 함수");
//     return true;
//     // return 10;
// }

// console.log(returnFalse() && returnTrue());  // 단락 평가가 이뤄져 returnTrue함수는 호출되지 않음.
// console.log(returnTrue() && returnFalse());  // 단락 평가가 이뤄지지 않음.

// 단락 평가 활용 사례
function printName(person) {
  const name = person && person.name;
  console.log(name || "person의 값이 없음");
}

printName(); //name은 단락 평가에 의해 undefined가 저장됨. -> 인수로 아무것도 넘겨주지 않았기 때문에 매개변수로 받은 person은 undefined 값을 가지므로
printName({ name: "이정환" }); //name에 "이정환"이 저장됨.
