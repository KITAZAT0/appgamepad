/*import fichiers react node_modules */
import React from "react";
import { FiPhone, FiMail } from "react-icons/fi";



function Footer() {
  return (
    <> {/* fragment syntaxe concise*/}
      <footer className="footer-area footer-light">
        <div className="footer-big">
          <div className="container">
            <div className="row">
              <div className="col-md-3 col-sm-12">
                <div className="footer-widget">
                  <div className="widget-about">
                    <img
                      src="/gamepadlogo.png"
                      alt="gamepadlogo.png"
                      className="img-fluid"
                    ></img>
                    <span></span>
                    <p> GamePad 
                      <br></br>
                      Browser Games </p>
                    <ul className="contact-details">
                      <li>
                        <span>
                          <FiPhone /> {/* composant import react icons */}
                        </span>
                        <a href="tel:06 50 60 70 80"> 06 50 60 70 80</a>
                      </li>
                      <li>
                        <span><FiMail/></span>
                        <a href="mailto:support@gamepad.com">
                          support@gamepad.com
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="col-md-3 col-sm-4">
                <div className="footer-widget">
                  <div className="footer-menu footer-menu--1">
                    <h4 className="footer-widget-title">Popular Category</h4>
                    <ul>
                      <li>
                        <a href="#">Memory Games</a>
                      </li>
                      <li>
                        <a href="#">Word Games</a>
                      </li>
                      <li>
                        <a href="#">Puzzle Games</a>
                      </li>
                      <li>
                        <a href="#">Chess Games</a>
                      </li>
                      <li>
                        <a href="#">Geography Games</a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="col-md-3 col-sm-4">
                <div className="footer-widget">
                  <div className="footer-menu">
                    <h4 className="footer-widget-title">Our Company</h4>
                    <ul>
                      <li>
                        <a href="#">About Us</a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="col-md-3 col-sm-4">
                <div className="footer-widget">
                  <div className="footer-menu no-padding">
                    <h4 className="footer-widget-title">Help Support</h4>
                    <ul>
                      <li>
                        <a href="#">Support Forum</a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="mini-footer">
          <div className="container">
            <div className="row">
              <div className="col-md-12">
                <div className="copyright-text">
                  <p>
                    © 2020
                  
                      {" "}
                      Kevin Brandao-Beauchard React Project DWWM AFPA2020{" "}
                    
                    . All rights reserved.
                    {/*  Created by
                    <a href="#"></a> */}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}

export default Footer;


