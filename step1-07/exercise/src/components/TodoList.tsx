import React from 'react';
import { TodoListItem } from './TodoListItem';
import { FilterTypes, Todos } from '../TodoApp.types';

interface TodoListProps {
  filter: FilterTypes;
  toggleCompleted: (id: string) => void;
  todos: Todos;
}

export const TodoList = (props: TodoListProps) => {
  const { filter, todos, toggleCompleted } = props;

  const filteredTodos = todos.filter((todo) => {
    if (todo.status === 'cleared') return false;
    return filter === 'all' ||
      (filter === 'completed' && todo.status === 'completed') ||
      (filter === 'active' && todo.status === 'active');
  });

  return (
    <ul className="todos">
      {filteredTodos.map((todo) => (
        <TodoListItem key={todo.id} {...todo} toggleCompleted={toggleCompleted} />
      ))}
    </ul>
  );
}
