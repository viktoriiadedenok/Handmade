import React from "react";

const Works = () => {
  return (
    <div>
      <div class="collapse navbar-collapse custom-navmenu" id="main-navbar">
        <div class="container py-2 py-md-5">
          <div class="row align-items-start">
            <div class="col-md-2">
              <ul class="custom-menu">
                <li>
                  <a href="index.html">Home</a>
                </li>
                <li>
                  <a href="about.html">About Me</a>
                </li>
                <li>
                  <a href="services.html">Services</a>
                </li>
                <li class="active">
                  <a href="works.html">Works</a>
                </li>
                <li>
                  <a href="contact.html">Contact</a>
                </li>
              </ul>
            </div>
            <div class="col-md-6 d-none d-md-block  mr-auto">
              <div class="tweet d-flex">
                <span class="icofont-twitter text-white mt-2 mr-3"></span>
                <div>
                  <p>
                    <em>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Quisquam necessitatibus incidunt ut officiis explicabo
                      inventore. <br /> <a href="foo">t.co/v82jsk</a>
                    </em>
                  </p>
                </div>
              </div>
            </div>
            <div class="col-md-4 d-none d-md-block">
              <h3>Hire Me</h3>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Quisquam necessitatibus incidunt ut officiis explicabo
                inventore. <br /> <a href="foo">myemail@gmail.com</a>
              </p>
            </div>
          </div>
        </div>
      </div>

      <nav class="navbar navbar-light custom-navbar">
        <div class="container">
          <a class="navbar-br/and" href="index.html">
            MyPortfolio.
          </a>

          <a
            href="foo"
            class="burger"
            data-toggle="collapse"
            data-target="foomain-navbar"
          >
            <span></span>
          </a>
        </div>
      </nav>

      <main id="main">
        <div class="site-section pb-0 site-portfolio">
          <div class="container">
            <div class="row mb-5 align-items-end">
              <div class="col-md-12 col-lg-6 mb-4 mb-lg-0" data-aos="fade-up">
                <h2>Works</h2>
                <p class="mb-0">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Quisquam necessitatibus incidunt ut officiis explicabo
                  inventore.
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
                  <a href="foo" data-filter=".web">
                    Web
                  </a>
                  <a href="foo" data-filter=".design">
                    Design
                  </a>
                  <a href="foo" data-filter=".br/anding">
                    br/anding
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
              <div class="item web col-sm-6 col-md-4 col-lg-4 mb-4">
                <a href="work-single.html" class="item-wrap fancybox">
                  <div class="work-info">
                    <h3>Boxed Water</h3>
                    <span>Web</span>
                  </div>
                  <img
                    class="img-fluid"
                    alt=""
                    src={require("../../assets/img/img_1.jpg")}
                  />
                </a>
              </div>
              <div class="item photography col-sm-6 col-md-4 col-lg-4 mb-4">
                <a href="work-single.html" class="item-wrap fancybox">
                  <div class="work-info">
                    <h3>Build Indoo</h3>
                    <span>Photography</span>
                  </div>
                  <img
                    class="img-fluid"
                    alt=""
                    src={require("../../assets/img/img_2.jpg")}
                  />
                </a>
              </div>
              <div class="item br/anding col-sm-6 col-md-4 col-lg-4 mb-4">
                <a href="work-single.html" class="item-wrap fancybox">
                  <div class="work-info">
                    <h3>Cocooil</h3>
                    <span>br/anding</span>
                  </div>
                  <img
                    class="img-fluid"
                    alt=""
                    src={require("../../assets/img/img_3.jpg")}
                  />
                </a>
              </div>
              <div class="item design col-sm-6 col-md-4 col-lg-4 mb-4">
                <a href="work-single.html" class="item-wrap fancybox">
                  <div class="work-info">
                    <h3>Nike Shoe</h3>
                    <span>Design</span>
                  </div>
                  <img
                    class="img-fluid"
                    alt=""
                    src={require("../../assets/img/img_4.jpg")}
                  />
                </a>
              </div>
              <div class="item photography col-sm-6 col-md-4 col-lg-4 mb-4">
                <a href="work-single.html" class="item-wrap fancybox">
                  <div class="work-info">
                    <h3>Kitchen Sink</h3>
                    <span>Photography</span>
                  </div>
                  <img
                    class="img-fluid"
                    alt=""
                    src={require("../../assets/img/img_5.jpg")}
                  />
                </a>
              </div>
              <div class="item br/anding col-sm-6 col-md-4 col-lg-4 mb-4">
                <a href="work-single.html" class="item-wrap fancybox">
                  <div class="work-info">
                    <h3>Amazon</h3>
                    <span>br/andingn</span>
                  </div>
                  <img
                    class="img-fluid"
                    alt=""
                    src={require("../../assets/img/img_6.jpg")}
                  />
                </a>
              </div>
            </div>
          </div>
        </div>

        <div class="site-section">
          <div class="container">
            <div class="owl-carousel testimonial-carousel">
              <div class="testimonial-wrap">
                <div class="testimonial">
                  <img
                    src={require("../../assets/img/person_1.jpg")}
                    alt=""
                    class="img-fluid"
                  />
                  <blockquote>
                    <p>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Quisquam necessitatibus incidunt ut officiis explicabo
                      inventore.
                    </p>
                  </blockquote>
                  <p>&mdash; Jean Hicks</p>
                </div>
              </div>

              <div class="testimonial-wrap">
                <div class="testimonial">
                  <img
                    src={require("../../assets/img/person_2.jpg")}
                    alt=""
                    class="img-fluid"
                  />
                  <blockquote>
                    <p>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Quisquam necessitatibus incidunt ut officiis explicabo
                      inventore.
                    </p>
                  </blockquote>
                  <p>&mdash; Chris Stanworth</p>
                </div>
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
                Designed by{" "}
                <a href="https://bootstrapmade.com/">BootstrapMade</a>
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
export default Works;
