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
        
        <Button variant="secondary"  onClick={() => addProduct(-1)}
          disabled={cant === initial ? true : null}>-</Button>{' '}
        
        <span className="count-container__qty">{cant}</span>
       
        <Button variant="secondary" onClick={() => addProduct(+1)}
          disabled={cant === stock ? true : null}>+</Button>{' '}
      </div>

      
      <Button variant="outline-light" onClick={() => onAdd(cant)}
        disabled={stock === 0 ? true : null}>Añadir</Button>{' '}

    </div>
  );
};

export default ItemCount;