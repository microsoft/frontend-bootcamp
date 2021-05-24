import React from 'react';

export const TodoHeader = (props) => {
  const [labelInput, setLabelInput] = React.useState('')
  const { filter } = props;

  const handleChange = e => {
    setLabelInput(e.target.value);
  };
  return (
    <header>
      <h1>todos <small>(1.6 demo)</small></h1>
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
