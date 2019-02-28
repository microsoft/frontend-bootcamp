import React from 'react';

export class TodoHeader extends React.Component<any, any> {
  constructor(props) {
    super(props);
    this.state = { labelInput: '' };
  }

  render() {
    const { filter } = this.props;
    return (
      <header>
        <h1>todos - step1-06 demo</h1>
        <div className="addTodo">
          <input className="textfield" placeholder="add todo" />
          <button className="submit">Add</button>
        </div>
        <nav className="filter">
          <button className="completed">all</button>
          <button>active</button>
          <button>completed</button>
        </nav>
      </header>
    );
  }

  _onChange = evt => {
    this.setState({ labelInput: evt.target.value });
  };
}
