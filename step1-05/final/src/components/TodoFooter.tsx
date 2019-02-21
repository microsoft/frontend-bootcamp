import React from 'react';

export const TodoFooter = (props: any) => {
  return (
    <footer>
      <span>
        <span className="remaining">4</span> items left
      </span>
      <button className="submit">Clear Completed</button>
    </footer>
  );
};
