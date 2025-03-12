// 1. 배열의 구조 분해 할당
let arr = [1, 2, 3];

let [one, two, three = 5, four] = arr;
// console.log(one, two, three, four);

// 2. 객체의 구조 분해 할당
let person = {
  name: "이정환",
  age: 27,
  hobby: "테니스",
};

let { name, age: myAge, hobby, extra = "hello" } = person; //age: myAge의 경우 -> person.age의 값인 27을 myAge 변수에 할당함.
// myAge 변수에 age 프로퍼티 값이 담김
console.log(name, myAge, hobby);

// 3. 객체 구조 분해 할당을 이용해서 함수의 매개변수를 받는 방법(중괄호로 구조 분해 할당임을 명시해줘야함.)
const func = ({ name, age, hobby, extra }) => {
  console.log(name, age, hobby, extra);
};

func(person); // 객체를 넘겼을 때만 구조 분해 할당 가능
