import Card from "../ui/card";
import Item from './item/item';
import classes from "./availableItems.module.css";
import beans from '../../img/beans.png';
import bevs from '../../img/bev.png';
import fruits from '../../img/fruits.png';
import vegs from '../../img/veges.png';



const DUMMY_ITEMS = [
  {
    id: "i1",
    name: "Beans",
    price: 2.5,
    image: beans,
  },
  {
    id: "i2",
    name: "Fruits",
    price: 6.0,
    image: fruits,
  },
  {
    id: "i3",
    name: "Vegetables",
    price: 1.6,
    image: vegs,
  },
  {
    id: "i4",
    name: "Beverages",
    price: 1.4,
    image: bevs,
  },
];

const AvailableItems = () => {
  const itemsList = DUMMY_ITEMS.map((item) => 
  <Item
  key={item.id}
  id = {item.id}
  name={item.name}
  price={item.price}
  image ={item.image}
/>
);

  return (
    <section className={classes.items}>
      <Card>
        <ul>{itemsList}</ul>
      </Card>
    </section>
  );
};

export default AvailableItems;
