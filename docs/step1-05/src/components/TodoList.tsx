import React from 'react';
import { TodoListItem } from './TodoListItem';

export class TodoList extends React.Component<any, any> {
  render() {
    const { filter, todos } = this.props;

    return (
      <ul className="todos">
         <TodoListItem/>
         <TodoListItem/> 
         <TodoListItem/> 
         <TodoListItem/>  
      </ul>
    );
  }
}
