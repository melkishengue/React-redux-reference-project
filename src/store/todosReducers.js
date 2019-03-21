let initialState = {
  todos: [],
  error: {
    hasError: false,
    error: {}
  },
  loadingTodos: false
};

export default (state = initialState, action) => {
  let newState;

  switch (action.type) {
    case "RECEIVED_TODOS":
      newState = { ...state, todos: action.todos };
      return newState;
    case "REMOVE_ERROR":
      newState = {
        ...state,
        error: {
          hasError: false
        }
      };
      return newState;
    case "LOADING_TODOS":
      newState = {
        ...state,
        loadingTodos: action.loading
      };
      return newState;
    case "NETWORK_ERROR":
      newState = { ...state, error: action.error };
      return newState;
    default:
      return state;
  }
};
