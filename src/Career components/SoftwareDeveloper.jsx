import React from "react";
import { useNavigate } from 'react-router-dom';
import careerSubImage from "../assets/careerSubImage.png";
import rightArrow from "../assets/Vector (1).png";

const SoftwareDeveloper = () => {

  const navigate = useNavigate();

  const goToApplication = () => {
    navigate('/career/softwaredeveloperapplication');
  };

  return (
    <>
      <div className="subCareerDiv">
        <img src={careerSubImage} alt="" className="m-auto w-100" />
        <h1 className="text-center text-light subCareerText1">
          Software Developer
        </h1>
        <h4 className="text-center text-light subCareerText2">
          Full Time | Hyderabad
        </h4>
        <button className="btn demoBtn px-5 py-2 careerTryNowButton" onClick={goToApplication}>
          Try Demo{" "}
          <img className="rightArrow mx-md-2" src={rightArrow} alt="arrow" />
        </button>
        <div className="subCareerShare">
          <h4 className="text-light">Share</h4>
          <div className="text-center my-3">
            <i className="fa-brands fa-linkedin text-primary"></i>
          </div>
          <div className="text-center my-3">
            <i className="fa-brands fa-facebook text-primary text-center bg-light rounded-5"></i>
          </div>
          <div className="text-center my-3">
            <i class="fa-brands fa-whatsapp text-light text-center bg-success rounded-5"></i>
          </div>
          <div className="text-center my-3">
            <i class="fa-brands fa-x-twitter text-light text-center"></i>
          </div>
        </div>
      </div>
      <div className="container m-md-5">
        <h2 className="jobDescriptonHead">Job description</h2>
        <div className="jobDescriptonPoints">
          <h3>Responsibilities</h3>
          <ul>
            <li>
              Develop high-quality software solutions that meet project
              requirements and deadlines.
            </li>
            <li>
              Collaborate with cross-functional teams to design, develop, and
              test software applications.
            </li>
            <li>
              Write clean, maintainable, and efficient code following best
              practices and coding standards.
            </li>
            <li>
              Troubleshoot and debug software issues to ensure optimal
              performance and reliability.
            </li>
            <li>
              Stay updated on emerging technologies and trends in software
              development to incorporate into projects.
            </li>
            <li>
              Participate in code reviews, brainstorming sessions, and technical
              discussions to improve software quality and efficiency.
            </li>
            <li>
              Document software specifications, designs, and implementation
              details for reference and future maintenance.
            </li>
            <li>
              Provide technical support and guidance to team members and
              stakeholders as needed.
            </li>
          </ul>
          <h3>Requirements</h3>
          <ul>
            <li>
              Develop high-quality software solutions that meet project
              requirements and deadlines.
            </li>
            <li>
              Collaborate with cross-functional teams to design, develop, and
              test software applications.
            </li>
            <li>
              Write clean, maintainable, and efficient code following best
              practices and coding standards.
            </li>
            <li>
              Troubleshoot and debug software issues to ensure optimal
              performance and reliability.
            </li>
            <li>
              Stay updated on emerging technologies and trends in software
              development to incorporate into projects.
            </li>
            <li>
              Participate in code reviews, brainstorming sessions, and technical
              discussions to improve software quality and efficiency.
            </li>
            <li>
              Document software specifications, designs, and implementation
              details for reference and future maintenance.
            </li>
            <li>
              Provide technical support and guidance to team members and
              stakeholders as needed.
            </li>
          </ul>
        </div>
        <button className="btn demoBtn px-5 py-2 my-sm-4" onClick={goToApplication}>
          Try Demo{" "}
          <img className="rightArrow mx-md-2" src={rightArrow} alt="arrow" />
        </button>
      </div>
    </>
  );
};

export default SoftwareDeveloper;
