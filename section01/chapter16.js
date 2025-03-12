// 1. 상수 객체(= 상수에 저장된 객체)
const animal = {
  type: "고양이",
  name: "나비",
  color: "black",
};

animal.age = 2; // 추가
animal.name = "까망이"; // 수정
delete animal.color; // 삭제

// 또 다른 객체를 생성해서 할당 불가능 (아에 새로운 값이기 때문에)
// animal = {a : 1};

// 2. 메서드
// -> 값이 함수인 프로퍼티를 말함

const person = {
  name: "이정환",
  // 메서드 선언
  sayHi() {
    console.log("안녕!");
  },
};

person.sayHi();
person["sayHi"]();
