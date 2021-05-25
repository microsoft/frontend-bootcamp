import React from 'react';
import { TodoFooter } from './components/TodoFooter';
import { TodoHeader } from './components/TodoHeader';
import { TodoList } from './components/TodoList';
import { Todo, Todos, FilterTypes } from './TodoApp.types';

interface AppContextProps {
  addTodo: (label: string) => void;
  toggleCompleteTodo: (id: string) => void;
  clearFinishedTodos: () => void;
  changeFilter: (filter: FilterTypes) => void;
}

export const AppContext = React.createContext<AppContextProps>(undefined);

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
  const [filter, setFilter] = React.useState<FilterTypes>('all');
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

  const toggleCompleteTodo = (id) => {
    const newTodos = todos.map((todo): Todo => {
      if (todo.id === id) {
        return { ...todo, status: todo.status === 'active' ? 'completed' : 'active' };
      } else {
        return todo;
      }
    });
    setTodos(newTodos);
  };

  const clearFinishedTodos = () => {
    const updatedTodos = todos.map((todo): Todo => {
      if (todo.status === 'completed') {
        return { ...todo, status: 'cleared' };
      } else {
        return todo;
      }
    });
    setTodos(updatedTodos);
  };

  const changeFilter = (filter) => {
    setFilter(filter);
  };

  return (
    <AppContext.Provider value={{ addTodo, toggleCompleteTodo, clearFinishedTodos, changeFilter }}>
      <TodoHeader filter={filter} />
      <TodoList todos={todos} filter={filter} />
      <TodoFooter todos={todos} />
    </AppContext.Provider>
  );
};
