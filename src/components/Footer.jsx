import React from "react";
import { NavLink } from "react-router-dom"; // Import NavLink from react-router-dom
import "./Footer.css";
import flag from "../assets/flag.png";

const Footer = () => {
  return (
    <>
      <div className="container-fluid footer pt-5">
        <div className="container-flow mx-md-5">
          <div className="row border-bottom">
            <div className="col-12 col-md-6">
              <div className="row">
                <div className="col-12 col-md-3">
                  <h5>About Us</h5>
                  <div className="my-4">
                    <p>
                      <NavLink to="/aboutus/ourstory">Our Story</NavLink> {/* Use NavLink here */}
                    </p>
                    <p>
                      <NavLink to="/aboutus/visionandmission">Vision & Mission</NavLink>
                    </p>
                    <p>
                      <NavLink to="/aboutus/ourhistory">Our History</NavLink>
                    </p>
                    <p>
                      <NavLink to="/aboutus/ourpioneer">Our Pioneer</NavLink>
                    </p>
                    <p>
                      <NavLink to="/aboutus/ourteams">Our Teams</NavLink>
                    </p>
                  </div>
                </div>
                <div className="col-12 col-md-3">
                  <h5>Pricing</h5>
                  <div className="my-4">
                    <p>
                      <NavLink to="/pricing">Pricing Plans</NavLink>
                    </p>
                    <p>
                      <NavLink to="/faq">FAQ’s</NavLink>
                    </p>
                  </div>
                </div>
                <div className="col-12 col-md-3">
                  <h5>Blogs</h5>
                  {/* Add blog links if needed */}
                </div>
                <div className="col-12 col-md-3">
                  <h5>Services</h5>
                  {/* Add service links if needed */}
                </div>
              </div>
            </div>
            <div className="col-12 col-md-6">
              <div className="row">
                <div className="col-0 col-md-6"></div>
                <div className="col-12 col-md-6">
                  <h5>Address</h5>
                  <p>
                    2-34/1P-38, Plot No.38, Balaji Nagar Patiguda,Thurkyamjal NA
                    Hyderabad Rangareddi TG 501510 IN
                  </p>
                  <div className="d-inline-flex my-1">
                    <i className="fa-solid fa-envelope mx-0"></i>
                    <p className="mx-1">anediumai@gmail.com</p>
                  </div>
                  <br />
                  <div className="d-inline-flex my-1">
                    <i className="fa-solid fa-phone-flip mx-0"></i>
                    <p className="mx-1">04179 - 223489</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-md-4 d-flex align-items-center btmLinks my-2">
              <NavLink to="/privacy-policy">Privacy Policy</NavLink>
              <NavLink to="/terms">Terms & Service</NavLink>
              <NavLink to="/contact">Contact Us</NavLink>
            </div>
            <div className="col-4 d-flex justify-content-around align-items-center my-2">
              <i className="fa-brands fa-linkedin"></i>
              <i className="fa-brands fa-twitter"></i>
              <i className="fa-brands fa-facebook"></i>
              <i className="fa-brands fa-instagram"></i>
            </div>
            <div className="col-md-4 d-flex justify-content-md-end">
              <div>
                Made in India
                <img src={flag} alt="" className="w-5" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
