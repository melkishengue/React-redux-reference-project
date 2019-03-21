import { Component } from "react";
import React from "react";

class TodosComponent extends Component<> {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <button
          disabled={this.props.loadingTodos}
          onClick={() => this.props.onLoadTodos()}
          className="btn block"
        >
          Load todos
        </button>

        <div id="todo-container">
          {this.props.todos.length > 0 &&
            !this.props.loadingTodos &&
            this.props.todos
              .slice(this.props.todos.length - this.props.counter)
              .map(todo => {
                return (
                  <div key={todo.id} className="todo">
                    {todo.title}
                  </div>
                );
              })}

          {this.props.todos.length > 0 &&
            !this.props.loadingTodos &&
            this.props.counter === 0 && (
              <div className="no-todos">
                You choosed not to show todos. Do you hate todos !? 😕
              </div>
            )}
        </div>

        {this.props.loadingTodos && (
          <div className="lds-hourglass loading-text "> lOaDiNG </div>
        )}

        {this.props.error.hasError && (
          <div className="error">{this.props.error.error}</div>
        )}
      </div>
    );
  }
}

export default TodosComponent;
