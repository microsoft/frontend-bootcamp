import React from 'react';
import { Todos } from '../TodoApp.types';
import { AppContext } from '../TodoApp';
interface TodoFooterProps {
  todos: Todos;
}

export const TodoFooter = (props: TodoFooterProps) => {
  const itemCount = props.todos.filter((todo) => todo.status === 'active').length;
  const { clearFinishedTodos } = React.useContext(AppContext);
  const handleClick = () => {
    clearFinishedTodos();
  };

  return (
    <footer>
      <span>
        {itemCount} item{itemCount === 1 ? '' : 's'} left
      </span>
      <button onClick={handleClick} className="submit">
        Clear Completed
      </button>
    </footer>
  );
};
