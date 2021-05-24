import React from 'react';
import { Button } from './Button';

export const Counter = props => {
  const [clicks, setClicks] = React.useState(0);
  const handleClick = () => setClicks(clicks + 1);
  const { text } = props;
  return (
    <div>
      {text}: {clicks}
      <Button onClick={handleClick}>Click</Button>
    </div>
  );
}
