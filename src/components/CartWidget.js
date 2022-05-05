import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import { faCartShopping} from '@fortawesome/free-solid-svg-icons';
import './style/style.css';

const CartWidget = () => {
  return (
    <div className="cart-widget">
      <FontAwesomeIcon icon={faCartShopping} size="2x" color="white" />
      <div className="qty-display">6</div>
    </div>
  );
};

export default CartWidget;

