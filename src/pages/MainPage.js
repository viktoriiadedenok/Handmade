import React from "react";
import { NavLink } from "react-router-dom";
import { ProductList } from "./products-list";

const MainPage = () => {
  const productList = ProductList;
  return (
    <>
      <div id="portfolio-grid" class="row no-gutter" data-aos-delay="200">
        {productList.map((item, key) => (
          <div class="item web col-sm-6 col-md-4 col-lg-4 mb-4">
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
    </>
  );
};
export default MainPage;
