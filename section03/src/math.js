// math 모듈(math.js는 간단한 계산 기능을 하는 코드들을 모아둔 메스 모듈이라고 부름.)
export function add(a, b) {
  return a + b;
}

export function sub(a, b) {
  return a - b;
}

export default function multiply(a, b) {
  return a * b;
}
// CJS 모듈 시스템을 이용한 내보내기 방법
// module.exports = {
//   add,
//   sub,
// };

// ES 모듈 시스템을 이용한 내보내기 방법
// export { add, sub };
