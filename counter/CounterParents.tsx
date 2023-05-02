import * as React from 'react';
import CounterChild1 from './CounterChild1';
import CounterChild2 from './CounterChild2';
import CounterChild3 from './CounterChild3';
import CounterDisplay from './CounterDisplay';

export default function CounterParent() {
  return (
    <div style={{ background: '#246643', padding: '5px' }}>
      <CounterChild1 />
      <CounterChild2 />
      <CounterChild3 />
      <CounterDisplay />
    </div>
  );
}
