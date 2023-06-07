import React, { useRef } from 'react'

const App = () => {
  const inputRef = useRef();
  const click = () => {
    console.log(inputRef.current.clientHeight);
  }
  const focus = () => {
    inputRef.current.focus()
  }

  return (
    <div>
      <input ref={inputRef}  />
      <button onClick={focus}>Focus</button>
    </div>
  )
}

export default App