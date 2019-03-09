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
  setState(arg0: { clicked: boolean; }): any {
    throw new Error("Method not implemented.");
  }
  state = {
    clicked: false
  };

  onClick = () => {
    this.setState({ clicked: true });
  };
  props: any;

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
