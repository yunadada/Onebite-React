// 1. 함수 표현식
function funcA() {
  console.log("funcA");
}

let varA = funcA; // 함수를 호출해서 그 결과값을 저장하는 것이 아닌, 함수 자체를 저장
console.log(varA); // 함수 자체가 출력됨
varA(); // = funA() 함수 호출

let varB = function () {
  console.log("funcB");
};

varB();

// 주의 사항 : 아래와 같이 함수 호이스팅 불가  -> 왜냐하면 함수가 값으로써 생성된 함수 표현식이기 때문에
// varB();
// let varB = function () {
//     console.log("funcB");
// };

// 아래 코드는 호이스팅 가능
// let varA = funcA;
// varA();
// function funcA() {
//     console.log("A");
// }

// 2. 화살표 함수
let varC = (value) => {
  console.log(value);
  return value + 1;
};

console.log(varC(10));
