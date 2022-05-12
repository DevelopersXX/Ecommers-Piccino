import React from "react";
import ItemCount from "./ItemCount";
import './style/Item.css'

const Item = ({ name,img , price, description, stock }) => {
    const onAdd = (cant) => {
        alert(`Agregaste ${ cant } productos`);
    };

    return(
        <article className="product-card">
            
            <img className="product-card__image" src={img} alt="" />

            <h3 className="product-card__name">{name}</h3>
            <p className='item__category'>{description}</p>
            <span className="product-card__name">${price}</span>

            <ItemCount stock={stock} onAdd={onAdd} initial={1} />
    </article>
    )
};

export default Item;