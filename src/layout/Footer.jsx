import React from "react";

const Footer = () => {
  return (
    <>
      <footer className="bg-dark text-light pt-4 pb-3 footer">
        <div className="container">
          <div className="row justify-content-between align-items-center">
            <div className="col-12 col-md-8">
              <ul
                className="d-flex flex-wrap flex-column flex-md-row justify-content-md-start 
                            justify-content-center gap-3 mb-3 mb-md-0 p-0 footer-link"
              >
                <li className="list-inline-item m-0">
                  <a href="#" className="text-light text-decoration-none">
                    Terms of Use
                  </a>
                </li>
                <li className="list-inline-item m-0">
                  <a href="#" className="text-light text-decoration-none">
                    Privacy Policy
                  </a>
                </li>
                <li className="list-inline-item m-0">
                  <a href="#" className="text-light text-decoration-none">
                    About Us
                  </a>
                </li>
                <li className="list-inline-item m-0">
                  <a href="#" className="text-light text-decoration-none">
                    FAQs
                  </a>
                </li>
                <li className="list-inline-item m-0">
                  <a href="#" className="text-light text-decoration-none">
                    Contacts
                  </a>
                </li>
                <li className="list-inline-item m-0">
                  <a href="#" className="text-light text-decoration-none">
                    Refund Policy
                  </a>
                </li>
              </ul>
            </div>

            <div className="col-12 col-md-4 text-center text-md-end">
              <div className="d-flex justify-content-center justify-content-md-end gap-3">
                <a href="#" className="text-light">
                  <i className="bi bi-facebook"></i>
                </a>
                <a href="#" className="text-light">
                  <i className="bi bi-twitter"></i>
                </a>
                <a href="#" className="text-light">
                  <i className="bi bi-youtube"></i>
                </a>
                <a href="#" className="text-light">
                  <i className="bi bi-instagram"></i>
                </a>
              </div>
          </div>
              <div className="text-light text-center mt-3 mt-md-5">
                © Copyright 2025. All Rights Reserved.
              </div>
            </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
