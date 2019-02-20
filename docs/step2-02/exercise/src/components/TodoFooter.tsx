import React from 'react';

export const TodoFooter = (props: any) => {
  const itemCount = 3;

  return (
    <footer>
      <span>
        {itemCount} item{itemCount > 1 ? 's' : ''} left
      </span>
      <button onClick={() => props.clear()} className="button">
        Clear Completed
      </button>
    </footer>
  );
};
