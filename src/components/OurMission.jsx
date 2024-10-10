import React from "react";
import "./Missionandvision.css";
import missionImg from "../assets/mission.png";

const OurMission = () => {
  return (
    <div className="container-flow p-2 p-md-0 m-md-5">
      <div className="mission-container">
        <img src={missionImg} alt="mission" className="w-100" />
        <p className="missionHead text-center">OUR MISSION</p>
        <div className="mission-centered m-md-5 p-0">
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

export default OurMission;
