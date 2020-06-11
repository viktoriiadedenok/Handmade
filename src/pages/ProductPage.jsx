import React from "react";
import { NavLink, useParams } from "react-router-dom";
import { ProductList } from "./products-list";
import "./ProductPage.css";

const ProductPage = () => {
  const moreWorksList = ProductList;
  const { id } = useParams();

  let product;
  for (let i = 0; i < ProductList.length; i++) {
    if (ProductList[i].id === +id) {
      product = ProductList[i];
    }
  }

  const goTop = () => {
    window.scrollTo(0, 0);
  };

  return (
    <div>
      <div class="site-section">
        <div class="container">
          <div class="row mb-4 align-items-center">
            <div class="col-md-6" data-aos="fade-up">
              <h2>Work Single Page</h2>
              <p>Lorem ipsum .</p>
            </div>
          </div>
        </div>
        <div class="site-section pb-0">
          <div class="container">
            <div class="row align-items-stretch">
              <div class="col-md-8" data-aos="fade-up">
                <img
                  src={require(`${product.imgSrc}`)}
                  alt="Image"
                  class="img-fluid"
                />
              </div>
              <div
                class="col-md-3 ml-auto"
                data-aos="fade-up"
                data-aos-delay="100"
              >
                <div class="sticky-content">
                  <h3 class="h3">{product.title}</h3>
                  <p class="mb-4">
                    <span class="text-muted">Design</span>
                  </p>

                  <div class="mb-5">
                    <p>{product.bodyText}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="site-section pb-0">
          <div class="container">
            <div class="row justify-content-center text-center mb-4">
              <div class="col-5">
                <h3 class="h3 heading">More Works</h3>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit
                  explicabo inventore.
                </p>
              </div>
            </div>

            <div class="row" data-aos="fade-up" data-aos-delay="200">
              <div
                id="portfolio-grid"
                class="row no-gutter"
                data-aos-delay="200"
              >
                {ProductList.map((item, key) => (
                  <div class="item web col-sm-6 col-md-4 col-lg-4 mb-4">
                    <NavLink to={`/product/${item.id}`} class="item-wrap">
                      <div class="item-wrap" onClick={goTop()}>
                        <div class="work-info">
                          <h3>{item.title}</h3>
                          <span>{item.bodyText}</span>
                        </div>
                        <img
                          alt=" "
                          class="img-fluid"
                          src={require(`${item.imgSrc}`)}
                        />
                      </div>
                    </NavLink>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div class="site-section pb-0">
          <div class="container"></div>
        </div>
      </div>
    </div>
  );
};

export default ProductPage;
