import React from 'react';

export const TodoHeader = () => {
  return (
    <header>
      <h1>todos <small>(1.5 exercise)</small></h1>
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
  )
}
