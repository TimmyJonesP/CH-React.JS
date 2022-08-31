import './App.css';
import Categorias from './components/Categorias';
import NavBar from './components/NavBar';

function App() {
  const TiposVinos = ["Malbec", "Pinot Noir", "Cabernet Sauvignon", "Vino Patero"]
  const vinos = TiposVinos.map(vinos => (
    <Categorias valor={vinos} />
  ))
  return (
    <div className="App">
      <NavBar />
      <ul>
        {vinos}
      </ul>
    </div>
  );
}

export default App;
