import React, { useRef, useEffect} from "react";

const UseRef = () => {
  const data = useRef(null);
  const submitHandler = (e) => {
    e.preventDefault();
    console.log(data.current.value);
  };

  useEffect(()=> {
    data.current.focus();
  }, [])

  return (
    <div>
      <center>
        <form onSubmit={submitHandler}>
          <input ref={data} type="text" placeholder="Name?" />
          <br />
          <button type="submit">click</button>
        </form>
      </center>
    </div>
  );
};

export default UseRef;
