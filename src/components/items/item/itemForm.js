import { useDispatch } from "react-redux";

import { cartActions } from '../../../store/cart-slice';
import classes from "./itemForm.module.css";

const ItemForm = (props) => {
  const dispatch = useDispatch();

  const { name, price, id } = props;

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
    <div className={classes.form}>
    <button onClick={addToCartHandler} >+Add</button>
    </div>
  );
};

export default ItemForm;
