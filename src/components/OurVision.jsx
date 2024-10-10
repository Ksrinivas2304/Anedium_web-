import React from "react";
import visionImg from "../assets/vision.png";
import "./Missionandvision.css";

const OurVision = () => {
  return (
    <div className="container-flow p-2 p-md-0 m-md-5">
      <div className="vision-container">
        <img src={visionImg} alt="" className="w-100" />
        <p className="VisionHead text-center">OUR VISION</p>
        <div className="vision-centered m-md-5 p-0">
          Our vision is to transform the landscape of education by leveraging
          technology and innovation to make learning more accessible, engaging,
          and impactful for people of all backgrounds. We envision a future
          where everyone has the opportunity to pursue their educational
          aspirations and unlock their full potential, regardless of
          geographical barriers or socioeconomic constraints.
        </div>
      </div>
    </div>
  );
};

export default OurVision;