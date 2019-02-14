import React from 'react';
import { FilterTypes } from '../TodoApp.types';

interface TodoHeaderProps {
  addTodo: (label: string) => void;
  setFilter: (filter: FilterTypes) => void;
  filter: FilterTypes;
}

export class TodoHeader extends React.Component<TodoHeaderProps, any> {
  constructor(props) {
    super(props);
    this.state = { labelInput: '' };
  }

  render() {
    const { filter, setFilter } = this.props;
    return (
      <div>
        <h1>todos</h1>
        <input value={this.state.labelInput} onChange={this._onChange} className="textfield" />
        <button onClick={this._onAdd} className="button add">
          Add
        </button>
        <div className="filter">
          <button onClick={() => setFilter('all')} className={filter == 'all' ? 'active' : ''}>
            all
          </button>
          <button onClick={() => setFilter('active')} className={filter == 'active' ? 'active' : ''}>
            active
          </button>
          <button onClick={() => setFilter('completed')} className={filter == 'completed' ? 'active' : ''}>
            completed
          </button>
        </div>
      </div>
    );
  }

  _onChange = evt => {
    this.setState({ labelInput: evt.target.value });
  };

  _onAdd = () => {
    this.props.addTodo(this.state.labelInput);
    this.setState({ labelInput: '' });
  };
}
