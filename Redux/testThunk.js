const redux = require("redux");
const thunkMiddleware = require("redux-thunk").default;

console.log(
  "Is thunkMiddleware a function?",
  typeof thunkMiddleware === "function"
);
