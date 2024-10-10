import React from "react";
import { Outlet, useLocation } from "react-router-dom";
import { useNavigate } from "react-router-dom";

import Header from "../components/Header";
import careerimage from "../assets/careerImg.png";
import Footer from "../components/Footer";

const Career = () => {
  const location = useLocation();

  const navigate = useNavigate();

  const softwareDeveloper = () => {
    navigate("softwaredeveloper");
  };
  const isSubPage = location.pathname.includes("softwaredeveloper");
  return (
    <div>
      <Header />
      {!isSubPage && (
        <>
          <div className="container-flow m-md-5">
            <h1 className="text-center creerHead">Join our team</h1>
            <div className="container career">
              <p className="text-center">
                we're building more than just a team—we're creating a network of
                professionals. We understand that finding the right career path
                is a journey, and our mission is to guide you through that
                journey with ease. Step into an enriching work environment where
                every day is a new opportunity to learn, grow, and thrive.
              </p>
              <div className="m-auto text-center">
                <img src={careerimage} alt="" className="img img-fluid" />
              </div>
            </div>
            <h1 className="text-center">Discover Exciting Opportunities</h1>
            <div className="container-flow careerRolls">
              <div className="row m-auto">
                <div className="col-12 col-md-4 my-3">
                  <div className="border p-2 h-100" onClick={softwareDeveloper}>
                    <h4>Software developer</h4>
                    <p>
                      "Join our team as a Software Developer and be at the
                      forefront of innovation. Contribute to cutting-edge
                      projects, collaborate with a dynamic team, and drive
                      impactful solutions that shape the future of technology."
                    </p>
                  </div>
                </div>
                <div className="col-md-4 my-3">
                  <div className="border p-2 h-100">
                    <h4>Ui Ux designer</h4>
                    <p>
                      "Join our team as a UI/UX Designer and craft intuitive,
                      user-centered designs. Shape engaging digital experiences,
                      collaborate with a creative team, and drive innovation
                      that enhances user satisfaction across diverse platforms."
                    </p>
                  </div>
                </div>
                <div className="col-md-4 my-3">
                  <div className="border p-2 h-100">
                    <h4>Web developer</h4>
                    <p>
                      "Join our team as a Web Developer and build robust,
                      scalable websites. Work on dynamic projects, collaborate
                      with a skilled team, and create seamless, high-performing
                      web solutions that drive user engagement."
                    </p>
                  </div>
                </div>
                <div className="col-md-4 my-3">
                  <div className="border p-2 h-100">
                    <h4>Graphic designer</h4>
                    <p>
                      "Join our team as a Graphic Designer and bring ideas to
                      life with stunning visuals. Contribute to impactful
                      projects, collaborate with a creative team, and design
                      compelling content that elevates our brand."
                    </p>
                  </div>
                </div>
                <div className="col-md-4 my-3">
                  <div className="border p-2 h-100">
                    <h4>Full stack developer</h4>
                    <p>
                      "Join our team as a Full stack Developer and develop
                      end-to-end solutions. Tackle complex projects, collaborate
                      with a versatile team, and create innovative software that
                      drives business growth and efficiency."
                    </p>
                  </div>
                </div>
                <div className="col-md-4 my-3">
                  <div className="border p-2 h-100">
                    <h4>Data analyst</h4>
                    <p>
                      "Join our team as a Data Analyst and unlock insights from
                      data. Analyze trends, collaborate with a strategic team,
                      and drive data-driven decisions that shape the future of
                      our organization."
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </>
      )}
      <Outlet />
      <Footer />
    </div>
  );
};

export default Career;
