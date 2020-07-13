import React from "react";
import "./Basket.css";
import { ProductList } from "./products-list";
import { NavLink } from "react-router-dom";
import Modal from "react-modal";

class Basket extends React.Component {
  basketIdList = localStorage.getItem("idList");

  constructor(props) {
    super(props);
    this.basketIdList =
      (this.basketIdList && this.basketIdList.split(",")) || [];

    this.state = {
      modalIsOpen: false,
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
      <div className="basket">
        <button onClick={this.openModal}>Open Modal</button>
        <div className="basket-list">
          <div>Item</div>
          <div>Price</div>
          <div>Total</div>
        </div>
        {this.state.currentList.map((item, key) => (
          <div className="basket-item">
            <NavLink to={`/product/${item.id}`} className="item-wrap fancybox">
              <img
                alt=" "
                className="img-fluid"
                src={require(`${item.imgSrc}`)}
              />
            </NavLink>
            <div className="work-info">
              <h3>{item.title}</h3>
              <div classNameName="description">{item.bodyText}</div>
            </div>

            <div classNameName="price">{item.price}</div>
            <div classNameName="button">
              <button
                type="button"
                className="btn btn-danger"
                onClick={() => this.deleteItem(item.id)}
              >
                Delete
              </button>
            </div>
          </div>
        ))}
      </div>
    );
  }
}
export default Basket;
