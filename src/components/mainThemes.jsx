import socialnetworking from "../assets/socialNetworking.png";
import courseMarketing from "../assets/courseMarketPlace.png";
import shoppingExperience from "../assets/shoppingExperience.png";
import Bytes from "../assets/Bytes.png";
import React from "react";
import "./mainThemes.css";

const MainThemes = () => {
  return (
    <div className="container-flow p-3 mx-md-5">
      <h1>Main Themes</h1>
      <div className="row m-auto">
        <div className="col-lg-6  col-12 my-3">
          <div className="row border ThemeBox rounded-3 me-lg-3">
            <div className="col-4">
              <div>
                <img
                  src={socialnetworking}
                  alt="Social Networking"
                  className="w-100 col-12"
                />
                <h6 className="col-12 text-center">Social Networking</h6>
              </div>
            </div>
            <div className="col-8">
              <div className="d-flex align-items-center topTextDiv">
                <div className="m-auto themesBoxText">
                  Connect with other students, educators, and institutions to
                  share ideas, collaborate on projects, and build communities.
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-lg-6  col-12 my-3">
          <div className="row border ThemeBox rounded-3 ms-lg-3 h-100">
            <div className="col-4">
              <div className="row">
                <img
                  src={courseMarketing}
                  alt="Course Marketing"
                  className="w-100 col-12"
                />
                <h6 className="col-12 text-center">Course Marketing</h6>
              </div>
            </div>
            <div className="col-8">
              <div className="d-flex align-items-center topTextDiv">
                <div className="m-auto themesBoxText">
                  Discover and enroll in a wide range of courses offered by
                  schools, institutes, and universities across India.
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-lg-6  col-12 my-3">
          <div className="row border ThemeBox rounded-3 me-lg-3 h-100">
            <div className="col-4">
              <div className="row">
                <img
                  src={shoppingExperience}
                  alt="Shopping Experience"
                  className="w-100 col-12"
                />
                <h6 className="col-12 text-center">Shopping Experience</h6>
              </div>
            </div>
            <div className="col-8">
              <div className="d-flex align-items-center topTextDiv">
                <div className="m-auto themesBoxText">
                  Access a curated marketplace where students can buy and sell
                  educational materials, textbooks, and resources.
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-lg-6  col-12 my-3">
          <div className="row border ThemeBox rounded-3 ms-lg-3">
            <div className="col-4">
              <div className="row">
                <img src={Bytes} alt="Bytes" className="w-100 col-12" />
                <h6 className="col-12 text-center">Bytes</h6>
              </div>
            </div>
            <div className="col-8">
              <div className="d-flex align-items-center topTextDiv">
                <div className="m-auto themesBoxText">
                  Watch short, educational videos (bytes) created by educators
                  and students on various topics, from academic subjects to
                  extracurricular interests.
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainThemes;
