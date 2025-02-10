import React, { useContext } from "react";
import { UserContext } from "./ContextProviderComponent";

const ComponentC = () => {
  const value = useContext(UserContext);

  return (
    <div>
      <div>Consumer received - {value}</div>
    </div>
  );
};

export default ComponentC;
