import React from 'react';

export const TodoFooter = (props) => {
  const itemCount = props.todos.filter((todo) => todo.status === 'active').length;
  return (
    <footer>
      <span>4 items left</span>
      <button className="submit">Clear Completed</button>
    </footer>
  );
};
