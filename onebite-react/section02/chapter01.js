// 1. Falsy한 값
let f1 = undefined;
let f2 = null;
let f3 = 0;
let f4 = -0;
let f5 = NaN;
let f6 = "";  // 빈 문자열
let f7 = 0n;  // 아주 큰 숫자를 저장할 때 사용하는 값(웹 개발엔 별로 사용되지X)

if (!f1) {
    console.log("falsy");
}

// 2. Truthy한 값
// -> 7가지 Falsy한 값들을 제외한 나머지 모든 값
let t1 = "hello";
let t2 = 123;
let t3 = [];
let t4 = {};
let t5 = () => {};

// 3. 활용 사례
function printName(person) {
    if(!person){
        console.log("person의 값이 없음");
        return;
    }
    console.log(person.name);
}

// let person; 만 하는 경우 undefined이기 때문에 Falsy한 값이 됨.
let person = {name: "이정환"};
printName(person);