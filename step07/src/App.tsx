import React from "react";
import { TodoFooter } from "./components/TodoFooter";
import { TodoHeader } from "./components/TodoHeader";
import { TodoList } from "./components/TodoList";

export class TodoApp extends React.Component<any, any> {
  constructor(props) {
    super(props);
    this.state = {
      inputValue: "",
      todos: [],
      filter: "all"
    };
  }
  render() {
    const { filter, todos, inputValue } = this.state;
    return (
      <div>
        <TodoHeader
          onInputChange={this._updateInput}
          inputValue={inputValue}
          onTodoSubmit={this._addTodo}
          onFilterClick={this._updateFilter}
          filter={filter}
        />
        <TodoList onTodoToggle={this._toggleTodoComplete} todos={todos} filter={filter} />
        <TodoFooter onClearClick={this._removeCompletedTodos} todos={todos} />
      </div>
    );
  }

  _addTodo = () => {
    const { todos, inputValue } = this.state;
    const id = todos[0] ? todos[0].id + 1 : 0;
    const newTodos = [
      {
        id: id,
        key: id,
        text: inputValue
      },
      ...todos
    ];

    this.setState({
      todos: newTodos,
      inputValue: ""
    });
  };

  _toggleTodoComplete = (id) => {
    this.setState({
      todos: this.state.todos.map(todo => {
        if (todo.id == id) {todo.completed = !todo.completed}
        return todo;
      })
    })
  }

  _removeCompletedTodos = () => {
    this.setState({
      todos: this.state.todos.filter(todo => {
        return !todo.completed;
      })
    })
  }

  _updateFilter = (filter) => {
    this.setState({
      filter: filter
    })
  };

  _updateInput = ev => {
    this.setState({
      inputValue: ev.target.value
    });
  };
}
