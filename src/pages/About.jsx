import React from "react";
const About = () => {
  return (
    <>
      <main id="main">
        <div class="site-section pb-0 site-portfolio">
          <div class="container">
            <div class="row mb-5 align-items-end">
              <div class="col-md-6" data-aos="fade-up">
                <h2>About Us</h2>
                <p class="mb-0">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Quisquam necessitatibus incidunt ut officiis explicabo
                  inventore.
                </p>
              </div>
            </div>

            <div class="row">
              <div class="col-md-7 mb-5 mb-md-0" data-aos="fade-up">
                <p>
                  <img
                    src={require("./img/about_1.jpg")}
                    alt=""
                    class="img-fluid"
                  />
                </p>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Dolor dignissimos delectus minima reprehenderit molestias illo
                  dolorem et, odio!
                </p>
                <p>
                  Fuga fugit distinctio delectus iure vitae consequatur
                  excepturi, mollitia, consectetur molestias sapiente rem
                  consequuntur, illum adipisci, sed obcaecati!
                </p>
                <p>
                  Ex, dolorem qui voluptas reprehenderit provident, ad ipsum
                  iure a consequatur voluptatem incidunt nobis. Vitae reiciendis
                  quae ex.
                </p>
                <p>
                  Optio consectetur culpa nemo, fugit pariatur veniam voluptate
                  laudantium rerum fuga dolor in maiores ea nisi voluptatibus.
                  Minus?
                </p>
                <p>
                  <a href="foo" class="readmore">
                    Download my CV
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
};

export default About;
