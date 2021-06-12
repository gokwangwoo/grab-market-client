import React from "react";
//const [time, setTime] = React.useState(0)가 되어 있으면
//time 값이 0이 들어간다
function TimerComponent() {
  const [time, setTime] = React.useState(0);
  console.log("컴퍼넌트 업데이트");
  //setTime은 state를 변형시키는 함수 이다.
  React.useEffect(function () {
    setTime(time + 1);
  }, []); //useEffect에 두번째 인자에 time을 넣으면 무한정 time이 올라가게 되는
  //오류 발생 setTime이 호출되고 time에 +1씩 꼐속됨
  //함수를 호출하게 될 제어를 두번째 인자 []를 통해서 제어
  return (
    <div>
      <h3>{time}초</h3>
      <button>1씩 올려주세요</button>
    </div>
  );
}

export default TimerComponent;
