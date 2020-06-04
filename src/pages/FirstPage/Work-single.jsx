import React from "react";

const WorkSingle = () => {
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
                      inventore. <br /> <a href="#">t.co/v82jsk</a>
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
                inventore. <br /> <a href="#">myemail@gmail.com</a>
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
            data-target="#main-navbar"
          >
            <span></span>
          </a>
        </div>
      </nav>

      <div class="site-section">
        <div class="container">
          <div class="row mb-4 align-items-center">
            <div class="col-md-6" data-aos="fade-up">
              <h2>Work Single Page</h2>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Quisquam necessitatibus incidunt ut officiis explicabo
                inventore.
              </p>
            </div>
          </div>
        </div>

        <div class="site-section pb-0">
          <div class="container">
            <div class="row align-items-stretch">
              <div class="col-md-8" data-aos="fade-up">
                <img
                  src={require("../../assets/img/img_1_big.jpg")}
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
                  <h3 class="h3">Boxed Water</h3>
                  <p class="mb-4">
                    <span class="text-muted">Design</span>
                  </p>

                  <div class="mb-5">
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                      Dolores illo, id recusandae molestias illum unde pariatur,
                      enim tempora.
                    </p>
                  </div>

                  <h4 class="h4 mb-3">What I did</h4>
                  <ul class="list-unstyled list-line mb-5">
                    <li>Design</li>
                    <li>HTML5/CSS3</li>
                    <li>CMS</li>
                    <li>Logo</li>
                  </ul>

                  <p>
                    <a href="foo" class="readmore">
                      Visit Website
                    </a>
                  </p>
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
              <div class="item web col-sm-6 col-md-4 col-lg-4 mb-4">
                <a href="work-single.html" class="item-wrap fancybox">
                  <div class="work-info">
                    <h3>Boxed Water</h3>
                    <span>Web</span>
                  </div>
                  <img
                    class="img-fluid"
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
                    src={require("../../assets/img/img_6.jpg")}
                  />
                </a>
              </div>
            </div>
          </div>
        </div>

        <div class="site-section pb-0">
          <div class="container">
            <div class="owl-carousel testimonial-carousel">
              <div class="testimonial-wrap">
                <div class="testimonial">
                  <img src="img/person_1.jpg" alt="Image" class="img-fluid" />
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
                  <img src="img/person_2.jpg" alt="Image" class="img-fluid" />
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
    </div>
  );
};

export default WorkSingle;
