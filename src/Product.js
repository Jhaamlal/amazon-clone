import { Button } from "@material-ui/core";
import React, { useDispatch } from "react";
import "./Product.css";
import { useStateValue } from "./StateProvider";

function Product({ id, title, image, price, rating }) {
  const [state, dispatch] = useStateValue();
  const addToBasket = () => {
    // add item to basket

    dispatch({
      type: "ADD_TO_BASKET",
      item: {
        id,
        title,
        image,
        price,
        rating,
      },
    });
  };
  return (
    <div className="product">
      <div className="product_info">
        <p>{title}</p>
        <div className="product_price">
          <small>₹</small>
          <strong>{price}</strong>
          <div className="product_rating">
            {Array(rating)
              .fill()
              .map((_) => (
                <p>⭐</p>
              ))}
          </div>
        </div>
      </div>

      <img src={image} className="product_image" />
      <Button variant="contained" onClick={addToBasket}>
        Add To Basket
      </Button>
    </div>
  );
}

export default Product;
