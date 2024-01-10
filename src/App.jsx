// import logo from "./illusion-image.webp";
import "./App.css";

const boysNames = ["Azim", "Tima", "Dastan"];
const girlsNames = ["Meka", "Aida", "Aigerim", "Janara", "Erkinai", "Alina"];

const showStudentsNames = (array) => {
  return array.map((el, index) => (
    <div
      style={{
        border: "1px solid black",
        margin: "10px",
        padding: "10px",
        width: "100px",
      }}
    >
      <span key={index}>{el}</span>
    </div>
  ));
};

function App() {
  return (
    <div className="App">
      <div className="boys">{showStudentsNames(boysNames)}</div>
      <hr />
      <div className="girls">{showStudentsNames(girlsNames)}</div>
    </div>
  );
}

export default App;
