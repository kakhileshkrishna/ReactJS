import React, { useState } from "react";
import { useMemo } from "react";

const UseMemo = () => {
  const [number, setNumber] = useState(5);
  const [counter, setCounter] = useState(0);
  const factorial = useMemo(() => fact(number), [number]);

  return (
    <center>
      Factorial= {factorial}<br />
      Counter = {counter}<br />
      <button onClick={() => setCounter(counter + 1)}>Counter Increment</button><br />
      <button onClick={() => setCounter(number + 1)}>Number Increment</button><br />

      </center>
  );
};

const fact = (n) => {
  let answer = 1;
  for (let i = n; i >= 1; i--) {
    answer = answer * i;
  }
  console.log("Factorial function calling");
  return answer;
};

export default UseMemo;
