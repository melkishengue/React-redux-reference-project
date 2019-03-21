import { Component } from "react";
import React from "react";
import { connect } from "react-redux";

import CounterComponent from "./counter";
import TodosComponent from "./todos";

import {
  incrementAction,
  decrementAction,
  resetAction,
  loadTodosAction
} from "../store/actions";

class PageComponent extends Component<> {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="App">
        <CounterComponent
          counter={this.props.counter}
          onIncrement={this.props.onIncrement}
          onDecrement={this.props.onDecrement}
          onReset={this.props.onReset}
        />
        <TodosComponent
          counter={this.props.counter}
          todos={this.props.todos}
          onLoadTodos={this.props.onLoadTodos}
          loadingTodos={this.props.loadingTodos}
          error={this.props.error}
        />
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    todos: state.todosReducers.todos,
    loadingTodos: state.todosReducers.loadingTodos,
    error: state.todosReducers.error,
    counter: state.counterReducers.counter
  };
}

function mapDispatchToProps(dispatch) {
  return {
    onLoadTodos: () => dispatch(loadTodosAction()),
    onIncrement: () => dispatch(incrementAction()),
    onDecrement: () => dispatch(decrementAction()),
    onReset: () => dispatch(resetAction())
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PageComponent);
