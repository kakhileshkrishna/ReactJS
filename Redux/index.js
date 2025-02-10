const redux = require("redux");
const createStore = redux.createStore;

// 1. ACTION
const BUY_CAKE = "BUY_CAKE";
const BUY_IC = "BUY_IC"

function buyCake() {
  return {
    type: BUY_CAKE,
    info: "First action",
  };
}
function buyIC() {
    return {
      type: BUY_IC,
      info: "Ice Cream",
    };
  }
// 2. REDUCER

const initialState = {
  numCakes: 10,
  numIC: 20
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case BUY_CAKE:
      return {
        ...state, // to keep prev. component props same
        numCakes: state.numCakes- 1,
      };
    case BUY_IC:
        return {
            ...state, // to keep prev. component props same
            numIC: state.numIC- 1,
        };
    default:
      return state;
  }
};

// 3. CREATE STORE

const store = createStore(reducer);
console.log("Initial State", store.getState());
const unsubscribe = store.subscribe(() =>
  console.log("Update state", store.getState())
);

store.dispatch(buyCake());
store.dispatch(buyCake());
store.dispatch(buyIC());
store.dispatch(buyIC());
store.dispatch(buyIC());
store.dispatch(buyCake());

unsubscribe();
