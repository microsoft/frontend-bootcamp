import React from "react";

export const TodoFooter = (props: any) => {
  const items = props.todos.filter(todo => !todo.completed)
  return (
    <footer>
      <span> {items.length} items left </span>
      <button onClick={props.onClearClick} className="button">Clear Completed</button>
    </footer>
  );
};
