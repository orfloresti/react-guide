import React, { useReducer, useState } from "react";

/**
 * @description State of app
 */
const initial = {
  counter: 0
}

/**
 * Action must be string and can have a payload
 * - example action = { type: '', payload: any }
 */
const reducer = (state, action) => {
  switch (action.type) {
    case "increase":
      return { counter: state.counter + 1 };
    case "reduce":
      return { counter: state.counter - 1 };
    case "set":
      return { counter: action.payload };
    default:
      return;
  }
};

const App = () => {
  
  const [state, dispatch] = useReducer( reducer, initial);
  const [value, setValue] = useState(0);

  return( 
    <div>
      <span>{state.counter}</span>
      <br></br>
      <button onClick={()=> dispatch({type: 'increase'})}>Increase</button>
      <button onClick={()=> dispatch({type: 'reduce'})}>Reduce</button>
      <br></br>
      <input value={value} onChange={e => setValue(e.target.value)}></input>
      <button onClick={()=> dispatch({type: 'set', payload: value})}>Set</button>
    </div>
  )
};

export default App;
