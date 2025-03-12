//Date 객체의 값을 문자열로 변환하는 함수
export const getStringedDate = (targetDate) => {
  //날짜 -> YYYY-MM-DD (09 09)
  let year = targetDate.getFullYear();
  let month = targetDate.getMonth() + 1;
  let date = targetDate.getDate();

  if (month < 10) {
    month = `0${month}`;
  }
  if (date < 10) {
    date = `0${date}`;
  }

  return `${year}-${month}-${date}`;
};
