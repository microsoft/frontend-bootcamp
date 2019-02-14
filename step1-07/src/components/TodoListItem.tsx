import React from "react";

export class TodoListItem extends React.Component<any, any> {
  
  render() {
    const {text, completed, onTodoToggle, id} = this.props;
    return (
      <li className="todo">
        <label>
          <input onClick={() => onTodoToggle(id)}  type="checkbox" checked={completed} /> {text}
        </label>
      </li>
    );
  }
}
