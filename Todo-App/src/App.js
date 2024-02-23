import React, { Component } from "react";
import "./styles.css";
import { List } from "./List";
import { Form } from "./Form";

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      todos: [
        { id: 1, text: "Do the laundry" },
        { id: 2, text: "Iron the clothes" },
        { id: 3, text: "Go for a walk" }
      ]
    };
  }

  handleAdd = (newTodo) => {
    this.setState((prevState) => ({
      todos: [...prevState.todos, { id: Date.now(), text: newTodo }]
    }));
  };

  handleRemove = (id) => {
    this.setState((prevState) => ({
      todos: prevState.todos.filter((todo) => todo.id !== id)
    }));
  };

  render() {
    return (
      <div className="App">
        <span>Todo</span>
        <Form onAdd={this.handleAdd} />
        <List todos={this.state.todos} onRemove={this.handleRemove} />
      </div>
    );
  }
}