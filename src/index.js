import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { createStore, applyMiddleware, combineReducers } from "redux";
import todosReducers from "./store/todosReducers";
import counterReducers from "./store/counterReducers";
import { loadTodosAction } from "./store/actions";
import PageComponent from "./components/page";
import thunkMiddleware from "redux-thunk";
import { createLogger } from "redux-logger";
import "./styles.css";

let rootReducer = combineReducers({
  counterReducers,
  todosReducers
});

const loggerMiddleware = createLogger();

const store = createStore(
  rootReducer,
  applyMiddleware(
    thunkMiddleware, // lets us dispatch() functions
    loggerMiddleware // neat middleware that logs actions
  )
);

function App() {
  return (
    <Provider store={store}>
      <PageComponent />
    </Provider>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);

store.dispatch(loadTodosAction());
