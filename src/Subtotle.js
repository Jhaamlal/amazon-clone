import { Button } from "@material-ui/core";
import React from "react";
import { getBasketTotle } from "./reducers";
import { useStateValue } from "./StateProvider";
import "./Subtotle.css";

function Subtotle() {
  const [{ basket }] = useStateValue();
  let price = getBasketTotle(basket);
  console.log(price);

  return (
    <div className="subtotle">
      <p className="subtotle_main">
        subtotle({basket.length} items):
        <strong>{price}</strong>
      </p>
      <small className="subtotle_gift">
        <input type="checkbox" />
        This is checkBox at the fast
      </small>
      <Button>Checkout </Button>
    </div>
  );
}

export default Subtotle;
