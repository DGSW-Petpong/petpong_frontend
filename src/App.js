import logo from "./logo.svg";
import "./App.css";
import Application from "./components/application/Application";

function App() {
  return (
    <div
      style={{
        background: "#CCC",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <div>반려생활을 잇다. 너와나의 연결 꼬리</div>
      <Application />
    </div>
  );
}

export default App;
