import './App.css';
import ItemListContainer from './components/List/ItemListContainer';
import NavBar from './components/NavBar';
import { Routes, Route, BrowserRouter} from "react-router-dom";
import ItemDetailContainer from './components/Detail/ItemDetailContainer';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <NavBar/>
      <Routes>
        <Route exact path='/' element={<ItemListContainer />}/>
        <Route exact path='/item/:id' element={<ItemDetailContainer />}/>
        <Route path='/category/:categoryId' element={<ItemListContainer/>} />
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
