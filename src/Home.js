import React from "react";
import Product from "./Product";
import "./Home.css";

function Home() {
  return (
    <div className="home">
      <img
        className="home_image"
        src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg"
      />
      <div className="home_row">
        <Product
          id="1234"
          title="Papu"
          price={11.96}
          rating={5}
          image="https://upload.wikimedia.org/wikipedia/commons/e/e5/Rahul_Gandhi.jpg"
        />

        <Product
          id="1234"
          title="Papu"
          price={11.96}
          rating={5}
          image="https://upload.wikimedia.org/wikipedia/commons/e/e5/Rahul_Gandhi.jpg"
        />
      </div>

      {/*  */}

      <div className="home_row">
        <Product
          id="1234"
          title="Papu"
          price={11.96}
          rating={5}
          image="https://upload.wikimedia.org/wikipedia/commons/e/e5/Rahul_Gandhi.jpg"
        />

        <Product
          id="1234"
          title="Papu"
          price={11.96}
          rating={5}
          image="https://upload.wikimedia.org/wikipedia/commons/e/e5/Rahul_Gandhi.jpg"
        />
        <Product
          id="1234"
          title="Papu"
          price={11.96}
          rating={5}
          image="https://upload.wikimedia.org/wikipedia/commons/e/e5/Rahul_Gandhi.jpg"
        />
      </div>

      {/* 3 */}
      <div className="home_row">
        <Product
          id="1234"
          title="Papu"
          price={11.96}
          rating={5}
          image="https://upload.wikimedia.org/wikipedia/commons/e/e5/Rahul_Gandhi.jpg"
        />
      </div>
    </div>
  );
}

export default Home;
