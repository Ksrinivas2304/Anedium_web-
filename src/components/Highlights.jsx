import React from "react";
import mobileHighlight from "../assets/mobile-highlight.png";
import ratingsImg from "../assets/ratingsHighlights.png";
import growthImg from "../assets/growth-highlight.png";
import usageImg from "../assets/usage-highlight.png";

const Highlights = () => {
  return (
    <>
    <div className="container-flow mx-md-5 m3-5 p-0">
      <div className="row m-auto">
      <h1>Highlights</h1>
        <div className="col-lg-3 col-md-6 col-12 my-2">
          <div className="Imghighlightcontainer">
            <img
              src={mobileHighlight}
              alt="Downloads"
              style={{ width: "100%" }}
            />
            <div className="top-centered">Downloads</div>
            <div className="middle-centered">5,00,000</div>
            <div className="bottom-centered">500K+ app store downloads</div>
          </div>
        </div>
        <div className="col-lg-3 col-md-6 col-12 my-2">
          <div className="Imghighlightcontainer">
            <img src={ratingsImg} alt="Ratings" style={{ width: "100%" }} />
            <div className="top-centered">User Ratings</div>
            <div className="middle-centered">4.5</div>
            <div className="bottom-centered">Average 4.5-star rating</div>
          </div>
        </div>
        <div className="col-lg-3 col-md-6 col-12 my-2">
          <div className="Imghighlightcontainer">
            <img src={growthImg} alt="User Growth" style={{ width: "100%" }} />
            <div className="top-centered">User Growth</div>
            <div className="middle-centered">30%</div>
            <div className="bottom-centered">30% increase in user base in the past six months</div>
          </div>
        </div>
        <div className="col-lg-3 col-md-6 col-12 my-2">
          <div className="Imghighlightcontainer">
            <img src={usageImg} alt="Feature Usage" style={{ width: "100%" }} />
            <div className="top-centered">Feature Usage</div>
            <div className="middle-centered">90%</div>
            <div className="bottom-centered">90% of users use our study tools regularly</div>
          </div>
        </div>
      </div>
    </div>
    </>
  );
};

export default Highlights;
