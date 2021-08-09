import React from "react";
import "./Home.css";
import home_img from "./images/home/home1.jpg";
import Product from "./Product.js";
import airpod from "./images/product/airpod.jpg";
import pc from "./images/product/pc.jpg";
import bed from "./images/product/bed.jpg";
function Home() {
  return (
    <div className="Home">
      <div className="home_container">
        <img className="home_img" src={home_img} alt="home_img" />

        <div className="home_row">
          <Product
            id="1"
            title="Apple AirPods Pro"
            price={50.99}
            image={airpod}
            rating={5}
          />
          <Product
            id="2"
            title="Desktop pc keyboard mouse"
            image={pc}
            price={700.5}
            rating={4}
          />
        </div>
        <div className="home_row">
          <Product
            id="3"
            title="Master bed "
            image={bed}
            price={500.2}
            rating={4}
          />
          <Product
            id="1"
            title="Apple AirPods Pro"
            price={50.99}
            image={airpod}
            rating={5}
          />
          <Product
            id="2"
            title="Desktop pc keyboard mouse"
            image={pc}
            price={700.5}
            rating={4}
          />
        </div>
        <div className="home_row">
          <Product
            id="3"
            title="Master bed "
            image={bed}
            price={500.2}
            rating={4}
          />
        </div>
      </div>
    </div>
  );
}

export default Home;
