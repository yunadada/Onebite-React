import { useEffect } from "react";

// 3. 언마운트 : 죽음
const Even = () => {
  useEffect(() => {
    return () => {
      console.log("unmount");
    };
  }, []);

  return <div>짝수입니다.</div>;
};

export default Even;
