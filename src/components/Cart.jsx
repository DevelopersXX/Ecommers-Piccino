import { UseCartContext } from "../Context/cartContext";

import CartList from "./CartList";
import CartEmpty from "./CartFinal";

import './style/Cart.css';

export default function Cart() {
    const {totalItems} = UseCartContext();
    
    if (!totalItems) {
        return (
            <div className="cart">
                <CartEmpty />
            </div>
        );
    }

    return (
        <div className="cart">
            <CartList/>
        </div>
    );
}