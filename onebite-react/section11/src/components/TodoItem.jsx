import "./TodoItem.css";
import { memo, useContext } from "react";
import { TodoContext } from "../App";

// onUpdate와 onDelete의 경우 함수(=객체)이기 때문에 App 컴포넌트가 리렌더링 될 때 마다 매번 다시 생성되어 전달됨.
const TodoItem = ({ id, isDone, content, date }) => {
  const { onUpdate, onDelete } = useContext(TodoContext);
  const onChangeCheckbox = () => {
    onUpdate(id);
  };

  const onClickDeleteButton = () => {
    onDelete(id);
  };

  return (
    <div className="TodoItem">
      <input
        onChange={onChangeCheckbox}
        readOnly
        checked={isDone}
        type="checkbox"
      />
      <div className="content">{content}</div>
      <div className="date">{new Date(date).toLocaleDateString()}</div>
      <button onClick={onClickDeleteButton}>삭제</button>
    </div>
  );
};

// memo를 적용했는데도 리렌더링이 발생하는 이유
// memo는 props가 바꼈을 때만 컴포넌트를 리렌더링
// 리렌더링이 발생할 때 마다 현재 props와 과거 props를 비교하여 두 props가 현재 같은 값인지 다른 값인지 판단하여 인수로 전달된 컴포넌트를 리렌더링 할 지 말 지 결정함
// 기본적으로 memo 메서드는 값을 얕은 비교를 하기 때문에(= 동등 연산자로 비교) 객체 타입의 값은 무조건 서로 다른 값이라고 판단
// -> 따라서 onUpdate나 onDelet와 같은 객체 타입의 값(=함수)은 매번 새롭게 전달될 때 마다 다른 주소 값을 가지게 되어 memo 메서드는 props가 바뀌었다고 판단함!

// export default memo(TodoItem, (prevProps, nextProps) => {
//   if (prevProps.id !== nextProps.id) return false;
//   if (prevProps.isDone !== nextProps.isDone) return false;
//   if (prevProps.content !== nextProps.content) return false;
//   if (prevProps.date !== nextProps.date) return false;

//   return true;
// });

// 1번째 해결 방법
// memo 함수의 두 번째 인수로 콜백 함수를 전달하여 커스터마이징 하기
// 결과는? -> 부모 컴포넌트가 리렌더링 될 때 마다 컴포넌트의 props가 바뀌었는지 스스로 판단하지 않고, 콜백함수의 매개변수로 과거 props와 현재 props를 전달해서 함수의 반환값에 따라 props의 변경 유무를 판단
// 콜백함수가 True를 반환하는 경우 -> props가 바뀌지 않았다고 판단 -> 리렌더링 X
// 콜백함수가 False를 반환하는 경우 -> props가 바뀌었다고 판단 -> 리렌더링 O

// 2번째 해결 방법
// useCallback을 사용하는 경우 memo메서드만 적용해도 불필요한 리렌더링이 발생하지 않게됨.
export default memo(TodoItem);
