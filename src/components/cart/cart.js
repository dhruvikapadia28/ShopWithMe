import { useDispatch, useSelector } from "react-redux";

import classes from "./cart.module.css";
import Modal from "../ui/modal";
import CartItem from "./cartItem";
import { Link } from "react-router-dom";
import { uiActions } from "../../store/ui-slice";

const Cart = (props) => {
  const dispatch=useDispatch();
  const totalItem = useSelector((state) => state.cart.total);
  const cartItems = useSelector((state) => state.cart.items);

  return (
    <Modal onClose={props.onClose} className={classes.cartitems}>
      <div>
        {cartItems.map((item) => (
          <CartItem
            key={item.id}
            item={{
              id: item.id,
              name: item.name,
              quantity: item.quantity,
              price: item.price,
            }}
          />
        ))}
        <div className={classes.total}>
          Total:
          <div>
            <span> {totalItem.toFixed(2)} </span>
          </div>
        </div>
      </div>
      <div className={classes.actions}>
        <button className={classes["button--alt"]} onClick={props.onClose}>
          Close
        </button>
        <button
          className={classes.button}
          onClick={() => {
            props.onClose();
            dispatch(uiActions.orderShow());
          }}
        >
          <Link to="/order">Order</Link>
        </button>
      </div>
    </Modal>
  );
};

export default Cart;
