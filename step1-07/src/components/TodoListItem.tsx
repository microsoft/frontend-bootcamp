import React from 'react';

export class TodoListItem extends React.Component<any, any> {
  render() {
    const { label, completed, complete, id } = this.props;

    return (
      <li className="todo">
        <label>
          <input type="checkbox" checked={completed} onChange={() => complete(id)} /> {label}
        </label>
      </li>
    );
  }
}
