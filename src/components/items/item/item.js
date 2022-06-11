import classes from "./item.module.css";
import ItemForm from "./itemForm";

const Item = (props) => {

  const price = `$${props.price.toFixed(2)}`;

  return (
    <li className={classes.item}>
      <span>
        <img src={props.image} className={classes.img} />
        <h3>{props.name}</h3>
        <div className={classes.price}>{price}</div>
      </span>
      <div>
          <ItemForm id={props.id} name={props.name} price={props.price} />
      </div>
    </li>
  );
};

export default Item;
