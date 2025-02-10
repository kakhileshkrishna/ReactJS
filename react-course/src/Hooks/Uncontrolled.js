import React from "react";
import { useRef } from "react";


// We're not using callback function to controll the data
// Operated by DOM, with useRef
const Uncontrolled = () => {
  const inputRef = useRef("");

  const submitHandler = (e) => {
    e.preventDefault();
    alert(inputRef.current.value);
  };

  return (
    <div>
      <form onSubmit={submitHandler}>
        <input type="text" ref={inputRef} />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default Uncontrolled;
