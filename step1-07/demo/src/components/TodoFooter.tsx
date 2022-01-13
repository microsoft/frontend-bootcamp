import React from 'react';

export const TodoFooter = (props) => {
  const { clearCompleted, todos } = props;

  const itemCount = todos.filter((todo) => todo.status === 'active').length;


  return (
    <footer>
      <span>
        {itemCount} item{itemCount === 1 ? '' : 's'} left
      </span>
      <button className="submit">
        Clear Completed
      </button>
    </footer>
  );
};
