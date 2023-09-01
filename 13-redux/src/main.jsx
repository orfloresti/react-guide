import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { legacy_createStore as createStore } from 'redux'

const store = createStore((state = 0, action) => {
  switch(action.type) {
    case 'action':
      return action.payload;
  }
  return state;
})

store.dispatch({type: 'action', payload: 2});
console.log(store.getState());

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
