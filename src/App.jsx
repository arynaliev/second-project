// import logo from "./illusion-image.webp";
import "./App.css";

const boysNames = ["Azim", "Tima", "Dastan"];
const girlsNames = ["Meka", "Aida", "Aigerim", "Janara", "Erkinai", "Alina"];

const showStudentsNames = (array) => {
  return array.map((el, index) => (
    <div className="studentsBox">
      <span key={index}>{el}</span>
    </div>
  ));
};

function App() {
  return (
    <div className="App">
      <h1>Boys</h1>
      <div className="boys">{showStudentsNames(boysNames)}</div>
      <hr />
      <h1>Girls</h1>
      <div className="girls">{showStudentsNames(girlsNames)}</div>
    </div>
  );
}

export default App;
