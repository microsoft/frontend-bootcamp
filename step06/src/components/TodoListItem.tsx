import React from "react";

export class TodoListItem extends React.Component<any, any> {
  
  render() {
    const {text, completed} = this.props;
    return (
      <li className="todo">
        <label>
          <input type="checkbox" checked={completed} /> {text}
        </label>
      </li>
    );
  }
}
