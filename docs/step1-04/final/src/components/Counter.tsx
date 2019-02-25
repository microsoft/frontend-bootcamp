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
        <Button onClick={this._onButtonCLick}>Click</Button>
      </div>
    );
  }

  _onButtonCLick = () => {
    this.setState({ counter: this.state.counter + 1 });
  };
}
