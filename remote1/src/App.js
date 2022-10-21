import React, { useState } from 'libs/react';
import NewButton from './NewButton';

const App = () => {
  const [counter, setCounter] = useState(0);

  return (
    <main>
      <h1>Remote 1's counter: {counter}</h1>
      <button onClick={() => setCounter(counter => counter + 1)}>increment</button>
      <NewButton />
    </main>
  );
};

export default App;
