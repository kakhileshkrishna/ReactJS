import React, { useState } from "react";

function OnSubmit() {
  const [data, setData] = useState({
    username: "",
    password: "",
  });

  const { username, password } = data;
  const onChange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };

  const submitHandler = (e) => {
    e.preventDefault(); // Prevent Default or other event handlers. MUST
    console.log(data);
  };
  return (
    <div>
      <center>
        <form onSubmit={submitHandler}>
          <input
            type="text"
            name="username"
            value={username}
            onChange={onChange}
            placeholder="Username"
          />
          <input
            type="password"
            name="password"
            value={password}
            onChange={onChange}
            placeholder="password"
          />
          <button type="submit">Submit</button>
        </form>
      </center>
    </div>
  );
}

export default OnSubmit;
