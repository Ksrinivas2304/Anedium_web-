import React from "react";
import ApplicationForm from "./ApplicationForm";

const AplicationSoftwareDeveloper = () => {
  return (
    <>
      <div className="container-flow mx-md-5">
        <div>
          <a href="/career">Career</a>/{" "}
          <a href="softwaredeveloper">Software Developer</a>/{" "}
          <a href="#">Application</a>
        </div>
        <h1 className="text-center applicationHead">Software Developer</h1>
          <ApplicationForm />
      </div>
    </>
  );
};

export default AplicationSoftwareDeveloper;
