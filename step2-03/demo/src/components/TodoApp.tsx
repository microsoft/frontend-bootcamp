import React from 'react';
import { Stack, Customizer, mergeStyles, getTheme, loadTheme } from 'office-ui-fabric-react';
import { TodoFooter } from './TodoFooter';
import { TodoHeader } from './TodoHeader';
import { TodoList } from './TodoList';
import { Store } from '../store';
import { FluentCustomizations } from '@uifabric/fluent-theme';

let index = 0;

const className = mergeStyles({
  padding: 25,
  ...getTheme().effects.elevation4
});

// Uncomment to see loadTheme
/*
loadTheme({
  palette: {
    themePrimary: '#c41515',
    themeLighterAlt: '#fdf4f4',
    themeLighter: '#f6d3d3',
    themeLight: '#edaeae',
    themeTertiary: '#dc6666',
    themeSecondary: '#cb2c2c',
    themeDarkAlt: '#b11313',
    themeDark: '#951010',
    themeDarker: '#6e0c0c',
    neutralLighterAlt: '#d5b1b1',
    neutralLighter: '#d2aeae',
    neutralLight: '#c9a7a7',
    neutralQuaternaryAlt: '#bc9c9c',
    neutralQuaternary: '#b39595',
    neutralTertiaryAlt: '#ac8f8f',
    neutralTertiary: '#c38c8c',
    neutralSecondary: '#b06e6e',
    neutralPrimaryAlt: '#9c5454',
    neutralPrimary: '#500e0e',
    neutralDark: '#762a2a',
    black: '#621a1a',
    white: '#dbb5b5'
  }
});
*/

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
      <Customizer {...FluentCustomizations}>
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
    const { todos } = this.state;
    const id = index++;

    this.setState({
      todos: { ...todos, [id]: { label } }
    });
  };

  private _remove = id => {
    const newTodos = { ...this.state.todos };
    delete newTodos[id];

    this.setState({
      todos: newTodos
    });
  };

  private _complete = id => {
    const newTodos = { ...this.state.todos };
    newTodos[id].completed = !newTodos[id].completed;

    this.setState({
      todos: newTodos
    });
  };

  private _edit = (id, label) => {
    const newTodos = { ...this.state.todos };
    newTodos[id] = { ...newTodos[id], label };

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
