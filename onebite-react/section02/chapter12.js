// 비동기 작업을 콜백함수로 처리하는 방법
function add(a, b, callback) {
  setTimeout(() => {
    const sum = a + b;
    callback(sum);
  }, 3000);
}

add(1, 2, (value) => {
  console.log(value);
});

// 과정
// add함수 호출 -> setTimeout함수 호출 -> setTimeout함수는 3초 뒤에 콜백 함수를 실행 -> 매개변수로 받은 콜백함수를 setTimeout함수 내에서 다시 호출하면서 값을 전달

// 음식을 주문하는 상황
function orderFood(callback) {
  setTimeout(() => {
    const food = "떡볶이";
    callback(food);
  }, 3000);
}

function cooldownFood(food, callback) {
  setTimeout(() => {
    const cooldownedFood = `식은 ${food}`;
    callback(cooldownedFood);
  }, 2000);
}

function freezeFood(food, callback) {
  setTimeout(() => {
    const freezedFood = `냉동된 ${food}`;
    callback(freezeFood);
  }, 1500);
}

orderFood((food) => {
  console.log(food); // 떡볶이

  cooldownFood(food, (cooldownedFood) => {
    console.log(cooldownedFood); // 식은 떡볶이

    freezeFood(cooldownedFood, (freezedFood) => {
      console.log(freezedFood); // 냉동된 식은 떡볶이
    });
  });
});
