import { Routes, Route, Link, useLocation } from "react-router-dom";

const useQuery = () => {
  return new URLSearchParams(useLocation().search);
}

function App() {
  const query = useQuery();
  const param1 = query.get("param1");
  
  console.log(param1);

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
          <Route path="/" element={<h1>Inicio</h1>}></Route>
          <Route path="/perfil" element={<h1>Perfil</h1>}></Route>
          <Route path="*" element={<h1>404: ruta no encontrada</h1>}></Route>
        </Routes>
      </section>
    </div>
  );
}

export default App;
