import React from 'react';
import { Stack, Customizer, mergeStyles, getTheme } from 'office-ui-fabric-react';
import { TodoFooter } from './TodoFooter';
import { TodoHeader } from './TodoHeader';
import { TodoList } from './TodoList';
import { Store } from '../store';

// TODO: Change me to another theme!
import { TeamsCustomizations } from '@uifabric/theme-samples';

let index = 0;

// TODO: Change this to add other CSS styles like backgroundColor, fontSize, etc
const className = mergeStyles({
  padding: 25,
  ...getTheme().effects.elevation4
});

export class TodoApp extends React.Component<any, Store> {
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
      <Customizer {...TeamsCustomizations}>
        <Stack horizontalAlign="center">
          <Stack style={{ width: 400 }} gap={25} className={className}>
            <TodoHeader addTodo={this._addTodo} setFilter={this._setFilter} filter={filter} />
            <TodoList complete={this._complete} todos={todos} filter={filter} remove={this._remove} edit={this._edit} />
            <TodoFooter clear={this._clear} todos={todos} />
          </Stack>
        </Stack>
      </Customizer>
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
