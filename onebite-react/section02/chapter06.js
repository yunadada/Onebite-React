// 1. 배열 순회
let arr = [1, 2, 3];

// 1.1 배열 인덱스
for (let i = 0; i < arr.length; i++) {
  console.log(arr[i]);
}

let arr2 = [4, 5, 6, 7, 8];
for (let i = 0; i < arr.length; i++) {
  console.log(arr2[i]);
}

// 1.2 for of 반복문 (오직 배열 순회를 위한 특수 반복문 -> of 뒤에있는 배열의 값을 하나씩 순서대로 꺼내서 변수에 저장함.)
for (let item of arr) {
  //item이라는 변수에 arr에 저장된 값을 순서대로 하나씩 할당
  console.log(item);
}

// 2. 객체 순회
let person = {
  name: "이정환",
  age: 27,
  hobby: "테니스",
};

// 2.1 Object.keys 내장 함수 사용
// -> 객체에서 key 값들만 뽑아서 새로운 배열로 반환
let keys = Object.keys(person);

// key값만 순회하는 경우
for (let i = 0; i < keys.length; i++) {
  console.log(keys[i]);
}

// key값과 함께 value값도 순회하고자 하는 경우
for (let key of keys) {
  const value = person[key];
  console.log(key, value);
}

// 2.2 Object.values 내장 함수 사용
// -> 객체에서 value 값들만 뽑아서 새로운 배열로 반환
let values = Object.values(perosn);

for (let value of values) {
  console.log(value);
}

// 2.3 for in 반복문(객체만을 위해 존재하는 특수 반복문 -> in 뒤에 있는 객체의 프로퍼티의 키를 순서대로 변수에 할당함.)
for (let key in person) {
  //key라는 변수에 person객체에 들어있는 키 값들이 순서대로 하나씩 할당됨.
  const value = person[key];
  console.log(key, value);
}
