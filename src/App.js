import "./App.css";
import MainPageComponent from "./main/index.js";
import "./index.css"; //index.css는 export 객체가 없다 그래서 그냥 ./index.css를 하면 된다

function App() {
  return (
    <div>
      <MainPageComponent></MainPageComponent>
    </div>
  );
}

export default App;
