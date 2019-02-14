import React from 'react';

export class TodoHeader extends React.Component<any, any> {
  constructor(props) {
    super(props);
    this.state = { labelInput: '' };
  }

  render() {
    const { filter } = this.props;
    return (
      <div>
        <h1>todos</h1>
        <input value={this.state.labelInput} onChange={this._onChange} className="textfield" />
        <button onClick={this._onAdd} className="button add">
          Add
        </button>
        <div className="filter">
          <button onClick={() => this._onFilter('all')} className={filter == 'all' ? 'active' : ''}>
            all
          </button>
          <button onClick={() => this._onFilter('active')} className={filter == 'active' ? 'active' : ''}>
            active
          </button>
          <button onClick={() => this._onFilter('completed')} className={filter == 'completed' ? 'active' : ''}>
            completed
          </button>
        </div>
      </div>
    );
  }

  _onFilter = filter => {
    this.props.setFilter(filter);
  };

  _onChange = evt => {
    this.setState({ labelInput: evt.target.value });
  };

  _onAdd = () => {
    this.props.addTodo(this.state.labelInput);
    this.setState({ labelInput: '' });
  };
}
