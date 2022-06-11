import { useSelector, useDispatch } from 'react-redux';

import { Fragment } from 'react';
import classes from './order.module.css';
import { Link } from 'react-router-dom';
import { cartActions } from '../store/cart-slice';
import { uiActions } from '../store/ui-slice';

 
const Order = () => {
   const dispatch = useDispatch();

  const totalItem = useSelector((state) => state.cart.total);

  const emptyCartHandler = () => {
  dispatch(cartActions.emptyCart());
  dispatch(uiActions.itemShow());
  };

  return (
    <Fragment>
    <header className={classes.header}>
    <h1>ShopWithMe</h1>
    </header>
    <main className={classes.main}>
      <div className={classes.div}>
      <p className={classes.p}> Order Placed Successfully
       <div className={classes.d}>#{Math.random().toString().slice(2,12)}</div>
       <div className={classes.total}>$ {totalItem.toFixed(2)}</div>
      </p>
      </div>
      <button className={classes.btn} onClick={emptyCartHandler}><Link to="/">Keep Shopping</Link></button>
      </main>
      </Fragment>
  );
};

export default Order;
