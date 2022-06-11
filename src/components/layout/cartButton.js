import { useSelector } from 'react-redux';

import CartIcon from '../cart/cartIcon';
import classes from './cartButton.module.css';

const CartButton = (props) => {
  const cartQuantity = useSelector(state => state.cart.totalQuantity);

    return(
        <button className={classes.button} onClick={props.onClick}>
        <span className={classes.icon}>
          <CartIcon />
        </span>
        <span>{cartQuantity}</span>
        
      </button>
    );
};

export default CartButton;