import React from "react";
import "./css/style.css";
import "./vendor/bootstrap/css/bootstrap.min.css";
import "./vendor/icofont/icofont.min.css";
import "./vendor/bootstrap/css/bootstrap.min.css";
import { NavLink } from "react-router-dom";

const MainPage = () => {
  const productList = [
    {
      imgSrc: "./assets/img/img_1.jpg",
      href: "/workSingle",
      title: "Boxed Water",
      bodyText: "Web"
    },
    {
      imgSrc: "./assets/img/img_2.jpg",
      href: "/workSingle",
      title: "Build Indoo",
      bodyText: "Phptpgraphy"
    },
    {
      imgSrc: "./assets/img/img_3.jpg",
      href: "/workSingle",
      title: "Cocooil",
      bodyText: "Branding"
    },
    {
      imgSrc: "./assets/img/img_4.jpg",
      href: "/workSingle",
      title: "Nike Soe",
      bodyText: "Desigh"
    },
    {
      imgSrc: "./assets/img/img_5.jpg",
      href: "/workSingle",
      title: "Kitchen Sink",
      bodyText: "Photography"
    },
    {
      imgSrc: "./assets/img/img_6.jpg",
      href: "/workSingle",
      title: "Amazon",
      bodyText: "Branding"
    }
  ];

  return (
    <div className="App">
      <div class="collapse navbar-collapse custom-navmenu" id="main-navbar">
        <div class="container py-2 py-md-5">
          <div class="row align-items-start">
            <div class="col-md-6 d-none d-md-block  mr-auto">
              <div class="tweet d-flex">
                <span class="icofont-twitter text-white mt-2 mr-3"></span>
                <div>
                  <p></p>
                </div>
              </div>
            </div>
            <div class="col-md-4 d-none d-md-block">
              <h3>Hire Me</h3>
              <p> </p>
            </div>
          </div>
        </div>
      </div>

      <nav class="navbar navbar-light custom-navbar">
        <div class="container">
          <a class="navbar-brand" href="index.html">
            MyPortfolio.
          </a>

          <a
            href="foo"
            class="burger"
            data-toggle="collapse"
            data-target="#main-navbar"
          >
            <span></span>
          </a>
        </div>
      </nav>
      <main id="main">
        <div class="site-section site-portfolio">
          <div class="container">
            <div class="row mb-5 align-items-center">
              <div class="col-md-12 col-lg-6 mb-4 mb-lg-0" data-aos="fade-up">
                <h2>Hey, I'm Johan Stanworth</h2>

                <p class="mb-0">
                  Freelance Creative &amp; Professional Graphics Designer
                </p>
              </div>
              <div
                class="col-md-12 col-lg-6 text-left text-lg-right"
                data-aos="fade-up"
                data-aos-delay="100"
              >
                <div id="filters" class="filters">
                  <a href="foo" data-filter="*" class="active">
                    All
                  </a>
                  <NavLink to="/mainPage">Main Page</NavLink>
                  <NavLink to="/about">About</NavLink>
                  <a href="foo" data-filter=".branding">
                    Branding
                  </a>
                  <a href="foo" data-filter=".photography">
                    Photography
                  </a>
                </div>
              </div>
            </div>
            <div
              id="portfolio-grid"
              class="row no-gutter"
              data-aos="fade-up"
              data-aos-delay="200"
            >
              {productList.map((item, key) => (
                <div class="item web col-sm-6 col-md-4 col-lg-4 mb-4">
                  <NavLink to="/workSingle" class="item-wrap fancybox">
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
                </div>
              ))}
            </div>
          </div>
        </div>

        <div class="site-section">
          <div class="container">
            <div class="row justify-content-center text-center mb-4">
              <div class="col-5">
                <h3 class="h3 heading">My Clients</h3>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit
                  explicabo inventore.
                </p>
              </div>
            </div>
            <div class="row">
              <div class="col-4 col-sm-4 col-md-2">
                <a href="foo" class="client-logo">
                  <img
                    alt=" "
                    src={require("./assets/img/logo-adobe.png")}
                    class="img-fluid"
                  />
                </a>
              </div>
              <div class="col-4 col-sm-4 col-md-2">
                <a href="foo" class="client-logo">
                  <img
                    src={require("./assets/img/logo-uber.png")}
                    alt=""
                    class="img-fluid"
                  />
                </a>
              </div>
              <div class="col-4 col-sm-4 col-md-2">
                <a href="foo" class="client-logo">
                  <img
                    src={require("./assets/img/logo-apple.png")}
                    alt=" "
                    class="img-fluid"
                  />
                </a>
              </div>
              <div class="col-4 col-sm-4 col-md-2">
                <a href="foo" class="client-logo">
                  <img
                    src={require("./assets/img/logo-netflix.png")}
                    alt=""
                    class="img-fluid"
                  />
                </a>
              </div>
              <div class="col-4 col-sm-4 col-md-2">
                <a href="foo" class="client-logo">
                  <img
                    src={require("./assets/img/logo-nike.png")}
                    alt=""
                    class="img-fluid"
                  />
                </a>
              </div>
              <div class="col-4 col-sm-4 col-md-2">
                <a href="foo" class="client-logo">
                  <img
                    src={require("./assets/img/logo-google.png")}
                    alt=""
                    class="img-fluid"
                  />
                </a>
              </div>
            </div>
          </div>
        </div>

        <div class="site-section">
          <div class="container">
            <div class="row justify-content-center text-center mb-4">
              <div class="col-5">
                <h3 class="h3 heading">My Services</h3>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit
                  explicabo inventore.
                </p>
              </div>
            </div>
            <div class="row">
              <div class="col-12 col-sm-6 col-md-6 col-lg-3">
                <span class="la la-cube la-3x mb-4"></span>
                <h4 class="h4 mb-2">Web Design</h4>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit
                  explicabo inventore.
                </p>
                <ul class="list-unstyled list-line">
                  <li>Lorem ipsum dolor sit amet consectetur adipisicing</li>
                  <li>Non pariatur nisi</li>
                  <li>Magnam soluta quod</li>
                  <li>Lorem ipsum dolor</li>
                  <li>Cumque quae aliquam</li>
                </ul>
              </div>
              <div class="col-12 col-sm-6 col-md-6 col-lg-3">
                <span class="la la-mobile la-3x mb-4"></span>
                <h4 class="h4 mb-2">Mobile Applications</h4>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit
                  explicabo inventore.
                </p>
                <ul class="list-unstyled list-line">
                  <li>Lorem ipsum dolor sit amet consectetur adipisicing</li>
                  <li>Non pariatur nisi</li>
                  <li>Magnam soluta quod</li>
                  <li>Lorem ipsum dolor</li>
                  <li>Cumque quae aliquam</li>
                </ul>
              </div>
              <div class="col-12 col-sm-6 col-md-6 col-lg-3">
                <span class="la la-image la-3x mb-4"></span>
                <h4 class="h4 mb-2">Graphic Design</h4>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit
                  explicabo inventore.
                </p>
                <ul class="list-unstyled list-line">
                  <li>Lorem ipsum dolor sit amet consectetur adipisicing</li>
                  <li>Non pariatur nisi</li>
                  <li>Magnam soluta quod</li>
                  <li>Lorem ipsum dolor</li>
                  <li>Cumque quae aliquam</li>
                </ul>
              </div>
              <div class="col-12 col-sm-6 col-md-6 col-lg-3">
                <span class="la la-search la-3x mb-4"></span>
                <h4 class="h4 mb-2">SEO</h4>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit
                  explicabo inventore.
                </p>
                <ul class="list-unstyled list-line">
                  <li>Lorem ipsum dolor sit amet consectetur adipisicing</li>
                  <li>Non pariatur nisi</li>
                  <li>Magnam soluta quod</li>
                  <li>Lorem ipsum dolor</li>
                  <li>Cumque quae aliquam</li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        <div class="site-section pt-0">
          <div class="container">
            <div class="owl-carousel testimonial-carousel">
              <div class="testimonial-wrap">
                <div class="testimonial-wrap"></div>
              </div>
            </div>
          </div>
        </div>
      </main>
      <footer class="footer" role="contentinfo">
        <div class="container">
          <div class="row">
            <div class="col-sm-6">
              <p class="mb-1">
                &copy; Copyright MyPortfolio. All Rights Reserved
              </p>
              <div class="credits">
                Designed by <a href="https:bootstrapmade.com/">BootstrapMade</a>
              </div>
            </div>
            <div class="col-sm-6 social text-md-right">
              <a href="foo">
                <span class="icofont-twitter"></span>
              </a>
              <a href="foo">
                <span class="icofont-facebook"></span>
              </a>
              <a href="foo">
                <span class="icofont-dribbble"></span>
              </a>
              <a href="foo">
                <span class="icofont-behance"></span>
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};
export default MainPage;
