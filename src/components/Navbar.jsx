import React from "react";
import logo3 from "../img/logo-3.png";
import { Link } from "react-router-dom";
const Navbar = () => {
  return (
    <header className="header index-2">
      <div className="container">
        <nav className="navbar navbar-expand-lg">
          <h2 className="nav-brand">
            <Link className="navbar-brand" to="/" title="Bizler">
              <img src={logo3} alt="Bizler" />
            </Link>
          </h2>

          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#nav-content"
            aria-controls="nav-content"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon" />
            <span className="navbar-toggler-icon" />
            <span className="navbar-toggler-icon" />
          </button>

          <div className="main-menu collapse navbar-collapse" id="nav-content">
            <ul className="navbar-nav">
              <li className="nav-item">
                <Link to="/" className="nav-item nav-link">
                  Home
                </Link>
              </li>

              <li className="nav-item">
                <Link to="/about" className=" nav-link">
                  AboutUs
                </Link>
              </li>

              <li className="nav-item dropdown">
                <Link to="/services" className="nav-link dropdown-toggle">
                  Services
                </Link>
                <ul className="dropdown-menu">
                  <li className="dropdown-item">
                    <Link to="/web Development">Web Development</Link>
                  </li>

                  <li className="dropdown-item">
                    <Link to="/web Designing">Web Design</Link>
                  </li>

                  <li className="dropdown-item">
                    <Link to="/web Hosting">Web Hosting</Link>
                  </li>

                  <li className="dropdown-item">
                    <Link to="/digital Marketing">Digital Marketing</Link>
                  </li>

                  <li className="dropdown-item">
                    <Link to="/services" className=" nav-link">
                      All Services
                    </Link>
                  </li>
                </ul>
              </li>

              <li className="nav-item">
                <Link to="/portfolio" className=" nav-link">
                  Portfolio
                </Link>
              </li>

              <li className="nav-item">
                <Link to="/blog" className=" nav-link">
                  Blog
                </Link>
              </li>

              <li className="nav-item">
                <Link to="/contactUs" className=" nav-link">
                  ContactUs
                </Link>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
