import React from "react";
import "./Basket.css";
import { ProductList } from "./products-list";
import { NavLink } from "react-router-dom";

class Basket extends React.Component {
  basketIdList = localStorage.getItem("idList");

  constructor(props) {
    super(props);
    this.basketIdList =
      (this.basketIdList && this.basketIdList.split(",")) || [];

    this.state = {
      currentList: ProductList.filter(item => {
        if (this.basketIdList.includes(String(item.id))) {
          console.log(item.id);
          return true;
        } else return false;
      })
    };
  }

  deleteItem = productId => {
    let deletedList = localStorage.getItem("idList").split(",");

    deletedList = deletedList.filter(array => {
      if (array == productId) {
        return false;
      } else return true;
    });

    const currentList = this.state.currentList.filter(product => {
      if (product.id == productId) {
        return false;
      } else return true;
    });

    this.setState({
      currentList: currentList
    });
    localStorage.setItem("idList", deletedList);
  };

  render() {
    return (
      <div class="basket">
        <div class="basket-list">
          {this.state.currentList.map((item, key) => (
            <div class="basket-item">
              <NavLink to={`/product/${item.id}`} class="item-wrap fancybox">
                <div class="work-info">
                  <h3>{item.title}</h3>
                  <span>{item.bodyText}</span>
                </div>
                <img
                  alt=" "
                  class="img-fluid"
                  src={require(`${item.imgSrc}`)}
                />
              </NavLink>
              <button
                type="button"
                class="btn btn-danger"
                onClick={() => this.deleteItem(item.id)}
              >
                Delete
              </button>
            </div>
          ))}
        </div>
      </div>
    );
  }
}
export default Basket;
