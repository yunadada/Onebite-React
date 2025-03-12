import { Routes, Route, Link, useNavigate } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import New from "./pages/New";
import Diary from "./pages/Diary";
import Notfound from "./pages/Notfound";

import { getEmotionImage } from "./util/get-emotion-image";
import Button from "./components/Button";
import Header from "./components/Header";
import Edit from "./pages/Edit";
import { act, useReducer, useRef, createContext } from "react";

const mockData = [
  {
    id: 1,
    createdDate: new Date("2025-03-07").getTime(),
    emotionId: 1,
    content: "1번 일기 내용",
  },
  {
    id: 2,
    createdDate: new Date("2025-03-06").getTime(),
    emotionId: 2,
    content: "2번 일기 내용",
  },
  {
    id: 3,
    createdDate: new Date("2025-02-16").getTime(),
    emotionId: 3,
    content: "3번 일기 내용",
  },
];

function reducer(state, action) {
  switch (action.type) {
    case "CREATE":
      return [action.data, ...state];
    case "UPDATE":
      return state.map((item) =>
        String(item.id) === String(action.data.id) ? action.data : item
      );
    case "DELETE":
      return state.filter((item) => String(item.id) !== String(action.id));
    default:
      return state;
  }
}

// 일기 데이터를 공급할 context
export const DiaryStateContext = createContext();
// data state 값을 변경시키는 함수들을 공급할 context
export const DiaryDispatchContext = createContext();

function App() {
  // const nav = useNavigate();

  // const onClickButton = () => {
  //   nav("/new");
  // };

  const [data, dispatch] = useReducer(reducer, mockData); //일기 데이터를 저정할 state
  const idRef = useRef(3);

  // 새로운 일기 추가
  const onCreate = (createdDate, emotionId, content) => {
    dispatch({
      type: "CREATE",
      data: { id: idRef.current++, createdDate, emotionId, content },
    });
  };

  // 기존 일기 수정
  const onUpdate = (id, createdDate, emotionId, content) => {
    dispatch({
      type: "UPDATE",
      data: { id, createdDate, emotionId, content },
    });
  };

  // 기존 일기 삭제
  const onDelete = ({ id }) => {
    dispatch({
      type: "DELETE",
      id,
    });
  };

  return (
    <>
      {/* 이미지 파일을 public 폴더에 넣은 경우 */}
      {/* <div>
        <img src="/emotion1.png" />
        <img src="/emotion2.png" />
        <img src="/emotion3.png" />
        <img src="/emotion4.png" />
        <img src="/emotion5.png" />
      </div> */}

      {/* 이미지 파일을 assets 폴더에 넣은 경우 */}
      {/* <div>
        <img src={getEmotionImage(1)} />
        <img src={getEmotionImage(2)} />
        <img src={getEmotionImage(3)} />
        <img src={getEmotionImage(4)} />
        <img src={getEmotionImage(5)} />
      </div>

      <div>
        <Link to={"/"}>Home</Link>
        <Link to={"/new"}>New</Link>
        <Link to={"/diary"}>Diary</Link>
      </div>
      
      <button onClick={onClickButton}>New 페이지로 이동</button> */}

      {/* <Header
        title={"Header"}
        leftChild={<Button text={"Left"} />}
        rightChild={<Button text={"Right"} />}
      />

      <Button
        text={"123"}
        // type={"DEFAULT"}
        onClick={() => {
          console.log("123번 버튼 클릭!");
        }}
      />
      <Button
        text={"123"}
        type={"POSITIVE"}
        onClick={() => {
          console.log("123번 버튼 클릭!");
        }}
      />
      <Button
        text={"123"}
        type={"NEGATIVE"}
        onClick={() => {
          console.log("123번 버튼 클릭!");
        }}
      /> */}

      <DiaryStateContext.Provider value={data}>
        <DiaryDispatchContext.Provider value={{ onCreate, onUpdate, onDelete }}>
          <Routes>
            {/* 모든 일기를 조회하는 Home 페이지 */}
            <Route path="/" element={<Home />} />
            {/* 새로운 일기를 작성하는 New 페이지 */}
            <Route path="/new" element={<New />} />
            {/* 일기를 상세히 조회하는 Diary 페이지 */}
            <Route path="/diary" element={<Diary />} />
            <Route path="/edit/:id" element={<Edit />} />
            <Route path="*" element={<Notfound />} />
          </Routes>
        </DiaryDispatchContext.Provider>
      </DiaryStateContext.Provider>
    </>
  );
}

export default App;
