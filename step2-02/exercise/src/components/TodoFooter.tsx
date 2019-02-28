import React from 'react';
import { Store } from '../store';

// TODO: import DefaultButton, Stack, and Text

interface TodoFooterProps {
  clear: () => void;
  todos: Store['todos'];
}

export const TodoFooter = (props: TodoFooterProps) => {
  const itemCount = Object.keys(props.todos).filter(id => !props.todos[id].completed).length;

  // TODO:
  // 1. replace the <footer> with the Fabric control <Stack>
  // 2. replace the <span> with the Fabric control <Text>
  // 3. replace the <button> with Fabric control <DefaultButton>

  return (
    <footer>
      <span>
        {itemCount} item{itemCount <= 1 ? '' : 's'} left
      </span>
      <button onClick={() => props.clear()} className="button">
        Clear Completed
      </button>
    </footer>
  );
};
