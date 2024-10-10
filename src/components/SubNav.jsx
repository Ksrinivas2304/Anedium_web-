import React from "react";
import { NavLink } from "react-router-dom";

const SubNav = () => {
  return (
    <div className="container-flow mx-md-5">
         <nav className="navbar navbar-expand-md subnav">
        <ul className="navbar-nav d-flex justify-content-between navOptions">
          <li className="nav-item mx-2">
            <NavLink
              className={({ isActive }) =>
                isActive ? "nav-link px-3 actived" : "nav-link px-3"
              }
              to="ourstory"
            >
              Our Story
            </NavLink>
          </li>
          <li className="nav-item mx-2">
            <NavLink
              className={({ isActive }) =>
                isActive ? "nav-link px-3 actived" : "nav-link px-3"
              }
              to="visionandmission"
            >
              Vision & Mission
            </NavLink>
          </li>
          <li className="nav-item mx-2">
            <NavLink
              className={({ isActive }) =>
                isActive ? "nav-link px-3 actived" : "nav-link px-3"
              }
              to="ourhistory"
            >
              Our History
            </NavLink>
          </li>
          <li className="nav-item mx-2">
            <NavLink
              className={({ isActive }) =>
                isActive ? "nav-link px-3 actived" : "nav-link px-3"
              }
              to="ourpioneer"
            >
              Our Pioneer
            </NavLink>
          </li>
          <li className="nav-item mx-2">
            <NavLink
              className={({ isActive }) =>
                isActive ? "nav-link px-3 actived" : "nav-link px-3"
              }
              to="ouradvisors"
            >
              Our Advisors
            </NavLink>
          </li>
          <li className="nav-item mx-2">
            <NavLink
              className={({ isActive }) =>
                isActive ? "nav-link px-3 actived" : "nav-link px-3"
              }
              to="ourteams"
            >
              Our Teams
            </NavLink>
          </li>
        </ul>
        </nav>
    </div>
  );
};

export default SubNav;
