import React from "react";
import Products from "./Products";

const Home = () => {
  return (
    <div>
      <div class="card bg-dark text-white border-0 ">
        <img
          src="/assets/airjo.webp"
          class="card-img"
          alt="background"
          height="500px"
        />
        <div class="card-img-overlay d-flex flex-column 
        justify-content-center">
          <div className="container">
            <h5 class="card-title display-3 ft-bolder mb-0 ">Next season arrivals</h5>
            <p class="card-text fs-2">
                CHECK OUT ALL THE TRENDS
            </p>
          </div>
        </div>
      </div>
      <Products/>
    </div>
  );
};

export default Home;
