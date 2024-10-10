import React from "react";
import storyImg from "../assets/realstoryImg.png";
import stars from "../assets/stars.png";

const Realstories = () => {
  return (
    <div className="container p-0 my-5 ">
      <h1 className="text-center mt-5">Real Stories, Real Impact</h1>
      <h2 className="text-center mb-5">
        “Discover How Our Solutions Have Transformed Lives”
      </h2>
      <div className="row m-auto">
        <div className="col-lg-6">
          <div className="card mx-3 rounded-5">
            <div className="center storyImg">
              <img className="image img-fluid" src={storyImg} alt="per" />
            </div>
            <div className="card-body">
              <div className="ratingDiv">
                <p className="m-0">Sarah Thompson</p>
                <img src={stars} alt="" />
              </div>
              <p className="card-text m-3">
                "Working with Anedium has been transformative for our business.
                Their solutions boosted our efficiency and their support was
                top-notch. Highly recommended!"
              </p>
            </div>
          </div>
        </div>
        <div className="col-lg-6">
          <div className="card mx-3 rounded-5">
            <div className="center storyImg">
              <img className="image img-fluid" src={storyImg} alt="per" />
            </div>
            <div className="card-body">
              <div className="ratingDiv">
                <p className="m-0">Sarah Thompson</p>
                <img src={stars} alt="" />
              </div>
              <p className="card-text m-3">
                "We've had a great experience with [Your Company]. Their
                solutions improved our performance, though there were minor
                delays. Overall, very satisfied with their work."
              </p>
            </div>
          </div>
        </div>
        <div className="col-lg-6">
          <div className="card mx-3 rounded-5">
            <div className="center storyImg">
              <img className="image img-fluid" src={storyImg} alt="per" />
            </div>
            <div className="card-body">
              <div className="ratingDiv">
                <p className="m-0">Sarah Thompson</p>
                <img src={stars} alt="" />
              </div>
              <p className="card-text m-3">
                "I’m thrilled with Anedium. They exceeded our expectations and
                provided outstanding support. A true partner in achieving our
                goals."
              </p>
            </div>
          </div>
        </div>
        <div className="col-lg-6">
          <div className="card mx-3 rounded-5">
            <div className="center storyImg">
              <img className="image img-fluid" src={storyImg} alt="per" />
            </div>
            <div className="card-body">
              <div className="ratingDiv">
                <p className="m-0">Sarah Thompson</p>
                <img src={stars} alt="" />
              </div>
              <p className="card-text m-3">
                "I’m thrilled with Anedium. They exceeded our expectations and
                provided outstanding support. A true partner in achieving our
                goals."
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Realstories;
