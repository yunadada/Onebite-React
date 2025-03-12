import { useState, useRef } from "react";
// 간단한 회원가입 폼
// 1. 이름
// 2. 생년월일
// 3. 국적
// 4. 자기소개

const Register = () => {
  const [input, setInput] = useState({
    name: "",
    birth: "",
    country: "",
    bio: "",
  });

  const countRef = useRef(0);
  const inputRef = useRef();

  const onChange = (e) => {
    countRef.current++;
    console.log(countRef.current);

    setInput({
      ...input, //스프레드 연산자를 통해 관련없는 값들은 그대로 유지되도록 만들어줘야 함.
      [e.target.name]: e.target.value, //e.target.name에 저장되어 있는 값(=이벤트가 발생한 태그의 name 속성에 설정된 값)으로 프로퍼티의 키를 설정
    });
  };

  const onSubmit = () => {
    if (input.name === "") {
      // 이름을 입력하는 DOM 요소 포커스
      inputRef.current.focus(); // inputRef.current에는 현재 접근하고자하는 DOM 요소가 저장돼있음.
    }
  };

  return (
    <div>
      <div>
        <input
          ref={inputRef} // input 태그가 렌더링하는 DOM 요소가 inputRef라는 레퍼런스 객체에 저장됨.
          name="name"
          value={input.name}
          onChange={onChange}
          placeholder={"이름"}
        />
      </div>
      <div>
        <input
          name="birth"
          value={input.birth}
          onChange={onChange}
          type="date"
        />
      </div>
      <div>
        <select name="country" value={input.country} onChange={onChange}>
          <option value=""></option>
          <option value="kr">한국</option>
          <option value="us">미국</option>
          <option value="uk">영국</option>
        </select>
      </div>
      <div>
        <textarea name="bio" value={input.bio} onChange={onChange} />
      </div>
      <button onClick={onSubmit}>제출</button>
    </div>
  );
};

export default Register;
