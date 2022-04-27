import React from 'react';
import useToggle from '../hooks/useToggle';

export function Consumer1() {
  const [toggleValue, toggle] = useToggle(false);

  return (
    <div style={{ backgroundColor: 'lightpink', padding: '1rem' }}>
      <p>Consumer1: {toggleValue ? 'on' : 'off'}</p>
      <button onClick={toggle}>Toggle</button>
    </div>
  );
}
