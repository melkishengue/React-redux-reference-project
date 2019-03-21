import { Component } from "react";
import React from "react";

class CounterComponent extends Component<> {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="counter">
        <button
          disabled={this.props.counter === 0 ? "disabled" : ""}
          onClick={() => this.props.onDecrement()}
          className="btn inline"
        >
          -
        </button>
        <span className="inline middle">{this.props.counter}</span>
        <button onClick={() => this.props.onIncrement()} className="btn inline">
          +
        </button>

        <button
          disabled={this.props.counter === 0 ? "disabled" : ""}
          onClick={() => this.props.onReset()}
          className="btn block"
        >
          Reset
        </button>
      </div>
    );
  }
}

export default CounterComponent;
