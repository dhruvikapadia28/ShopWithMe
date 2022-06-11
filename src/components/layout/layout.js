import { Fragment } from 'react';

import CartButton from './cartButton';
import classes from './layout.module.css';

const Layout = (props) => {
    return (
        <Fragment>
        <header className={classes.header}>
        <h1>ShopWithMe</h1>
        <CartButton onClick={props.onShowCart} />
        </header>
        </Fragment>
    )
};

export default Layout;