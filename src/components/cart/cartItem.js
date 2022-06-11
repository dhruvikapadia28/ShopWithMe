import { useDispatch } from "react-redux";

import { cartActions } from '../../store/cart-slice';
import classes from './cartItem.module.css';

const CartItem = (props) => {
  const dispatch = useDispatch();

  const { name, quantity, price, id } = props.item;

  const removeToCartHandler = () => {
    dispatch(
      cartActions.removerItemFromCart({     
        id,
        name,
        quantity,
        price,
      })
      );
   };

  const addToCartHandler = () => {
    dispatch(
      cartActions.addItemCart({
        id,
        name,
        price,
      })
      );
   };

  return (
      <table className={classes.item}><tbody>
    <tr>
        <th>Name</th>
        <th>Quantity</th>
        <th></th>
    </tr>
    <tr>
        <td>{name} 
           <div className={classes.itemprice}> ${price.toFixed(2)} </div>
        </td>
        <td className={classes.quantity}>x{quantity}</td>
        <td className={classes.actions}> <button onClick={removeToCartHandler}>-</button>
      <button onClick={addToCartHandler}>+</button></td>
    </tr>
    </tbody>
       </table>
  );
};

export default CartItem;