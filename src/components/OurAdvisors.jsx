import React from "react";
import advisorImg from "../assets/advisor.png";

const OurAdvisors = () => {
  return (
    <>
      <div className="container-flow m-md-5">
        <h1>Our Advisors</h1>
        <div className="container">
          <h4 className="text-center my-md-5">
            "Meet the experts who help us navigate challenges and achieve our
            mission."
          </h4>
          <div className="container">
            <div className="row">
              <div className="col-12 col-md-3 col-sm-6">
                <div className="m-auto advisorImg">
                  <img src={advisorImg} alt="" className="w-100" />
                </div>
                <h3 className="text-center">Manoj</h3>
                <h6 className="text-center roll">Lead Ui Ux designer</h6>
              </div>
              <div className="col-12 col-md-3 col-sm-6">
                <div className="m-auto advisorImg">
                  <img src={advisorImg} alt="" className="w-100" />
                </div>
                <h3 className="text-center">Manoj</h3>
                <h6 className="text-center roll">Lead Ui Ux designer</h6>
              </div>
              <div className="col-12 col-md-3 col-sm-6">
                <div className="m-auto advisorImg">
                  <img src={advisorImg} alt="" className="w-100" />
                </div>
                <h3 className="text-center">Manoj</h3>
                <h6 className="text-center roll">Lead Ui Ux designer</h6>
              </div>
              <div className="col-12 col-md-3 col-sm-6">
                <div className="m-auto advisorImg">
                  <img src={advisorImg} alt="" className="w-100" />
                </div>
                <h3 className="text-center">Manoj</h3>
                <h6 className="text-center roll">Lead Ui Ux designer</h6>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default OurAdvisors;
