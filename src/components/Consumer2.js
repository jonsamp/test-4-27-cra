import React from 'react';
import useToggle from '../hooks/useToggle';

export function Consumer2() {
  const [toggleValue, toggle] = useToggle(false);

  return (
    <div style={{ backgroundColor: 'lightcyan', padding: '1rem' }}>
      <p>Consumer2: {toggleValue ? 'on' : 'off'}</p>
      <button onClick={toggle}>Toggle</button>
    </div>
  );
}
