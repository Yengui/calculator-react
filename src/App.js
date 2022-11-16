import "./App.css";
import Calculator from "./components/Calculator";
import CalculatorButtons from "./components/CalculatorButtons";
import CalculatorScreen from "./components/CalculatorScreen";
import { useState } from "react";

function App() {
  const [numberstr, setnumberstr] = useState("welcome!");
  const [operation, setoperation] = useState("");
  const [numberstr2, setnumberstr2] = useState("");
  const [number1, setnumber1] = useState(null);
  const [number, setnumber] = useState(0);
  return (
    <div className="container">
      <Calculator>
        <CalculatorScreen
          number={number}
          numberstr={numberstr}
        ></CalculatorScreen>
        <CalculatorButtons
          numberstr2={numberstr2}
          setnumberstr2={setnumberstr2}
          numberstr={numberstr}
          setnumberstr={setnumberstr}
          number1={number1}
          setnumber1={setnumber1}
          setnumber={setnumber}
          operation={operation}
          setoperation={setoperation}
        ></CalculatorButtons>
      </Calculator>
    </div>
  );
}

export default App;
