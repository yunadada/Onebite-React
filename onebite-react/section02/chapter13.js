// 1. Promise 객체 생성하기 - 인수로 비동기 작업을 진행할 콜백함수를 넣어주면 됨.
const promise1 = new Promise((resolve, reject) => {
  // 비동기 작업 실행하는 함수 = executor 함수(resolve, reject 2가지 매개변수가 전달됨.)
  // Promise 객체 생성과 동시에 콜백 함수를 호출해서 안에 있는 비동기 작업을 실행함.

  setTimeout(() => {
    console.log("안녕");
    // resolve("안녕");
    reject("왜 실패했는지 이유...");
  }, 2000);
});

setTimeout(() => {
  console.log(promise1); //promise1에는 resolve() 또는 reject()의 괄호 안의 결과값 중 하나가 들어있음.
}, 3000);

// 2. Promise 객체를 이용하는 방법
const promise2 = new Promise((resolve, reject) => {
  setTimeout(() => {
    const num = 10;

    if (typeof num === "number") {
      resolve(num + 10);
    } else {
      reject("num이 숫자가 아닙니다.");
    }
  }, 2000);
});

// 3. Promise의 결과값을 이용하기 -> then 메서드 사용 (그 후에 라는 뜻)
// 인수로 콜백함수를 전달
// 비동기 작업이 성공했을 때만 호출됨. (= resolve 함수가 호출될 때만)
// promise가 성공하면 그 후에(=then 메서드에) 인수로 전달한 콜백함수를 실행시켜줌과 동시에, resolve에 인수로 전달한 결과값을 매개변수로 제공(value 매개변수로 결과값을 받아서 사용 가능)
// 비동기 작업이 실패하면(= reject가 호출 되면) then 메서드는 실행되지 않음. -> catch 메서드 사용
promise2.then((value) => {
  console.log(value);
});

promise2.catch((error) => {
  console.log(error);
});

// Promise chainning
// then 메서드와 catch 메서드의 호출 결과는 똑같은 promise 객체를 반환하기 때문에 아래와 같이 연결해서 사용 가능
promise2
  .then((value) => {
    console.log(value);
  })
  .catch((error) => {
    console.log(error);
  });

// 4.
function add10(num) {
  const promise3 = new Promise((resolve, reject) => {
    setTimeout(() => {
      if (typeof num === "number") {
        resolve(num + 10);
      } else {
        reject("num이 숫자가 아닙니다.");
      }
    }, 2000);
  });

  return promise3;
}

const p = add10(0);
p.then((result) => {
  console.log(result);

  const newP = add10(result);
  newP.then((result) => {
    console.log(result);
  });
});

// promise는 콜백 지옥 문제를 아래와 같이 작성함으로써 방지할 수 있음.
// then 메서드 안에서 새로운 promise 객체를 반환하지 않으면 -> 원본 promise 객체 반환
// then 메서드 안에서 새로운 promise 객체를 반환하면 -> then 메서드의 호출 결과값은 새로운 promise 객체를 반환
add10(0)
  .then((result) => {
    console.log(result);
    return add10(result);
  })
  .then((result) => {
    console.log(result);
    return add10(undefined);
  })
  .then((result) => {
    console.log(result);
  })
  .catch((error) => {
    console.log(error);
  });
