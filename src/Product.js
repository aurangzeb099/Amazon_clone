import React from "react";
import "./Product.css";
import { useStateValue } from "./StateProvider";
// import product1 from "./images/product/product1.jpg";
function Product({ id, title, image, price, rating }) {
  const [{ basket }, dispatch] = useStateValue();
  console.log("this is basket ....", basket);
  const addToBasket = () => {
    //dispatch the items into data layer
    dispatch({
      type: "ADD_TO_BASKET",
      item: {
        id: id,
        title: title,
        image: image,
        price: price,
        rating: rating,
      },
    });
  };
  return (
    <div className="product">
      <div className="product_info">
        <p>{title}</p>
        <p className="product_price">
          <small>$</small>
          <strong>{price}</strong>
        </p>
        <div className="product_rating">
          {Array(rating)
            .fill()
            .map((_, i) => (
              <p>⭐</p>
            ))}
        </div>
      </div>
      <img src={image} alt="product1" />
      <button onClick={addToBasket}>Add to Basket</button>
    </div>
  );
}

export default Product;
