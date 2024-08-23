const Button = ({ text, color, children }) => {
  const onClickButton = (e) => {
    console.log(e);
    console.log(text);
  };

  return (
    <button
      onClick={onClickButton}
      //onMouseEnter={onClickButton}
      // 아래와 같이 작성해줘도 됨.
      // onClick={() => {
      //   console.log(text);
      // }}
      style={{ color: color }}
    >
      {text} - {color.toUpperCase()}
      {children}
    </button>
  );
};

Button.defaultProps = {
  color: "black",
};

export default Button;
