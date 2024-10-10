import React from 'react'
import globeImg from "../assets/Group 633774.jpg";
import paperRocket from "../assets/paper-rocket.jpg";
import rightArrow from "../assets/Vector (1).png";

const Demo = () => {
  return (
    <div>
      <div className="container-flow mx-md-5">
        <div className="row mx-2 mt-5">
          <div className="col-12 col-md-7 mb-3">
            <div className="d-flex align-items-center topTextDiv">
              <div className="m-auto text-center">
                <p className="headText text-center">
                  The best education-focused social commerce platform in India
                </p>
                <button className="btn demoBtn px-5 py-2">
                  Try Demo{" "}
                  <img
                    className="bg-primary rightArrow"
                    src={rightArrow}
                    alt="arrow"
                  />
                </button>
              </div>
            </div>
          </div>
          <div className="col-12 col-md-5">
            <div className="m-auto globeImgDiv">
              <img
                className="globeImg w-100"
                id=""
                src={globeImg}
                alt="globe"
              />
            </div>
          </div>
          <div className="col-12">
            <div className="col-3 m-auto">
              <img
                className="paper_rocket w-100"
                id="paperRocket"
                src={paperRocket}
                alt="rocket"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Demo
