import './App.css';
import ItemListContainer from './components/ItemListContainer';
import NavBar from './components/NavBar';
import { BrowserRouter, Routes, Route} from "react-router-dom";
import ItemDetailContainer from './components/ItemDetailContainer';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
        <Route exact path="/" element=""></Route>
      </Routes>
      <NavBar/>
      <ItemListContainer/>
      <ItemDetailContainer/>
      </BrowserRouter>
    </div>
  );
}

export default App;
