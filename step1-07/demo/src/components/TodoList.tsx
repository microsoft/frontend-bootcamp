import React from 'react';
import { TodoListItem } from './TodoListItem';
import { FilterTypes, Todos } from '../TodoApp.types';

export class TodoList extends React.Component<any, any> {
  render() {
    const { filter, todos, complete } = this.props;

    // filteredTodos returns an array of filtered todo keys [01,02,03]
    const filteredTodos = Object.keys(todos).filter(id => {
      return filter === 'all' || (filter === 'completed' && todos[id].completed) || (filter === 'active' && !todos[id].completed);
    });

    return (
      <ul className="todos">
        {filteredTodos.map(id => (
          <TodoListItem key={id} id={id} complete={complete} {...todos[id]} />
        ))}
      </ul>
    );
  }
}
