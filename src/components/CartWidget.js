import React from "react";
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import { faCartShopping} from '@fortawesome/free-solid-svg-icons';
import { Link } from "react-router-dom";
import './style/style.css';

const CartWidget = () => {
  return (
    <div className="cart-widget">
      <Link to= '/cart'>
        <FontAwesomeIcon icon={faCartShopping} size="2x" color="white" />
        <div className="qty-display">6</div>
      </Link>
    </div>
  );
};

export default CartWidget;

