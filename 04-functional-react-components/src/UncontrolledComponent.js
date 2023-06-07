import React from 'react'

const App = () => {
  
  const submit = (e)=> {
    e.preventDefault();
    const data = Array.from(new FormData(e.target));
    const formObj = Object.fromEntries(data);
    console.log(formObj);
  }

  return (
    <form onSubmit={submit}>
      <div>
        <span>Hello</span>
        <input name='field'/>
      </div>
      <input name='field-2'/>
      <input type='file' name='file-2'/>
      <input type='submit' value='Send'/>
    </form>
  )
}

export default App