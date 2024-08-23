console.log(1);

// setTimeout 함수는 비동기적으로 작동하는 함수이기 때문에 3초를 세는 타이머만 작동시킨 후 다음 라인으로 넘어감.(=3을 출력)
// 3초가 지나면 내부적으로 콜백함수를 호출해서 콘솔에 출력되도록 함.
setTimeout(() => {
  console.log(2);
}, 3000);

console.log(3);
