import React from 'react';
import { TodoFooter } from './components/TodoFooter';
import { TodoHeader } from './components/TodoHeader';
import { TodoList } from './components/TodoList';
import { Todo, Todos, FilterTypes } from './TodoApp.types';

const defaultTodos: Todos = [
  {
    id: '04',
    label: 'Todo 4',
    status: 'completed',
  },
  {
    id: '03',
    label: 'Todo 3',
    status: 'active',
  },
  {
    id: '02',
    label: 'Todo 2',
    status: 'active',
  },
  {
    id: '01',
    label: 'Todo 1',
    status: 'active',
  },
];

export const TodoApp = () => {
  const [filter, setFilter] = React.useState('all');
  const [todos, setTodos] = React.useState<Todos>(defaultTodos);

  const addTodo = (label: string): void => {
    const getId = () => Date.now().toString();
    const newTodo: Todo = {
      id: getId(),
      label: label,
      status: 'active',
    };
    setTodos([...todos, newTodo]);
  };

  const toggleCompleted = (id: string) => {
    const newTodos = todos.map((todo): Todo => {
      if (todo.id === id) {
        return { ...todo, status: todo.status === 'active' ? 'completed' : 'active' };
      } else {
        return todo;
      }
    });
    setTodos(newTodos);
  };

  const clearCompleted = () => {
    const updatedTodos = todos.map((todo): Todo => {
      if (todo.status === 'completed') {
        return { ...todo, status: 'cleared' };
      } else {
        return todo;
      }
    });
    setTodos(updatedTodos);
  };

  const changeFilter = (filter: FilterTypes) => {
    setFilter(filter);
  };
  return (
    <div>
      <TodoHeader filter={filter} changeFilter={changeFilter} addTodo={addTodo} />
      <TodoList todos={todos} filter={'all'} toggleCompleted={toggleCompleted} />
      <TodoFooter todos={todos} clearCompleted={clearCompleted} />
    </div>
  );
}
