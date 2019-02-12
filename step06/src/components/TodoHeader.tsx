import React from "react";

export class TodoHeader extends React.Component<any, any> {
  render() {
    const { filter } = this.props;
    return (
      <div>
        <h1>todos</h1>
        <input className="textfield" />
        <button className="button add">Add</button>
        <div className="filter">
          <button className={filter == "all" ? "active" : ""}>all</button>
          <button className={filter == "active" ? "active" : ""}>active</button>
          <button className={filter == "completed" ? "active" : ""}>
            completed
          </button>
        </div>
      </div>
    );
  }
}
