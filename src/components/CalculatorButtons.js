import React from "react";

function CalculatorButtons({
  setnumber,
  numberstr,
  setnumberstr,
  number1,
  setnumber1,
  numberstr2,
  setnumberstr2,
  operation,
  setoperation,
}) {
  const calculateresult = () => {
    let calculation;
    switch (operation) {
      case "addition":
        calculation = number1 + Number(numberstr2);
        break;
      case "substraction":
        calculation = number1 - Number(numberstr2);

        break;
      case "multiplication":
        calculation = number1 * Number(numberstr2);
        break;
      case "division":
        calculation = number1 / Number(numberstr2);
        break;

      default:
        break;
    }
    console.log("num1", number1, "/num2:", Number(numberstr2));
    setnumber(calculation);
    setnumberstr(`${calculation}`);
    setnumber1(null);
    setnumberstr2("");
    setoperation("");
  };
  const typenumber = (nbr) => {
    setnumberstr((current) => {
      if (current === "welcome!" && nbr !== "0") return nbr;
      if (current === "0" && nbr !== "0") return nbr;
      if ((current === "0" || current === "welcome!") && nbr === "0")
        return current;
      if (number1 !== null && numberstr2 === "" && nbr === "0") return current;
      return current + nbr;
    });

    if (number1 !== null) {
      setnumberstr2((current) => {
        if (current === "" && nbr === "0") return current;
        return current + nbr;
      });
    }
  };
  const add = () => {
    if (number1 === null && numberstr !== "welcome!") {
      setnumber1(Number(numberstr));
      setnumberstr((current) => current + "+");
      setoperation("addition");
    }
  };
  const substract = () => {
    if (number1 === null && numberstr !== "welcome!") {
      setnumber1(Number(numberstr));
      setnumberstr((current) => current + "-");
      setoperation("substraction");
    }
  };
  const multiply = () => {
    if (number1 === null && numberstr !== "welcome!") {
      setnumber1(Number(numberstr));
      setnumberstr((current) => current + "*");
      setoperation("multiplication");
    }
  };
  const divide = () => {
    if (number1 === null && numberstr !== "welcome!") {
      setnumber1(Number(numberstr));
      setnumberstr((current) => current + "/");
      setoperation("division");
    }
  };
  const dot = () => {
    if (number1 === null) {
      if (!numberstr.includes(".")) {
        setnumberstr((current) => {
          if (current === "welcome!") return "0.";
          return current + ".";
        });
      }
    } else {
      if (!numberstr2.includes(".")) {
        setnumberstr((current) => {
          if (numberstr2 === "") return current + "0.";
          return current + ".";
        });
        setnumberstr2((current) => {
          if (current === "") {
            return "0.";
          }
          return current + ".";
        });
      }
    }
  };
  const equal = () => {
    if (
      numberstr2 !== "" &&
      !(Number(numberstr2) === 0 && operation === "division")
    )
      calculateresult();
  };
  const clear = () => {
    setnumberstr("0");
    setnumber(0);
  };

  const mybuttons = [
    { name: "1", handler: typenumber },
    { name: "2", handler: typenumber },
    { name: "3", handler: typenumber },
    { name: "+", handler: add },
    { name: "4", handler: typenumber },
    { name: "5", handler: typenumber },
    { name: "6", handler: typenumber },
    { name: "-", handler: substract },
    { name: "7", handler: typenumber },
    { name: "8", handler: typenumber },
    { name: "9", handler: typenumber },
    { name: "*", handler: multiply },
    { name: "0", handler: typenumber },
    { name: "/", handler: divide },
    { name: ".", handler: dot },
  ];

  return (
    <div className="buttons">
      <div className="buttonsgrid">
        {mybuttons.map((button, i) => (
          <button
            type="button"
            key={"button" + i}
            onClick={() => button.handler(button.name)}
          >
            {button.name}
          </button>
        ))}
        <button
          className="equalbtn"
          type="button"
          key={"buttonequal"}
          onClick={equal}
        >
          =
        </button>
      </div>
      <div className="clearbtn">
        <button type="button" key={"buttonclear"} onClick={clear}>
          clear
        </button>
      </div>
    </div>
  );
}

export default CalculatorButtons;
