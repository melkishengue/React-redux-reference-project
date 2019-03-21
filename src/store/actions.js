import todoService from "../services/todoService";

export function incrementAction() {
  return {
    type: "INCREMENT"
  };
}

export function decrementAction() {
  return {
    type: "DECREMENT"
  };
}

export function resetAction() {
  return {
    type: "RESET"
  };
}
export function receivedTodosAction(todos) {
  return {
    type: "RECEIVED_TODOS",
    todos
  };
}

export function networkErrorAction(error) {
  return {
    type: "NETWORK_ERROR",
    error: {
      hasError: true,
      error
    }
  };
}

export function removeErrorAction() {
  return {
    type: "REMOVE_ERROR"
  };
}

export function loadingTodosAction(loading) {
  return {
    type: "LOADING_TODOS",
    loading
  };
}

// redux-thunk in action
export function loadTodosAction() {
  return async function(dispatch) {
    try {
      dispatch(loadingTodosAction(true));
      let todos = await todoService.fetchTodos();
      dispatch(receivedTodosAction(todos));
    } catch (error) {
      dispatch(networkErrorAction("An error occurred while fetching todos..."));
      setTimeout(() => {
        dispatch(removeErrorAction());
      }, 3000);
    } finally {
      dispatch(loadingTodosAction(false));
    }
  };
}
