import React from 'react';

export class TodoListItem extends React.Component<any, any> {
  render() {
    return (
      <li className="todo">
        <label>
          <input type="checkbox" defaultChecked={false} /> test item
        </label>
      </li>
    );
  }
}
