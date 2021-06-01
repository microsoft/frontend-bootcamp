import React from 'react';

export const TodoHeader = (props) => {
  const [inputText, setInputText] = React.useState<string>('');
  const { filter, addTodo, changeFilter } = props;

  const onInput = (e) => {
    setInputText(e.target.value);
  };

  const onSubmit = () => {
    if (inputText.length > 0) addTodo(inputText);
    setInputText('');
  };

  const onFilter = (e) => {
    changeFilter(e.currentTarget.textContent)
  };

  return (
    <header>
      <h1>todos <small>(1.6 exercise)</small></h1>
      <div className="addTodo">
        <input value={inputText} onChange={onInput} className="textfield" placeholder="add todo" />
        <button className="submit">Add</button>
      </div>
      <nav className="filter">
        <button className={filter === 'all' && 'selected'}> all</button>
        <button className={filter === 'active' && 'selected'}> active</button>
        <button className={filter === 'completed' && 'selected'}> completed</button>
      </nav>
    </header>
  );
}