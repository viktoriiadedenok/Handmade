import React from "react";
import { NavLink } from "react-router-dom";
const Navbar = () => {
  return (
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
          <NavLink to="/portfolio">Portfolio </NavLink>
          <NavLink to="/about">About </NavLink>
          <NavLink to="/contacts">Contacts </NavLink>
          <NavLink to="/services">Services </NavLink>
          <NavLink to="/works">Works </NavLink>
          <NavLink to="/ProductPage">Product page </NavLink>
        </div>
      </div>
    </div>
  );
};
export default Navbar;
