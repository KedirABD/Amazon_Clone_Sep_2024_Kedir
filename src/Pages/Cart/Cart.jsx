import { useContext } from "react";
import classes from "./Cart.module.css";
import LayOut from "../../Components/LayOut/Layout";
import { DataContext } from "../../Components/DataProvider/DataProvider";
import CurrencyFormat from "../../Components/CurrencyFormat/CurrencyFormat";
import { Link } from "react-router-dom";
import { TiArrowSortedDown } from "react-icons/ti";
import { TiArrowSortedUp } from "react-icons/ti";
import { Type } from "../../Utility/action.type";
import ProductCard from "../../Components/Product/productCard";

function Cart() {
  const [{ basket, user }, dispatch] = useContext(DataContext);
  const total = basket.reduce((amount, item) => {
    return item.price * item.amount + amount;
  }, 0);
  console.log(user); 

  const increment = (item) => {
    dispatch({
      type: Type.ADD_TO_BASKET,
      item,
    });
  };

  const decrement = (id) => {
    dispatch({
      type: Type.REMOVE_FROM_BASKET,
      id,
    });
  };

  return (
    <LayOut>
      <section className={classes.container}>
        <div className={classes.cart_container}>
          <h2>Hello</h2>
          <h3>Your Shopping Basket</h3>
          <hr />
          {basket?.length == 0 ? (
            <p>Opps! No item in your basket</p>
          ) : (
            basket?.map((item, i) => {
              return (
                <section className={classes.cart_product}>
                  <ProductCard
                  key={i}
                  product={item}
                  renderDesc={true}
                  renderAdd={false}
                  flex={true}
                  />
                  <div className={classes.btn_container}>
                    <button
                      className={classes.btn}
                      onClick={() => increment(item)}
                    >
                      <TiArrowSortedUp size={30} />
                    </button>
                    <span>{item.amount}</span>
                    <button
                      className={classes.btn}
                      onClick={() => decrement(item.id)}
                    >
                      <TiArrowSortedDown size={30} />
                    </button>
                  </div>
                </section>
              );
            })
          )}
        </div>

        {basket?.length !== 0 && (
          <div className={classes.subtotal}>
            <div>
              <p>Subtotal: {basket?.length} items </p>
              <CurrencyFormat amount={total} />
            </div>
            <span>
              <input type="checkbox" />
              <small>this order contain a gift</small>
            </span>
            <Link to="/payments">Continue to checkout</Link>
          </div>
        )}
      </section>
    </LayOut>
  );
}

export default Cart;
