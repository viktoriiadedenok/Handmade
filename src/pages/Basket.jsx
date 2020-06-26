import React from "react";
import "./Basket.css";
import { ProductList } from "./products-list";
import { NavLink } from "react-router-dom";

const Basket = () => {
  const productsList = ProductList;
  let basketIdList = localStorage.getItem("idList");
  basketIdList = (basketIdList && basketIdList.split(",")) || [];
  let currentList = [];
  basketIdList = basketIdList.map(item => +item);
  currentList = productsList.filter((item, index) => {
    if (basketIdList.includes(productsList[index].id)) {
      return true;
    }
    return false;
  });
  // localStorage.removeItem("idList")

  let deleteItem = () => {
    console.log("hi");
    currentList = [];
  };

  return (
    <div class="basket">
      <div class="basket-list">
        {currentList.map((item, key) => (
          <div class="basket-item">
            <NavLink to={`/product/${item.id}`} class="item-wrap fancybox">
              <div class="work-info">
                <h3>{item.title}</h3>
                <span>{item.bodyText}</span>
              </div>
              <img alt=" " class="img-fluid" src={require(`${item.imgSrc}`)} />
            </NavLink>
            <button type="button" class="btn btn-danger" onClick={deleteItem}>
              Delete
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};
export default Basket;
