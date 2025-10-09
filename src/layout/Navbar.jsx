import React from "react";
import "../assets/css/style.css";
import { IoCartOutline } from "react-icons/io5";
function Navbar() {
  return (
    <nav
      className="navbar navbar-expand-lg navbar-light bg-white shadow-sm py-3 fixed-top"
      style={{ zIndex: 1030 }}
    >
      <div className="container">
        <a className="navbar-brand" href="#">
          <img
            src="/src/assets/images/logo.png"
            alt="Red & White Logo"
            height="50"
          />
        </a>

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto mb-2 mb-lg-0 gap-3 align-items-center">
            <li className="nav-item">
              <a className="nav-link" href="#">Courses</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">Membership</a>
            </li>
            <li className="nav-item" style={{ fontSize: "1.5rem" } }> 
              <IoCartOutline />
            </li>
            <li className="nav-item">
              <a className="btn button btn-inline" href="#">Login</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
