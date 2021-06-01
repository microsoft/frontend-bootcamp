import React, { ChangeEventHandler, MouseEventHandler, useState, useContext } from 'react';
import { FilterTypes } from '../TodoApp.types';
import { AppContext } from '../TodoApp';

export const TodoHeader = () => {
  const { changeFilter, addTodo, getFilter } = useContext(AppContext);
  const [inputText, setInputText] = useState<string>('');

  const onInput: ChangeEventHandler<HTMLInputElement> = (e) => {
    setInputText(e.target.value);
  };

  const onSubmit = () => {
    if (inputText.length > 0) addTodo(inputText);
    setInputText('');
  };

  const onFilter: MouseEventHandler<HTMLButtonElement> = (e) => {
    changeFilter(e.currentTarget.textContent as FilterTypes)
  };

  return (
    <header>
      <h1>
        todos <small>(1.7 final)</small>
      </h1>
      <div className="addTodo">
        <input value={inputText} onChange={onInput} className="textfield" placeholder="add todo" />
        <button onClick={onSubmit} className="submit">
          Add
        </button>
      </div>
      <nav className="filter">
        <button onClick={onFilter} className={getFilter() === 'all' && 'selected'}> all</button>
        <button onClick={onFilter} className={getFilter() === 'active' && 'selected'}> active</button>
        <button onClick={onFilter} className={getFilter() === 'completed' && 'selected'}> completed</button>
      </nav>
    </header>
  );
};
