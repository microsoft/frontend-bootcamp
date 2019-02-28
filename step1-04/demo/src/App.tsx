import React from 'react';

export class App extends React.Component {
  render() {
    let text = 'My App';
    return (
      <div className="App">
        <h2>{text !== '' ? text : 'Default App Name'}</h2>
      </div>
    );
  }
}
