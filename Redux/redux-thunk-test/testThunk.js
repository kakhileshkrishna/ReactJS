const redux = require("redux");
const thunkMiddleware = require("redux-thunk").thunk; // Access the 'thunk' property

console.log(
  "Is thunkMiddleware a function?",
  typeof thunkMiddleware === "function"
);
