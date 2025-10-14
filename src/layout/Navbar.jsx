import React from "react";
import { FaCartShopping } from "react-icons/fa6";
import NumberLogo  from "../assets/images/logo.png";
const Navbar = () => {
  return (
    <>
      <nav className="navbar navbar-expand-lg bg-white shadow-sm py-3 Header">
        <div className="container">
          <a
            className="navbar-brand d-flex flex-column align-items-start"
            href="#"
          >
            <img src={NumberLogo} alt="logo"  className="nav-img"/>
          </a>

          <div className="d-flex align-items-center">
            <button
              className="navbar-toggler border-0"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarNav"
              aria-controls="navbarNav"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
          </div>

          <div
            className="collapse navbar-collapse justify-content-end text-center mt-3 mt-lg-0"
            id="navbarNav"
          >
            <ul className="navbar-nav ms-auto Header-link">
              <li className="nav-item">
                <a className="nav-link fw-semibold text-dark" href="#">
                  Courses
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link fw-semibold text-dark" href="#">
                  Membership
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link fw-semibold text-dark" href="#">
                  <FaCartShopping/>
                </a>
              </li>
              <li className="nav-item">
                <button className="btn btn-primary px-4 fw-bold mt-2 mt-lg-0">
                  Login
                </button>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
