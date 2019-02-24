import React from 'react';

export interface TestMeProps {
  name: string;
}

export interface TestMeState {
  clicked: boolean;
}

export const TestMe = (props: TestMeProps) => {
  return (
    <div id="testMe">
      <InnerMe name={props.name} />
    </div>
  );
};

export class InnerMe extends React.Component<TestMeProps, TestMeState> {
  state = {
    clicked: false
  };

  onClick = () => {
    this.setState({ clicked: true });
  };

  render() {
    return !this.state.clicked ? (
      <div onClick={this.onClick} id="innerMe">
        Hello {this.props.name}, Click Me
      </div>
    ) : (
      <div id="innerMe">Clicked</div>
    );
  }
}
