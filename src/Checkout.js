import React from "react";
import "./Checkout.css";
import Subtotal from "./Subtotal";
import banner from "./images/checkout/checkout-banner-ads1.jpg";
import CheckoutProduct from "./CheckoutProduct";
import { useStateValue } from "./StateProvider";
function Checkout() {
  const [{ basket, user }, dispatch] = useStateValue();
  return (
    <div className="checkout">
      <div className="checkout_left">
        <img className="checkout_ad" src={banner} alt=""></img>
        <div>
          <h3>Hello, {user?.email}</h3>
          <h2 className="checkout_title"> Your Shopping Basket</h2>
          {/* <CheckoutProduct/> */}
          {basket.map((item) => (
            <CheckoutProduct
              id={item.id}
              title={item.title}
              image={item.image}
              price={item.price}
              rating={item.rating}
            />
          ))}
        </div>
      </div>
      <div className="checkout_right">
        <Subtotal />
      </div>
    </div>
  );
}

export default Checkout;
