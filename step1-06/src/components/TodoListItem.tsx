import React from 'react';

export class TodoListItem extends React.Component<any, any> {
  render() {
    const { label, completed } = this.props;
    return (
      <li className="todo">
        <label>
          <input type="checkbox" checked={completed} /> {label}
        </label>
      </li>
    );
  }
}
