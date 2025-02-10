import React from "react";
import { useState } from "react";
import {useNavigate } from "react-router-dom";
const Home = () => {
  const [auth, setAuth] = useState(false);
  const navigate = useNavigate();

  if (auth) {
    navigate('/dashboard');
  }
  return (
    <div>
      <h2> HOME </h2>

      <button onClick={() => setAuth(true)}> Login </button>
    </div>
  );
};

export default Home;
