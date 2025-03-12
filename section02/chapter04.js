// 1. Spread 연산자
// -> Spread : 흩뿌리다, 펼치다 라는 뜻
// -> 객체나 배열에 저장된 여러개의 값을 개별로 흩뿌려주는 역할

let arr1 = [1, 2, 3];
let arr2 = [4, ...arr1, 5, 6];
// console.log(arr2);

let obj1 = {
  a: 1,
  b: 2,
};
let obj2 = {
  ...obj1,
  c: 3,
  d: 4,
};

// console.log(obj2);

function funcA(p1, p2, p3) {
  console.log(p1, p2, p3);
}

funcA(...arr1);

// 2. Rest 매개변수
// -> Rest : 나머지 라는 뜻 / 나머지 매개변수

// 첫 번째 매개변수를 다른 이름으로 받고싶은 경우 아래와 같이 one이라는 매개변수를 앞에 빼두면 됨.
// -> 첫 번째로 전달된 인수는 one이라는 매개 변수에 저장되고 그 이후에 나오는 인수들은(두 번째, 세 번째 인수....) 배열로 저장됨.
function funcB(one, ...rest) {
  // rest라는 매개변수에 함수를 호출하면서 전달한 모든 인수들이 배열 형태로 저장됨
  console.log(rest);
}

funcB(...arr1);
