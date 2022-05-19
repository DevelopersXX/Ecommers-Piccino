import React from 'react';
import { useState } from 'react';
import './style/ItemCount.css';
import { Button } from "react-bootstrap"

const ItemCount = ({ onAdd }) => {
  const initial = 1;
  const stock = 5; 

  const [cant, setCant] = useState(initial);

  
  const addProduct = (num) => {
    setCant(cant + num);
  };

  

  return (
    <div className="count-container">
      <div className="count-container__contador">
        <button
          className="count-container__button"
          onClick={() => addProduct(-1)}
          disabled={cant === initial ? true : null}
        >
          -
        </button>
        <span className="count-container__qty">{cant}</span>
        <button
          className="count-container__button"
          onClick={() => addProduct(+1)}
          disabled={cant === stock ? true : null}
        >
          +
        </button>
      </div>

     
      {/* <button
        className="button-primary"
        onClick={() => onAdd(cant)}
        disabled={stock === 0 ? true : null}
      >
        Agregar al Carrito
      </button> */}
      <Button variant="outline-light" className="button-primary"
        onClick={() => onAdd(cant)}
        disabled={stock === 0 ? true : null}>Agregar al Carrito</Button>{' '}

      

    </div> 
    
  );
};

export default ItemCount;