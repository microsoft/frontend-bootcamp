import React, { ChangeEventHandler, MouseEventHandler, useState, useContext } from 'react';
import { FilterTypes } from '../TodoApp.types';
import { AppContext } from '../TodoApp';

interface TodoHeaderProps {
  filter: FilterTypes;
}

export const TodoHeader = (props: TodoHeaderProps) => {
  const [inputText, setInputText] = useState<string>('');
  const { filter } = props;
  const { changeFilter, addTodo } = useContext(AppContext);

  const onInput: ChangeEventHandler<HTMLInputElement> = (e) => {
    setInputText(e.target.value);
  };
  const onSubmit = () => inputText && addTodo(inputText);
  const onFilterClick: MouseEventHandler<HTMLButtonElement> = (e) => changeFilter(e.currentTarget.textContent as FilterTypes);

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
        <button onClick={onFilterClick} className={filter === 'all' ? 'selected' : ''}>
          all
        </button>
        <button onClick={onFilterClick} className={filter === 'active' ? 'selected' : ''}>
          active
        </button>
        <button onClick={onFilterClick} className={filter === 'completed' ? 'selected' : ''}>
          completed
        </button>
      </nav>
    </header>
  );
};
