import React from "react";
import { Outlet } from "react-router-dom";
import "../assets/js/main.js";

import { Link } from "react-router-dom";
import "../App.css";
const ClientLayout = () => {
  return (
    <div style={{ backgroundColor: "white" }}>
      <header className="header">
        <div className="header-top">
          <div className="header-logo">
            <Link to="#" className="logo">
              DuyDepTrai
            </Link>
          </div>

          <i className="toogle bx bx-menu"></i>
          <div className="header-menu">
            <ul className="menu" id="menu">
              <li className="menu-item">
                <Link to="/" className="menu-link is-active">
                  Home
                </Link>
              </li>
              <li className="menu-item">
                <Link to="/about" className="menu-link">
                  About
                </Link>
              </li>
              <li className="menu-item">
                <Link to="/products" className="menu-link">
                  Shop
                </Link>
              </li>
              <li className="menu-item">
                <Link to="/blog" className="menu-link">
                  Blogs
                </Link>
              </li>
              <li className="menu-item">
                <Link to="/contact" className="menu-link">
                  Contact
                </Link>
              </li>
            </ul>
          </div>
          <div className="header-icons">
            <Link to="#">
              <i className="header-icon bx bx-search"></i>
            </Link>
            <Link to="/login">
              <i className=" header-icon bx bxs-user"></i>
            </Link>
            <Link to="#">
              <i className="header-icon bx bxs-shopping-bag"></i>
            </Link>
          </div>
        </div>
      </header>

      <Outlet />

      <footer className="footer">
        <div className="footer-contact">
          <div className="footer-item">
            <div className="header-logo">
              <a href="#" className="logo">
                DuyDepTrai
              </a>
            </div>
            <p>
              Let’s make something great together. We are trusted by over 5000+
              clients.
              <br />
              Join them by using our services and grow your business
            </p>
          </div>
          <div className="footer-item">
            <h3>Need Help ?</h3>
            <span>Support</span>
            <span>Get Started</span>
            <span>Terms of Use</span>
            <span>Privacy Policy</span>
          </div>
          <div className="footer-item">
            <h3>Learn more</h3>
            <span>About Us</span>
            <span>Features</span>
            <span>Customers</span>
            <span>Newsletter</span>
          </div>
          <div className="footer-item">
            <h3>Get in Touch</h3>
            <span>
              Phú Diễn, Bắc Từ Liêm, Hà Nội,
              <br />
              Việt Nam
            </span>
            <span>info@email.com</span>
            <span>+00 (123) 456 789 0</span>
          </div>
        </div>
        <div className="footer-bottom">
          <p>© 2023 DuyDepTrai. All rights reserved</p>
          <div className="footer-icon">
            <i className="bx bxl-facebook-circle"></i>
            <i className="bx bxl-instagram-alt"></i>
            <i className="bx bxl-twitter"></i>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default ClientLayout;
