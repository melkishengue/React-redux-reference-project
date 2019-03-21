export function initStore() {
  let delta = 1;
  let initialState = { counter: 4, delta };

  // load initial state from localstorage
  let raw = localStorage.getItem("counter");
  if (raw) {
    initialState.counter = JSON.parse(raw);
    initialState.delta = delta;
  }

  return initialState;
}

let initialState = initStore();

export default (state = initialState, action) => {
  let newState;

  switch (action.type) {
    case "INCREMENT":
      newState = { ...state, counter: state.counter + state.delta };
      localStorage.setItem("counter", newState.counter);
      return newState;
    case "DECREMENT":
      if (state.counter <= 0) return state;

      newState = { ...state, counter: state.counter - state.delta };
      localStorage.setItem("counter", newState.counter);
      return newState;
    case "RESET":
      newState = { ...state, counter: 0 };
      localStorage.setItem("counter", 0);
      return newState;
    default:
      return state;
  }
};
