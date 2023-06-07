import { useState, useEffect } from "react";

const useCounter = (init) => {
  const [counter, setCounter] = useState(init);
  const increase = () => setCounter(counter + 1);

  return [counter, increase];
}

const Interval = ({counter}) => {
  useEffect(() => {
    const i = setInterval(()=>  console.log(counter), 1000 )
    return () => clearInterval(i);
  }, [counter]);
  
  return <p>Interval</p>

}

const App = () => {
  const [counter, setCounter] = useCounter(0);

  /**
   * - To run always don't pass dependencies
   * - If pass dependecies will run everytime deps change
   * - An empty deps array will run just one time at the beggining
   */
  useEffect( ()=> {
    document.title = counter;
  }, [counter]);

  return (
    <div>
      <span>Counter: {counter}</span>
      <br></br>
      <button onClick={setCounter}>Increase</button>
      <Interval counter={counter}/>
    </div>
  );
};

export default App;
