import React from 'react';
import { Button } from './Button';

export class Counter extends React.Component<any, any> {
  constructor(props) {
    super(props);
    this.state = {
      counter: props.start
    };
  }
  render() {
    return (
      <div>
        <span> {this.state.counter} </span>
        <Button
          onClick={() => {
            this.setState({ counter: this.state.counter + 1 });
          }}
        >
          Click Me
        </Button>
      </div>
    );
  }
}
