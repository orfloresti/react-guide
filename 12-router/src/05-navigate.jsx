import { Routes, Route, Link, Navigate } from "react-router-dom";

const Portafolio = () => {
  const loggedIn = false;

  if(!loggedIn) {
    return <Navigate to="/" replace={true} />
  }

  return(
    <h1>Portafolio</h1>
  )
}

function App() {
  return (
    <div>
      <nav>
        <ul>
          <li>
            <Link to="/">Inicio</Link>
          </li>
          <li>
            <Link to="/perfil">Perfil</Link>
          </li>
          <li>
            <Link to="/portafolio">Portafolio</Link>
          </li>
        </ul>
      </nav>
      <section>
        <Routes>
          <Route path="/inicio" element={<h1>Inicio</h1>}></Route>
          <Route path="/perfil" element={<h1>Perfil</h1>}></Route>
          <Route path="/portafolio" element={<Portafolio/>}></Route>
          <Route path="/" element={<Navigate to="/inicio" replace={true} />}></Route>
        </Routes>
      </section>
    </div>
  );
}

export default App;
