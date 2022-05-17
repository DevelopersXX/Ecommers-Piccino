import './App.css';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';

//importamos los comp creados
import About from './components/about';
import Contact from './components/contact';
import Home from './components/home';
import Productos from './components/productos';
import NavBarMac from './components/navbar';
import ItemListContainer from './components/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer';

function App() {
  return (
    <div className="App">

<BrowserRouter>
<Routes>
  <Route path='/' element={ <NavBarMac /> }>
    <Route index element={ <Home /> } />
    <Route path='about' element={ <About /> } />
    <Route path='contact' element={ <Contact /> } />
    <Route path='productos' element={ <Productos /> } />
    <Route path='*' element={ <Navigate replace to="/"/> }/>
  </Route>
</Routes> 
</BrowserRouter>
  <div>
    <ItemListContainer greeting='Bienvenido a Macentos!!'/>
  </div>
  <div>
    <ItemDetailContainer id={2} />
  </div>


    </div>
  );
}

export default App;