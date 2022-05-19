import React from "react";
import ItemCount from "./ItemCount";
import './style/Item.css'
import { Button } from "react-bootstrap"
import { Link } from "react-router-dom";


const Item = ({prod}) => {
    const onAdd = (cant) => {
        alert(`Agregaste ${ cant } productos`);
    };

    return(
        <div className="catalogo">
            <article className="product-card">

            
                <img className="product-card__image" src={prod.img} alt="" />
                <h3 className="product-card__name">{prod.name}</h3>
                <span className="product-card__name">${prod.price}</span>
                <ItemCount stock={prod.stock} onAdd={onAdd} initial={1} />
            <Link to= {`/detail/${prod.id}`}>    
                <Button variant="outline-light" className="bu">Detalles</Button>{' '}
            </Link>

            </article>
        </div>
    )
}

export default Item;