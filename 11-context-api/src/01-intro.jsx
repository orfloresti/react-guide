import { createContext, useContext } from "react"

const ContextDefault = createContext('Default value');
const Context2 = createContext('Default value2');


const Provider = ({children}) => {
  return (
    <ContextDefault.Provider value={'my value'}>
      {children}
    </ContextDefault.Provider>
  )
}

const Contenido = () => {
  const ctx = useContext(ContextDefault);
  return (
    <div>{ctx}</div>
  )
}

const Contenido2 = () => {
  const ctx = useContext(Context2);
  return (
    <div>{ctx}</div>
  )
}

function App() {
  return (
    <Provider>
      <Contenido />
      <Contenido2 />
    </Provider>
  )
}

export default App
