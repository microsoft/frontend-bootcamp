import React from 'react';

export class TodoHeader extends React.Component {
  render() {
    return (
      <div>
        <h1>todos</h1>
        <input className="textfield" placeholder="add todo" />
        <button className="button add">Add</button>
        <div className="filter">
          <button className="completed">all</button>
          <button>active</button>
          <button>completed</button>
        </div>
      </div>
    );
  }
}
