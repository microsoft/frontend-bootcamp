import React from 'react';
import { FilterTypes } from '../TodoApp.types';

export class TodoHeader extends React.Component<any, any> {
  constructor(props) {
    super(props);
    this.state = { labelInput: '' };
  }

  render() {
    const { filter } = this.props;
    return (
      <header>
        <h1>todos</h1>
        <div className="addTodo">
          <input value={this.state.labelInput} onChange={this._onChange} className="textfield" placeholder="add todo" />
          <button className="submit">Add</button>
        </div>
        <nav className="filter">
          <button className={filter == 'all' ? 'completed' : ''}>all</button>
          <button className={filter == 'active' ? 'completed' : ''}>active</button>
          <button className={filter == 'completed' ? 'completed' : ''}>completed</button>
        </nav>
      </header>
    );
  }

  _onChange = evt => {
    this.setState({ labelInput: evt.target.value });
  };
}
