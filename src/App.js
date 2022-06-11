import { Fragment, useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { Route } from "react-router-dom";

import Items from "./components/items/items";
import Layout from "./components/layout/layout";
import Cart from "./components/cart/cart";
import Order from "./pages/order";

function App() {
  const cart = useSelector((state) => state.cart);

  const item = useSelector((state) => state.ui.itemIsVisible);

  const order = useSelector((state) => state.ui.orderIsVisible);

  const [cartIsShown, setCartIsShown] = useState(false);

  const showCartHandler = () => {
    setCartIsShown(true);
  };

  const hideCartHandler = () => {
    setCartIsShown(false);
  };

  useEffect(() => {
    fetch("https://project-88dde-default-rtdb.firebaseio.com/cart.json", {
      method: "PUT",
      body: JSON.stringify(cart),
    });
  }, [cart]);

  return (
    <Fragment>
      {cartIsShown && <Cart onClose={hideCartHandler} />}
        <Layout onShowCart={showCartHandler} />
      <main>
          { item && <Items />}
         { order && <Route path="/order">
          <Order />
        </Route>}
      </main>
    </Fragment>
  );
}

export default App;

<Route path="/order">
  <Order />
</Route>;
