import React from 'react';
import { Button } from './Button';

export class Counter extends React.Component<{ text: string }, { counter: number }> {
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
        <Button
          onClick={() => {
            this.setState({ counter: counter + 1 });
          }}
        >
          Click
        </Button>
      </div>
    );
  }
}
