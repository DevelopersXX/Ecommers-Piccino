import React from "react"
import {Link} from "react-router-dom";

const OptionButtons = () => {
    return(
        <>
        <Link to = "/cart">
            <button className="button1 btn-1">Finalizar Compra</button>        
        </Link>
        <Link to = "/">
            <button className="button1 btn-1">Seguir Comprando</button>        
        </Link>

        </>
    )
}

export default OptionButtons