import React from 'react'
import ReactDOM from 'react-dom/client'
import { Provider } from 'react-redux'
import App from './App.jsx'
import { legacy_createStore as createStore, applyMiddleware } from 'redux'
import { asyncMiddleware } from './middlewares/async'
import { reducer } from './features/todos.js'

const store = createStore(reducer, applyMiddleware(asyncMiddleware));

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
)
