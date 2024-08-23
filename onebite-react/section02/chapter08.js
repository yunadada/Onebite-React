// 5가지 요소 순회 및 탐색 메서드
// 1. forEach
// 모든 요소를 순회하면서, 각각의 요소에 특정 동작을 수행시키는 메서드
let arr1 = [1, 2, 3];
arr1.forEach(function (item, idx, arr) {
  // console.log(idx, item * 2);
});

let doubledArr = [];

arr1.forEach((item) => {
  doubledArr.push(item * 2);
});

// 2. includes
// 배열에 특정 요소가 있는지 확인하는 그런 메서드
let arr2 = [1, 2, 3];
let isInclude1 = arr2.includes(3); //true
let isInclude2 = arr2.includes(10); //false

// 3. indexOf
// 특정 요소의 인덱스(위치)를 찾아서 반환하는 메서드
let arr3 = [1, 2, 3];
let index = arr3.indexOf(2); // -> 결과: 1

// 배열에 찾으려는 값이 여러개 존재하는 경우 배열의 맨 앞에서부터 탐색하기 때문에 가장 첫 번째로 나온 요소의 인덱스를 반환함.
// let arr3 = [2, 2, 2];
// let index = arr3.indexOf(2);  -> 결과: 0

// 현재 배열에 존재하지 않는 값을 찾으려고 하는 경우 -1을 반환함.

// indexOf와 findIndex 메서드 비교
// let objectArr = [
//     {name: "이정환"},
//     {name: "홍길동"},
// ];

// console.log(
//     objectArr.indexOf({name: "이정환"})  -> 결과: -1 반환(찾을 수 없기 때문)
//     -> 객체는 참조값을 기준으로 비교되는데 indexOf()안에 들어있는 객체의 참조값과 objectArr에 들어있는 객체의 참조값이 다르므로 비교할 수 없음.
// );

// console.log(
//     objectArr.findIndex(
//         (item) => item.name === "이정환"  -> 결과: 0 반환
//     )
// );

// 4. findIndex
// 모든 요소를 순회하면서, 콜백함수를 만족하는 그런
// 특정 요소의 인덱스(위치)를 반환하는 메서드
let arr4 = [1, 2, 3];
const findedIndex = arr4.findIndex((item) => {
  if (item % 2 !== 0) return true;
});

console.log(findedIndex); //가장 먼저 조건식을 만족하는 인덱스(1개)를 반환

// 위 화살표 함수를 좀 더 간결하게 만들면 (조건식을 return 하도록)
// const findedIndex = arr4.findIndex((item) => item % 2 !== 0); 으로 작성 가능

// 조건을 만족하는 요소가 배열에 존재하지 않는다면 -1을 반환함.
// const findedIndex = arr4.findIndex((item) => item === 999);

// 5. find
// 모든 요소를 순회하면서 콜백함수를 만족하는 요소를 찾는데, 요소를 그대로 반환
let arr5 = [{ name: "이정환" }, { name: "홍길동" }];

const finded = arr5.find((item) => item.name === "이정환");

console.log(finded); // 객체 자체를 반환함.
