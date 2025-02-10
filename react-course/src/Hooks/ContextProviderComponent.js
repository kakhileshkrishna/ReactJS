import React, {createContext} from "react";
import ComponentC from "./ComponentC";

export const UserContext = createContext();

const ContextProviderComponent = () => {
  const value = "Data from Provider";
  
  return (
    <div>
      <center>
        <UserContext.Provider value={value}>
          <ComponentC />
        </UserContext.Provider>
      </center>
    </div>
  );
};

export default ContextProviderComponent;
