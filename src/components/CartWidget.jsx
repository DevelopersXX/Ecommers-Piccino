import { NavLink } from "react-router-dom";
import { UseCartContext } from "../Context/cartContext";
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import { faCartShopping} from '@fortawesome/free-solid-svg-icons';

import './style/CartWidget.css';

export default function CartWidget() {
    const {totalItems} = UseCartContext();

    return (
    <div className="cart-widget">
      <NavLink to= '/cart' style={{pointerEvents: !totalItems ? 'none' : ''}}>
        <FontAwesomeIcon icon={faCartShopping} size="2x" color="white" />
        <div className="qty-display">{totalItems}</div>
      </NavLink>
    </div>
    );
}


