import React from "react";
const Services = () => {
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
                <li class="active">
                  <a href="services.html">Services</a>
                </li>
                <li>
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
          <a class="navbar-brand" href="index.html">
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

      <div class="site-section">
        <div class="container">
          <div class="row mb-4 align-items-center">
            <div class="col-md-6" data-aos="fade-up">
              <h2>My Services</h2>
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
            <div class="row">
              <div
                class="col-12 col-sm-6 col-md-6 col-lg-6 mb-5"
                data-aos="fade-up"
                data-aos-delay=""
              >
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
              <div
                class="col-12 col-sm-6 col-md-6 col-lg-6 mb-5"
                data-aos="fade-up"
                data-aos-delay="100"
              >
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
              <div
                class="col-12 col-sm-6 col-md-6 col-lg-6 mb-5"
                data-aos="fade-up"
                data-aos-delay=""
              >
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
              <div
                class="col-12 col-sm-6 col-md-6 col-lg-6 mb-5"
                data-aos="fade-up"
                data-aos-delay="100"
              >
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

        <div class="site-section pb-0">
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
export default Services;
