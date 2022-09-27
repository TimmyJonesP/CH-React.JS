import './App.css';
import ItemListContainer from './components/List/ItemListContainer';
import NavBar from './components/NavBar';
import { Routes, Route, BrowserRouter} from "react-router-dom";
import ItemDetailContainer from './components/Detail/ItemDetailContainer';
import  Provider from './utilitys/context';
import CartListContainer from "./components/Cart/CartListContainer"

function App() {
  return (
    <div className="App">
      <Provider>

        <BrowserRouter>
          <NavBar/>
            <Routes>
              <Route exact path='/' element={<ItemListContainer />}/>
              <Route exact path='/item/:id' element={<ItemDetailContainer />}/>
              <Route path='/category/:categoryId' element={<ItemListContainer/>} />
              <Route path='/cart' element={<CartListContainer />} />
          </Routes>
        </BrowserRouter>
      </Provider>
    </div>
  );
}

export default App;
