import React from "react";
import company4 from "../assets/company4.png";
import company3 from "../assets/company3.png";
import company2 from "../assets/company2.png";
import company1 from "../assets/company1.png";

const KeySupporters = () => {
  return (
    <>
    <h1 className="text-center my-5">Key Supporters</h1>
    <div className="container-flow supporters">
      <div className="d-flex flex-wrap m-auto">
        <div className="m-auto my-5 supporterDiv">
          {" "}
          <div className="m-auto supporterImg">
            <img src={company4} alt="" className="image img-fluid w-100" />
          </div>
          <h5 className="text-center">We hub</h5>
          <h6 className="text-center roll">Hyderabad, India</h6>
        </div>
        <div className="m-auto my-5 supporterDiv">
          <div className="m-auto supporterImg">
            <img src={company1} alt="" className="image img-fluid w-100" />
          </div>
          <h5 className="text-center">Startup India TIDE 2.0 </h5>
          <h6 className="text-center roll">Hyderabad, India</h6>
        </div>
        <div className="m-auto my-5 supporterDiv">
          <div className="m-auto supporterImg">
            <img src={company2} alt="" className="image img-fluid w-100" />
          </div>
          <h5 className="text-center">TEZ Accelerator</h5>
          <h6 className="text-center roll">Hyderabad, India</h6>
        </div>
        <div className="m-auto my-5 supporterDiv">
          <div className="m-auto supporterImg">
            <img src={company4} alt="" className="image img-fluid w-100" />
          </div>
          <h5 className="text-center">Vishnu Foundation</h5>
          <h6 className="text-center roll">Hyderabad, India</h6>
        </div>
        
        <div className="m-auto my-5 supporterDiv">
          <div className="m-auto supporterImg">
            <img src={company3} alt="" className="image img-fluid w-100" />
          </div>
          <h5 className="text-center">SRIX incubator from SR University</h5>
          <h6 className="text-center roll">Hyderabad, India</h6>
        </div>
      </div>
    </div>
    </>
  );
};

export default KeySupporters;
