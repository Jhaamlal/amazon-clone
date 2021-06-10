import React from "react";
import { useStateValue } from "./StateProvider";
import "./Checkout.css";
import CheckoutProduct from "./CheckoutProduct";
import Subtotle from "./Subtotle";

function Checkout() {
  const [{ basket }] = useStateValue();
  return (
    <div>
      <div className="checkout">
        <img
          src="http://t.wallpaperweb.org/wallpaper/nature/3840x1024/9XMedia1280TripleHorizontalMountainsclouds.jpg"
          className="checkout_ad"
        />
        <br />
        <div className="checkout_title">
          {basket?.length === 0 ? (
            <div>
              <h2>Your Shoping Basket is Empty</h2>
            </div>
          ) : (
            <div className="checkout_product">
              <h1>Test,Basket </h1>
              {basket?.map((item) => (
                <CheckoutProduct
                  id={item.id}
                  title={item.title}
                  image={item.image}
                  price={item.price}
                  rating={item.rating}
                />
              ))}
            </div>
          )}
          {basket.length > 0 && (
            <div className="checkout_right">
              <Subtotle />
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default Checkout;
