import React from 'react';
import { AppContext } from '../TodoApp';

export const TodoFooter = () => {
  const { clearCompleted, getTodos } = React.useContext(AppContext);

  const itemCount = getTodos().filter((todo) => todo.status === 'active').length;
  const handleClick = () => {
    clearCompleted();
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
