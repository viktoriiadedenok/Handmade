import React from "react";
import "./Basket.css";
import { ProductList } from "./products-list";
import { NavLink } from "react-router-dom";

const Basket = () => {
  let basketIdList = localStorage.getItem("idList");
  basketIdList = basketIdList.split(",");
  const productList = ProductList;
  return (
    <div class="basket">
      <div class="basket-list">
        {productList.map((item, key) => (
          <div class="basket-item">
            <NavLink to={`/product/${item.id}`} class="item-wrap fancybox">
              <div class="work-info">
                <h3>{item.title}</h3>
                <span>{item.bodyText}</span>
              </div>
              <img alt=" " class="img-fluid" src={require(`${item.imgSrc}`)} />
            </NavLink>
          </div>
        ))}
      </div>
    </div>
  );
};
export default Basket;
