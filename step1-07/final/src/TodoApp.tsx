import React from 'react';
import { TodoFooter } from './components/TodoFooter';
import { TodoHeader } from './components/TodoHeader';
import { TodoList } from './components/TodoList';
import { Todos, FilterTypes } from './TodoApp.types';

let index = 0;

const defaultTodos: Todos = {
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
}

export const TodoApp = () => {
  const [filter, setFilter] = React.useState<FilterTypes>('all');
  const [todos, setTodos] = React.useState<Todos>(defaultTodos);

  const addTodo = (label: string): void => {
    const id = index++;
    setTodos({
      ...todos,
      [id]: { label, completed: false }
    })
  };

  const complete = (id: string): void => {
    const todo = todos[id];
    const newTodos = {
      ...todos,
      [id]: { ...todo, completed: !todo.completed }
    };

    setTodos(newTodos)
  };

  const clear = (): void => {
    const newTodos = {};

    Object.keys(todos).forEach(id => {
      if (!todos[id].completed) {
        newTodos[id] = todos[id];
      }
    });

    setTodos(newTodos)
  };


  return (
    <div>
      <TodoHeader addTodo={addTodo} setFilter={setFilter} filter={filter} />
      <TodoList complete={complete} todos={todos} filter={filter} />
      <TodoFooter clear={clear} todos={todos} />
    </div>
  );


}
