import React from "react";
import Item from "./Item";
import './style/ItemList.css';

export default function ItemList({productos}) {

    return (
        <div className="itemList">
            {productos.map(item => <Item key={item.id} name={item.name} description={item.description} price={item.price} img={item.img} stock={item.stock}/>)}
        </div>
    );
}