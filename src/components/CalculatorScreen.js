import React from "react";

function CalculatorScreen({ number, numberstr }) {
  return (
    <div className="screen">
      <p className="nbr-string">{numberstr}</p>
      <p className="nbr-result">{number}</p>
    </div>
  );
}

export default CalculatorScreen;
