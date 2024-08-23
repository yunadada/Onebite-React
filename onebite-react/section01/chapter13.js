// 1. 콜백함수
function main(value) {
  console.log(value); // 화살표 함수 자체를 출력
  value(); //화살표 함수 호출
}

main(() => {
  // 화살표 함수가 main 함수의 콜백함수로서 인수로 전달됨.
  console.log("i am sub");
});

// 2. 콜백함수의 활용
function repeat(count, callback) {
  for (let idx = 1; idx <= count; idx++) {
    callback(idx);
  }
}

repeat(5, (idx) => {
  console.log(idx);
});

repeat(5, (idx) => {
  console.log(idx * 2);
});

repeat(5, (idx) => {
  console.log(idx * 3);
});
