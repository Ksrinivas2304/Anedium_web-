import React from "react";
import ourhistory from "../assets/ourhistory.png";

const Ourhistory = () => {
  return (
    <>
      <div className="container-flow mx-sm-2 mx-md-5">
        <div className="row m-auto our_historyContent">
          <h1>Our History</h1>
          <div className="col-12 col-md-7">
            <p>
              Anedium AI was born from a shared passion for transforming
              education and empowering learners of all ages and backgrounds.
              Founded in 2021, our journey began with a simple yet ambitious
              goal: to revolutionize the way people approach learning and make
              education more accessible, engaging, and impactful for everyone.
            </p>
            <p>
              From our humble beginnings as a small team of innovators, we've
              grown into a dynamic and forward-thinking startup, driven by a
              shared commitment to excellence and innovation. With each
              milestone and achievement, we've stayed true to our vision of
              democratizing education and creating positive change in the world.
            </p>
          </div>
          <div className="col-12 col-md-5">
            <div>
              <img src={ourhistory} alt="" className="img img-fluid"/>
            </div>
          </div>
          <div className="col-12">
            <p>
              As we continue to write our story, we're grateful for the support
              of our dedicated team, partners, and community. Together, we're
              building something truly special—a platform that empowers
              individuals to unlock their full potential and pursue their
              educational aspirations with confidence and curiosity. Anedium AI
              was born from a shared passion for transforming education and
              empowering learners of all ages and backgrounds. Founded in
              [Year], our journey began with a simple yet ambitious goal: to
              revolutionize the way people approach learning and make education
              more accessible, engaging, and impactful for everyone.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Ourhistory;
