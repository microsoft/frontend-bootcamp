import React from 'react';
import { TodoListItem } from './TodoListItem';

export class TodoList extends React.Component<any, any> {
  render() {
    const { filter, todos } = this.props;
    let filteredTodos: typeof todos = {};

    switch (filter) {
      case 'completed':
        Object.keys(todos).forEach(id => {
          if (todos[id].completed) {
            filteredTodos[id] = todos[id];
          }
        });
        break;

      case 'active':
        Object.keys(todos).forEach(id => {
          if (!todos[id].completed) {
            filteredTodos[id] = todos[id];
          }
        });
        break;

      default:
        filteredTodos = todos;
        break;
    }

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
