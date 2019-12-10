import React from 'react';
import { Stack } from 'office-ui-fabric-react';
import { TodoFooter } from './TodoFooter';
import { TodoHeader } from './TodoHeader';
import { TodoList } from './TodoList';
import { Store } from '../store';
import { TodoContext } from '../TodoContext';

let index = 0;

export class TodoApp extends React.Component<any, Store> {
  constructor(props) {
    super(props);
    this.state = {
      todos: {},
      filter: 'all'
    };
  }
  render() {
    return (
      <TodoContext.Provider
        value={{
          ...this.state,
          addTodo: this._addTodo,
          remove: this._remove,
          complete: this._complete,
          clear: this._clear,
          setFilter: this._setFilter,
          edit: this._edit
        }}
      >
        <Stack horizontalAlign="center">
          <Stack style={{ width: 400 }} gap={25}>
            <TodoHeader />
            <TodoList />
            <TodoFooter />
          </Stack>
        </Stack>
      </TodoContext.Provider>
    );
  }

  private _addTodo = label => {
    const id = index++;

    this.setState(({ todos }) => ({
      todos: { ...todos, [id]: { label, completed: false } }
    }));
  };

  private _remove = id => {
    this.setState(({ todos }) => {
      const newTodos = { ...todos };
      delete newTodos[id];

      return {
        todos: newTodos
      };
    });
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

  private _edit = (id, label) => {
    this.setState(({ todos }) => {
      const newTodos = {
        ...todos,
        [id]: { ...todos[id], label }
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
