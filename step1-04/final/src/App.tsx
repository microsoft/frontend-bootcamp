import React from 'react';
import { Counter } from './components/Counter';

export class App extends React.Component {
  render() {
    return (
      <div className="App">
        <h2>My App</h2>
        <Counter text="Chickens" />
        <Counter text="Ducks" />
      </div>
    );
  }
}
