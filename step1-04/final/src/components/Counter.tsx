import React from 'react';
import { Button } from './Button';

export class Counter extends React.Component<any, any> {
  constructor(props) {
    super(props);
    this.state = {
      clicks: 0
    };
  }
  render() {
    const { text } = this.props;
    const { clicks } = this.state;
    return (
      <div>
        {text}: {clicks}
        <Button onClick={this._onButtonClick}>Click</Button>
      </div>
    );
  }

  _onButtonClick = () => {
    this.setState({
      clicks: this.state.clicks + 1
    });
  };
}
