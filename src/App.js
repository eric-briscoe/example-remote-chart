import React, { useState } from 'react';
import FunnelChart from './FunnelChart';

const App = () => {
  const [counter, setCounter] = useState(0);

  return (
    <main>
      <h1>Remote 1's counter is cool: {counter}</h1>
      <button onClick={() => setCounter(counter => counter + 1)}>increment</button>
      <FunnelChart />
    </main>
  );
};

export default App;
