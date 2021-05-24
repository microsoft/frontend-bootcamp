import React from 'react';
import { FilterTypes } from '../TodoApp.types';

export const TodoHeader = (props) => {
  const [labelInput, setLabelInput] = React.useState('')
  const { filter } = props;

  const handleChange = e => {
    setLabelInput(e.target.value);
  };
  return (
    <header>
      <h1>todos <small>(1.7 demo)</small></h1>
      <div className="addTodo">
        <input value={labelInput} onChange={handleChange} className="textfield" placeholder="add todo" />
        <button className="submit">Add</button>
      </div>
      <nav className="filter">
        <button className={filter === 'all' ? 'selected' : ''}>all</button>
        <button className={filter === 'active' ? 'selected' : ''}>active</button>
        <button className={filter === 'completed' ? 'selected' : ''}>completed</button>
      </nav>
    </header>
  );
}
