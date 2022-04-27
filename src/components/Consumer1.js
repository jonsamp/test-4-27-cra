import React from 'react';
import useToggle from '../hooks/useToggle';

export function Consumer1() {
  const [on, setOn] = useToggle(false);
  console.log('Rendering Consumer1');

  return (
    <div style={{ backgroundColor: 'lightpink', padding: '1rem' }}>
      <p>Consumer1: {on ? 'on' : 'off'}</p>
      <button onClick={() => setOn(!on)}>Toggle</button>
    </div>
  );
}
