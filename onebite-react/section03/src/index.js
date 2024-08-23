// CJS를 사용한 방법
// const moduleData = require("./math"); //moduleData에는 객체가 저장되어있음.
// console.log(moduleData.add(1, 2));
// console.log(moduleData.sub(1, 2));

// ESM을 사용한 방법
import mul, { add, sub } from "./math.js";

import randomColor from "randomcolor"; //randomcolor 라이브러리에서 어떠한 값을 가져오는 것

const color = randomColor();
console.log(color);

console.log(add(1, 2));
console.log(sub(1, 2));
console.log(mul(2, 3));

// 객체의 구조분해 할당으로 사용하는 방법
// const {add, sub} = require("./math");
// console.log(add(1,2));
// console.log(sub(1,2));
