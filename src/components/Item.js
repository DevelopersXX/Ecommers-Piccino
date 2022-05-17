import React from "react";
import { productos } from "./data/data";
import ItemCount from "./ItemCount";
import './style/Item.css'
import { Button } from "react-bootstrap"


const Item = ({ name,thumbnail, price, id, stock }) => {
    const onAdd = (cant) => {
        alert(`Agregaste ${ cant } productos`);
    };

    let prod = productos;
    function detail(prod) {
        console.log(prod)
    }

    

    return(
        <article className="product-card">
            
            <img className="product-card__image" src={thumbnail} alt="" />
            <h3 className="product-card__name">{name}</h3>
            <span className="product-card__name">${price}</span>
            <ItemCount stock={stock} onAdd={onAdd} initial={1} />
            <Button variant="outline-secondary" onClick={(() => detail(prod))}>Detalles</Button>{' '}
        </article>
    )
};

export default Item;