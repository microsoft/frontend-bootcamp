import React from "react";

export class TodoHeader extends React.Component<any, any> {
  render() {
    const { filter, inputValue, onInputChange, onTodoSubmit, onFilterClick } = this.props;
    return (
      <div>
        <h1>todos</h1>
        <input value={inputValue} onChange={onInputChange} className="textfield" />
        <button onClick={onTodoSubmit} className="button add">Add</button>
        <div className="filter">
          <button onClick={() => onFilterClick('all')} className={filter == "all" ? "active" : ""}>all</button>
          <button onClick={() => onFilterClick('active')} className={filter == "active" ? "active" : ""}>active</button>
          <button onClick={() => onFilterClick('completed')} className={filter == "completed" ? "active" : ""}>
            completed
          </button>
        </div>
      </div>
    );
  }
}
