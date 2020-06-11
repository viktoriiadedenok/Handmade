import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import Navbar from "./Navbar";

const Layout = ({ children }) => {
  return (
    <>
      {/* <Header /> */}
      <div id="main">
        <div class="site-section site-portfolio">
          <div class="container">
            <Navbar />
            {children}
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};
export default Layout;
