import React from "react";
import "./Basket.css";

const Basket = () => {
  return (
    <div class="basket">
      <div class="basket-list">
        <div class="basket-item">
          <img alt="" src={require("./img/img_1.jpg")} />
          <div>
            <h4>Name</h4>
            <div>Price</div>
            {/* <div>Name</div>
            <div>Price</div> */}
          </div>
        </div>
        <div class="basket-item">
          <img alt="" src={require("./img/img_2.jpg")} />
          <div>
            <div>Name</div>
            <div>Price</div>
          </div>
        </div>
        <div class="basket-item">
          <img alt="" src={require("./img/img_3.jpg")} />
          <div>
            <div>Name</div>
            <div>Price</div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Basket;
