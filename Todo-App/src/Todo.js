import React, { Component } from "react";

export class Todo extends Component {
  handleRemove = () => {
    this.props.onRemove(this.props.todo.id);
  };

  render() {
    return (
      <div className="todo">
        <p>{this.props.todo.text}</p>
        <button onClick={this.handleRemove}>x</button>
      </div>
    );
  }
}