import { Routes, Route, Link, useNavigate } from "react-router-dom";

function App() {
  const navigate = useNavigate();

  const forward = () => {
    navigate(1);
  };

  const back = () => {
    navigate(-1);
  };

  const push = (url) => {
    navigate(url);
  };

  return (
    <div>
      <button onClick={back}>Back</button>
      <button onClick={forward}>Forward</button>
      <button onClick={() => push("/chanchitofeliz")}>Push</button>
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
          <Route path="/" element={<h1>Inicio</h1>}></Route>
          <Route path="/perfil" element={<h1>Perfil</h1>}></Route>
          <Route path="*" element={<h1>404: ruta no encontrada</h1>}></Route>
        </Routes>
      </section>
    </div>
  );
}

export default App;
