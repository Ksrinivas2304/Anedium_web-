import React from "react";
import Header from "../components/Header";
import Demo from "../components/Demo";
import MainThemes from "../components/mainThemes";
import Highlights from "../components/Highlights";
import StayConnectedBox from "../components/StayConnectedBox";
import EmpoweringLearners from "../components/EmpoweringLearners";
import institute2 from "../assets/InstituteImg2.png";
import Realstories from "../components/Realstories";
import Footer from "../components/Footer";
import KeySupporters from "../components/keySupporters";
import "./Home.css";

const Home = () => {
  return (
    <div>
      <Header />
     
        <Demo />
        <MainThemes />
        <Highlights />
        <StayConnectedBox />
        <h1 className="container-flow mx-md-5">Our Story</h1>
        <EmpoweringLearners />

        {/* <div className="container institutes py-5">
          <h1 className="text-center">
            Learn with 200+ Top institutions and educators
          </h1>
          <div className="row mt-lg-4">
            <div className="col-md-2 m-auto">
              <div style={{ width: "max-content" }} className="m-auto">
                <div className="row">
                  <div className="col-4">
                    <img src={institute2} alt="" className="w-100" />
                  </div>
                  <div className="col-8 d-flex align-items-center">
                    IMS Proschool
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-2 m-auto">
              <div style={{ width: "max-content" }} className="m-auto">
                <div className="row">
                  <div className="col-4">
                    <img src={institute2} alt="" className="w-100" />
                  </div>
                  <div className="col-8 d-flex align-items-center">
                    IMS Proschool
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-2 m-auto">
              <div style={{ width: "max-content" }} className="m-auto">
                <div className="row">
                  <div className="col-4">
                    <img src={institute2} alt="" className="w-100" />
                  </div>
                  <div className="col-8 d-flex align-items-center">
                    IMS Proschool
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-2 m-auto">
              <div style={{ width: "max-content" }} className="m-auto">
                <div className="row">
                  <div className="col-4">
                    <img src={institute2} alt="" className="w-100" />
                  </div>
                  <div className="col-8 d-flex align-items-center">
                    IMS Proschool
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-2 m-auto">
              <div style={{ width: "max-content" }} className="m-auto">
                <div className="row">
                  <div className="col-4">
                    <img src={institute2} alt="" className="w-100" />
                  </div>
                  <div className="col-8 d-flex align-items-center">
                    IMS Proschool
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div> */}
        <Realstories />
          <KeySupporters />
      <Footer />
    </div>
  );
};

export default Home;
