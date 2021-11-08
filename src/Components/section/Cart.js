import React from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  reduction,
  increase,
  removeProduct,
  calTotal,
} from "../../redux/products";
import Colors from "./Colors";

import "./../css/Details.css";
import "./../css/Cart.css";

export const Cart = () => {
  const { cart, total } = useSelector((state) => state.products);
  const dispatch = useDispatch();

  React.useEffect(() => {
    const result = cart.reduce((prev, item) => {
      return prev + item.price * item.count;
    }, 0);

    if (cart.length > 0 && result) {
      dispatch(calTotal(result));
    }
  }, [cart, dispatch]);

  if (cart.length === 0) {
    return <h2 style={{ textAlign: "center" }}>Nothings Product</h2>;
  } else {
    return (
      <>
        {cart.map((item) => (
          <div className="details cart" key={item._id}>
            <img src={item.src} alt="" />
            <div className="box">
              <div className="row">
                <h2>{item.title}</h2>
              </div>

              <Colors colors={item.colors} />

              <p>Giá: ${item.price * item.count}</p>

              <p>
                Size: <span className="size-text">{item.size}</span>
              </p>

              <p>{item.description}</p>
              <div className="amount">
                <button
                  className="count"
                  onClick={() =>
                    dispatch(reduction({ id: item._id, size: item.size }))
                  }
                >
                  -
                </button>
                <span>{item.count}</span>
                <button
                  className="count"
                  onClick={() =>
                    dispatch(increase({ id: item._id, size: item.size }))
                  }
                >
                  +
                </button>
              </div>
            </div>

            <span
              className="delete"
              onClick={() =>
                dispatch(removeProduct({ id: item._id, size: item.size }))
              }
            />
          </div>
        ))}

        <div className="total">
          <Link to="/payment">Payment</Link>
          <h3>Total: ${total}</h3>
        </div>
      </>
    );
  }
};

export default Cart;
