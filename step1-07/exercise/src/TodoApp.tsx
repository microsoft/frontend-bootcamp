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
      todos: {
        '04': {
          label: 'Todo 4',
          completed: true
        },
        '03': {
          label: 'Todo 3',
          completed: false
        },
        '02': {
          label: 'Todo 2',
          completed: false
        },
        '01': {
          label: 'Todo 1',
          completed: false
        }
      },
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
    const id = index++;

    this.setState(({ todos }) => ({
      todos: { ...todos, [id]: { label, completed: false } }
    }));
  };

  private _complete = id => {
    this.setState(({ todos }) => {
      const newTodos = {
        ...todos,
        [id]: { ...todos[id], completed: !todos[id].completed }
      };

      return {
        todos: newTodos
      };
    });
  };

  private _clear = () => {
    this.setState(({ todos }) => {
      const newTodos = {};

      Object.keys(this.state.todos).forEach(id => {
        if (!todos[id].completed) {
          newTodos[id] = todos[id];
        }
      });

      return {
        todos: newTodos
      };
    });
  };

  private _setFilter = filter => {
    this.setState({
      filter
    });
  };
}
