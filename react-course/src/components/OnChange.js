import React, { useState } from "react";

function OnChange() {
  const [user, setUser] = useState("");
  const handler = (e) => {
    setUser(e.target.value);
  };
  return (
    <div>
      <input
        type="text"
        placeholder="username"
        value={user}
        name="user"
        onChange={handler}
      />
      <h1>The user is: {user}</h1>
    </div>
  );
}

export default OnChange;
