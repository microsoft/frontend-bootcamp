import React from 'react';

export class TodoListItem extends React.Component<any, any> {
  render() {
    const { label, completed } = this.props;
    // The "no-op" onChange handler prevents a console warning from React at runtime
    return (
      <li className="todo">
        <label>
          <input type="checkbox" checked={completed} onChange={() => undefined} /> {label}
        </label>
      </li>
    );
  }
}
