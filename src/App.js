import React from 'react';  
import './App.css';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import ItemListContainer from './components/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer';
import  NavBarMac from './components/navbar.js';
import Cart from './components/Cart';

function App() {
  return (
    <div className="App">

  <BrowserRouter>

    < NavBarMac />  
    <Routes>
      <Route path='/' element= {<ItemListContainer />}/>
      <Route path='/categories/:id' element= {<ItemListContainer />}/>
      <Route path='/detail/:detalleId' element= {<ItemDetailContainer/>} /> 
      <Route path="/cart" element = { <Cart /> } />
      <Route path='/*' element= {<Navigate to='/' replace/>} />
    </Routes>

  </BrowserRouter>


    </div>
  );
}

export default App;