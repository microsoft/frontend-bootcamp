import React from 'react';
import { TodoFooter } from './components/TodoFooter';
import { TodoHeader } from './components/TodoHeader';
import { TodoList } from './components/TodoList';
import { Todos, FilterTypes } from './TodoApp.types';

let index = 0;

export class TodoApp extends React.Component<any, { todos: Todos; filter: FilterTypes }> {
  constructor(props) {
    super(props);
    this.state = {
      todos: {},
      filter: 'all'
    };
  }

  render() {
    const { filter, todos } = this.state;
    return (
      <div>
        <TodoHeader addTodo={this._addTodo} setFilter={this._setFilter} filter={filter} />
        <TodoList complete={this._complete} todos={todos} filter={filter} />
        <TodoFooter clear={this._clear} todos={todos} />
      </div>
    );
  }

  // business logic

  private _addTodo = label => {
    const { todos } = this.state;
    const id = index++;

    this.setState({
      todos: { ...todos, [id]: { label, completed: false } }
    });
  };

  private _complete = id => {
    const newTodos = { ...this.state.todos };
    newTodos[id].completed = !newTodos[id].completed;

    this.setState({
      todos: newTodos
    });
  };

  private _clear = () => {
    const { todos } = this.state;
    const newTodos = {};

    Object.keys(this.state.todos).forEach(id => {
      if (!todos[id].completed) {
        newTodos[id] = todos[id];
      }
    });

    this.setState({
      todos: newTodos
    });
  };

  private _setFilter = filter => {
    this.setState({
      filter: filter
    });
  };
}
