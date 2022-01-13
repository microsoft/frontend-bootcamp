import React from 'react';

export const TodoHeader = (props) => {

  const [inputText, setInputText] = React.useState('')
  const { filter } = props;

  const handleChange = e => {
    setInputText(e.target.value);
  };
  return (
    <header>
      <h1>todos <small>(1.6 demo)</small></h1>
      <div className="addTodo">
        <input className="textfield" placeholder="add todo" />
        <button className="submit">Add</button>
      </div>
      <nav className="filter">
        <button className="selected">all</button>
        <button>active</button>
        <button>completed</button>
      </nav>
    </header>
  );
}
