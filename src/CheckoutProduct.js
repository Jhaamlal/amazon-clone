import { Button } from "@material-ui/core";
import React from "react";
import Checkout from "./Checkout";

import "./CheckoutProduct.css";
import { useStateValue } from "./StateProvider";

function CheckoutProduct({ id, title, image, price, rating }) {
  const [{ basket }, dispatch] = useStateValue();
  const RemoveFromBasket = () => {
    dispatch({
      type: "REMOVE_FROM_BASKET",
      id,
    });
  };
  return (
    <div className="checkoutProduct">
      <img className="checkoutProduct_image" src={image} alt="" />
      <div className="checkoutProduct_info">
        <p className="checkoutProduct_title">{title}</p>

        <p className="checkoutProduct_price">
          <small>RS</small>
          <strong>{price}</strong>
        </p>

        <div className="checkoutProduct_rating">
          {Array(rating)
            .fill()
            .map((_) => (
              <p>⭐</p>
            ))}
        </div>

        <Button onClick={RemoveFromBasket}>Remove from Basket</Button>
      </div>
    </div>
  );
}

export default CheckoutProduct;
