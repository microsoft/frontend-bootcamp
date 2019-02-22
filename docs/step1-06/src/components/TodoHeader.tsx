import React from 'react';

export class TodoHeader extends React.Component<any, any> {
  render() {
    const { filter } = this.props;
    return (
      <div>
        <h1>todos</h1>
        <input className="textfield" placeholder="add todo" />
        <button className="button add">Add</button>
        <div className="filter">
          <button className={filter == 'all' ? 'completed' : ''}>all</button>
          <button className={filter == 'active' ? 'completed' : ''}>active</button>
          <button className={filter == 'completed' ? 'completed' : ''}>completed</button>
        </div>
      </div>
    );
  }
}
