import React from 'react';

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
        <button onClick={this._onButtonClick}>Click</button>
      </div>
    );
  }

  _onButtonClick = () => {
    this.setState({
      clicks: this.state.clicks + 1
    });
  };
}
