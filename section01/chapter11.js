// 함수 선언
function greeeting() {
  console.log("안녕하세요!");
}

console.log("호출 전");
greeeting();
console.log("호출 후");

// 직사각형의 넓이를 구하는 함수
let area1 = getArea(10, 20); //함수 호출
console.log(area1);

let area2 = getArea(30, 20);
console.log(area2);

getArea(120, 200);

// 호이스팅 -> 끌어올리다 라는 뜻
// 함수 선언
function getArea(width, height) {
  function another() {
    // 중첩 함수
    console.log("another");
  }
  another();

  let area = width * height;

  // console.log(area);
  return area;
}
