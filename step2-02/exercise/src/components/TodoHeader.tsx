import React from 'react';
import { FilterTypes } from '../store';

export class TodoHeader extends React.Component<{}, {}> {
  render() {
    return (
      <div>
        <h1>todos - step2-02 exercise</h1>
        <input className="textfield" placeholder="add todo" />
        <button className="button add">Add</button>
        <div className="filter">
          <button>all</button>
          <button>active</button>
          <button>completed</button>
        </div>
      </div>
    );
  }
}
