import { NavBar } from './components/NavBar';
import { ItemListContainer } from './components/ItemListContainer';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import {ItemDetailContainer} from './components/ItemDetailContainer';

function App() {
  return (
    <>
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path="/" element={<ItemListContainer greeting="Productos" />}></Route>
          <Route path="/category/:id" element={<ItemListContainer greeting="Productos" />}></Route>
          <Route path="/item/:id" element={<ItemDetailContainer greeting="Productos"/>}></Route>

        </Routes>



      </BrowserRouter>
    </>
  );
}

export default App;
