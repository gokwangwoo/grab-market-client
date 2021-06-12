import logo from "./logo.svg";
import "./App.css";
import ChildComponent from "./child.js";
import TimerComponent from "./timer.js"; //이제 timercomponet를 받아오자

function App() {
  const text = "인프런 수강생 여러분 화이팅";
  const sayHello = function () {
    return <h3>인프런 강의 너무 좋아</h3>;
  };
  const sayHello2 = function () {
    alert("안녕하세요");
  };
  //이번 강의 목적은 {}를 통해서 javascript 코드를 html 코드 사이에 사용할 수 있는 것이다.
  //child.js에서 props를 이용해서 name과 age에 값을 넣어줄 수 있다.
  //jsx는 숫자를 넣을 때 {}를 이용한다.
  //부모 componet가 값을 전해주면 child.js의 props가 처리를 한다.
  return (
    <div>
      <h1>안녕하세요!</h1>
      <h2>{text}</h2>
      {sayHello()}
      <div onClick={sayHello2}>클릭해주세요</div>
      <TimerComponent />
      <ChildComponent name="그랩" age={27} />
      <ChildComponent name="민수" age={25} />
      <ChildComponent name="철수" age={30} />
      <ChildComponent name="슬기" age={28} />
    </div>
  );
}

export default App;
