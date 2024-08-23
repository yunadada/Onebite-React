// 1. Number Type
let num1 = 27;
let num2 = 1.5;
let num3 = -20;

let inf = Infinity; //양의 무한대
let mInf = -Infinity; //음의 무한대

let nan = NaN;  //수치 연산 실패시 결과값으로 사용(ex. 문자열과 정수의 곱셈)

// 2. String Type
let myName = "이정환";  //"" 또는 '' 기호 사용 안하면 문자열이 아닌 변수명으로 취급험.
let myLocation = "목동";
let introduce = myName + myLocation; //이정환목동
let introduceText = `${myName}은 ${myLocation}에 거주합니다.` //백틱 기호로 문자열 생성 가능 & 문자열 안에 변수의 값을 동적으로 집어넣을 수 있음. => 템플릿 리터럴 문법

// 3. Boolean Type
let isSwitchOn = true;
let isEmpty = false;

// 4. Null Type (변수에 아무런 값도 담겨져있지 않다.)
let empty = null; // null은 명시적으로 할당해줘야하는 값

// 5. Undefined Type (변수를 선언하고 어떠한 값도 집어넣지 않았을 때 자동으로 할당되는 값)
let none;
console.log(none);
