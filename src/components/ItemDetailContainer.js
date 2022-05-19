import React from "react";
import { useState, useEffect } from "react";
import ItemDetail from './ItemDetail';
import './style/ItemDetailContainer.css';
import { useParams } from "react-router-dom";
import { getData } from './data/getData'

const ItemDetailContainer = () => {
    const [producto, setProducto] = useState({})
    const { detalleId } = useParams()

    useEffect(() => {
        getData(detalleId)  
        .then(respuesta=> setProducto(respuesta))
        .catch((err)=> console.log(err))
    }, [])

    // console.log(producto)
    console.log(detalleId)
    
    return (
        <section className="item-d-container">
            {producto ? <ItemDetail item={producto} /> : <p>Cargando Detalles...</p>}
        </section>
    )
};

export default ItemDetailContainer;