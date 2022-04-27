import React from 'react';
import useToggle from '../hooks/useToggle';

export function Consumer2() {
  const [on, setOn] = useToggle(false);
  console.log('Rendering Consumer2');

  return (
    <div style={{ backgroundColor: 'lightcyan', padding: '1rem' }}>
      <p>Consumer2: {on ? 'on' : 'off'}</p>
      <button onClick={() => setOn((prev) => !prev)}>
        Toggle: {on ? 'off' : 'on'}
      </button>
    </div>
  );
}
