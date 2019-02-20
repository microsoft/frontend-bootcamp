import React from 'react';
import { Stack } from 'office-ui-fabric-react';
import { TodoListItem } from './TodoListItem';

export const TodoList = (props: any) => {
  return (
    <ul className="todos">
      <TodoListItem />
      <TodoListItem />
      <TodoListItem />
    </ul>
  );
};
