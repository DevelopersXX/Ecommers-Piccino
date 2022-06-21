import { UseCartContext } from "../Context/cartContext";
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import { faXmark} from '@fortawesome/free-solid-svg-icons';

import './style/CartItem.css';

export default function CartItem({item}) {
    const {clearItem} = UseCartContext();
    
    return (
        <li className="cartItem">
            <span className="cartItem__name">{item.name}</span>
            <span className="cartItem__quantity">Cantidad: {item.quantity}</span>
            <span className="cartItem__subtotal">Subtotal: ${item.price*item.quantity}</span>
            <FontAwesomeIcon icon={faXmark} size="2x" color="white" onClick={() => clearItem(item)}/>
            <hr />
        </li>
    );
}