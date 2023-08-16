import { Routes, Route, NavLink, useMatch} from "react-router-dom";

const Proyecto = () => {
  const match = useMatch("/portafolio/:proyecto_id");
  const { proyecto_id } = match.params;

  return(
    <h2>{proyecto_id}</h2>
  )
}

const Portafolio = () => {
  return (
    <div>
      <h1>Portafolio</h1>
      <ul>
        <li>
          <NavLink className="activado" end to="proyecto-1">Proyecto 1</NavLink>
        </li>
        <li>
          <NavLink style={({isActive}) => ({color: isActive ? "green" : "blue" })} end to="proyecto-2">Proyecto 2</NavLink>
        </li>
      </ul>

      <div>
        <Routes>
          <Route path=":proyecto_id" element={<Proyecto />}></Route>
        </Routes>
      </div>
    </div>
  )
}

function App() {
  return (
    <div>
      <nav>
        <ul>
          <li>
            <NavLink end to="/">Inicio</NavLink>
          </li>
          <li>
            <NavLink end to="/portafolio">Portafolio</NavLink>
          </li>
        </ul>
      </nav>
      <section>
      <Routes>
          <Route path="/" element={<h1>Inicio</h1>}></Route>
          <Route path="/portafolio/*" element={<Portafolio/>}></Route>
        </Routes>
      </section>
    </div>
  );
}

export default App;
