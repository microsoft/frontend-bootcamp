import React from 'react';
import { Button } from './Button';

export class Counter extends React.Component<any, any> {
  constructor(props) {
    super(props);
    this.state = {
      counter: 0
    };
  }
  render() {
    const { counter } = this.state;
    const { text } = this.props;
    return (
      <div>
        {text}: {counter}
        <Button onClick={this._onButtonClick}>Click</Button>
      </div>
    );
  }

  _onButtonClick = () => {
    this.setState((state) => ({ counter: state.counter + 1 }));
  };
}
