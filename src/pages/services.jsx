import React from "react";
import { Outlet, useLocation } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";
import service1 from "../assets/service1.png";
import service2 from "../assets/services2.png";
import rightArrow from "../assets/Vector (1).png";
import { useNavigate } from 'react-router-dom';

const Services = () => {
  const location = useLocation(); 
  const navigate = useNavigate(); 

  const servicefeature = () => {
    navigate("servicefeatures"); 
  };

  const isServiceFeaturesPage = location.pathname.includes("servicefeatures");

  return (
    <div>
      <Header />
      {!isServiceFeaturesPage && ( 
          <>
          <h1 className="m-5 serviceHead">Anedium AI Services</h1>
        <div className="container-flow p-2 p-md-0 m-md-5">
            <div className="serviceDiv my-5">
              <img src={service1} alt="" className="w-100" />
              <h4 className="serviceText1 text-center">
                India's Premier Education-Focused Social Commerce Platform
              </h4>
              <div
                className="serviceText2"
                onClick={servicefeature}
              >
                Lets Explore{" "}
                <img className="rightArrow" src={rightArrow} alt="arrow" />
              </div>
            </div>

            <div className="serviceDiv my-5">
              <img src={service2} alt="" className="w-100" />
              <h4 className="text-light serviceText1 text-center">
                India's Leading PG Hostel Booking and Management Platform
              </h4>
              <div className="serviceText2">Coming Soon</div>
            </div>
        </div>
          </>
      )}
      <Outlet />{" "}
      <Footer />
    </div>
  );
};

export default Services;
