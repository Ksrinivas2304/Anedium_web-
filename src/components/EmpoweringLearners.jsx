import EmpoweringLearnersimg from "../assets/EmpoweringLearnersImg.png";
import React from "react";

const EmpoweringLearners = () => {
  return (
    <>
    <div className="container-flow mx-md-5 mb-5 px-md-0 my-md-5">
      <h2 className="EmpoweringSubHead py-2 mb-4">
        “Empowering Learners, Enriching Lives”
      </h2>
      <div className="row p-0 m-0">
        <div className="col-12 col-md-7 ps-md-0 empoweringLearnersContent">
          <p>
            At Anedium AI, we're passionate about revolutionizing the way people
            approach education. As the best education-focused social commerce
            platform in India, we're committed to creating a vibrant online
            community where students, educators, and institutions can connect,
            collaborate, and thrive.
          </p>
          <p>
            Our platform offers a unique blend of social networking and
            e-commerce features, empowering students to discover educational
            resources, connect with peers and mentors, and access a wide range
            of courses from top institutions across the country. Whether you're
            a student seeking new learning opportunities or an educator looking
            to share your knowledge and expertise, Anedium AI Pvt Ltdcis here to
            support you every step of the way.
          </p>
          <p>
            Backed by a team of dedicated professionals and industry experts,
            we're driven by a shared vision of making education more accessible,
            engaging, and impactful for everyone. Join us on this exciting
            journey as we redefine the future of learning in India and beyond.
          </p>
        </div>

        <div className="col-12 col-md-5 pe-md-0">
          <img
            src={EmpoweringLearnersimg}
            alt="empowering learners"
            className="w-100"
          />
        </div>
      </div>
    </div>
    </>
  );
};

export default EmpoweringLearners;
