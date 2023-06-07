import React, { useState } from "react";

/**
 * @description Hooks rules
 * - Don't use hooks in loops
 * - Always in the top of the component
 * - Just can be called in:
 * 1. React components
 * 2. Custom hooks
 * - If you create a custom hook its named should be use*
 */


const useCounter = (init) => {
  const [counter, setCounter] = useState(init);
  const increase = () => setCounter(counter + 1);

  return [counter, increase];
}

const App = () => {
  const [counter, setCounter] = useCounter(0);
  return (
    <div>
      <span>Counter: {counter}</span>
      <br></br>
      <button onClick={setCounter}>Increase</button>
    </div>
  );
};

export default App;
