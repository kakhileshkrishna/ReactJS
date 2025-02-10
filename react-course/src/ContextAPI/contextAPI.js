import React, { createContext, useState } from "react";

export const store = createContext();

const contextAPI = () => {
  const [data, setData] = useState(0);

  return (
    <store.Provider value={[data, setData]}>
      <div>contextAPI</div>
      <ComponentA />
      <ComponentB />
    </store.Provider>
  );
};

export default contextAPI;
