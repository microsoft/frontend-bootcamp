import React from 'react';

export class TodoHeader extends React.Component {
  render() {
    return (
      <header>
        <h1>todos</h1>
        <div className="addTodo">
          <input className="textfield" placeholder="add todo" />
          <button className="submit">Add</button>
        </div>
        <nav className="filter">
          <button className="active">all</button>
          <button>active</button>
          <button>completed</button>
        </nav>
      </header>
    );
  }
}
