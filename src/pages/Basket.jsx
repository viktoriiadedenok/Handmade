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
      <div class="px-4 px-lg-0">
      <div class="pb-5">
      <div class="container">
      <div class="row">
      <div className="col-lg-12 p-5 bg-white rounded shadow-sm mb-5">
      <div className="table-responsive">
       <table className="table">
         <thead>
           <tr>
             <th scope="col" className="border-0 bg-light">
               <div className="p-2 px-3 text-uppercase">Product</div>
             </th>
             <th scope="col" className="border-0 bg-light">
               <div className="py-2 text-uppercase">Price</div>
             </th>
             <th scope="col" className="border-0 bg-light">
               <div className="py-2 text-uppercase">Quantity</div>
             </th>
             <th scope="col" className="border-0 bg-light">
               <div className="py-2 text-uppercase">Remove</div>
             </th>
           </tr>
         </thead>
        {this.state.currentList.map((item, key) => (
         <tr>
         <th scope="row" className="border-0">
           <div className="p-2">
             <img
               src={require(`${item.imgSrc}`)}
               alt=""
               width="70"
               className="img-fluid rounded shadow-sm"
             />
             <div className="ml-3 d-inline-block align-middle">
               <h5 className="mb-0">
                 {" "}
                 <a href="#" className="text-dark d-inline-block align-middle">
                   {item.title}
                 </a>
               </h5>
               <span className="text-muted font-weight-normal font-italic d-block">
                 {item.bodyText}
               </span>
             </div>
           </div>
         </th>
         <td className="border-0 align-middle">
           <strong>{item.price}</strong>
         </td>
         <td className="border-0 align-middle">
           <strong>3</strong>
         </td>
         <td className="border-0 align-middle">
           <button
             type="button"
             className="btn btn-secondary"
             onClick={() => this.deleteItem(item.id)}
           >
             Delete
           </button>{''}
         </td>
       </tr>
        ))}
      </table>
    </div>
  </div> 
  </div> 
  </div> 
  </div> 
  </div> 
    );
  }

}
export default Basket;
