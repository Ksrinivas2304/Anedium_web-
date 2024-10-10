import React from "react";
import { NavLink } from "react-router-dom";
import logo from "../assets/mainLogo.jpg";
import { FaSearch } from "react-icons/fa";
import "./Header.css";

const Header = () => {
  return (
    <>
      <div className="container-fluid navbar1">
        <nav className="navbar navbar-expand-lg">
          <div className="container-fluid mx-2">
            <NavLink className="nav-brand" to="/home">
              <img className="navLogo" id="logo" src={logo} alt="logo" />
            </NavLink>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#mynavbar"
            >
              <span size="1em" className="navbar-toggler-icon" />
            </button>
            <div className="collapse navbar-collapse" id="mynavbar">
              <ul className="navbar-nav mx-auto d-flex justify-content-between navOptions">
                <li className="nav-item">
                  <NavLink
                    className={({ isActive }) =>
                      isActive ? "nav-link px-3 active" : "nav-link px-3"
                    }
                    to="/home"
                  >
                    Home
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink
                    className={({ isActive }) =>
                      isActive ? "nav-link px-3 active" : "nav-link px-3"
                    }
                    to="/aboutus"
                  >
                    About Us
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink
                    className={({ isActive }) =>
                      isActive ||
                      window.location.pathname.startsWith("/services")
                        ? "nav-link px-3 active"
                        : "nav-link px-3"
                    }
                    to="/services"
                    end
                  >
                    Services
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink
                    className={({ isActive }) =>
                      isActive ? "nav-link px-3 active" : "nav-link px-3"
                    }
                    to="/pricing"
                  >
                    Pricing
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink
                    className={({ isActive }) =>
                      isActive ? "nav-link px-3 active" : "nav-link px-3"
                    }
                    to="/career"
                  >
                    Career
                  </NavLink>
                </li>
              </ul>

              <button className="btn rounded-pill contactBtn" type="button">
                <a href="contact"> Contact Us</a>
              </button>
            </div>
          </div>
        </nav>
      </div>
      <FaSearch size="2em" className="SearchCon" />
    </>
  );
};

export default Header;
