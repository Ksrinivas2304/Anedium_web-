import React from "react";
import stayconnectedmobiles from "../assets/stayConnectedPhonesImg.png";
import playStore from "../assets/playStore.png";
import appleStore from "../assets/appleStore.png";

const StayConnectedBox = () => {
  return (
    <div className="container-flow m-md-5 p-2">
      <div className="row StayConnectedBox rounded-3 m-auto">
        <div className="col-lg-6 col-12 p-5 pb-0">
          <img
            src={stayconnectedmobiles}
            alt="mobiles"
            className="w-100 mb-0"
          />
        </div>
        <div className="col-lg-6 col-12 pt-2">
          <div className="StayConnectedText">
            <h1>“Stay connected anywhere”</h1>
            <p>
              Easily create and schedule engaging posts, manage your brand's
              presence, and streamline your content workflow—all from your
              mobile device.
            </p>
            <div>
              <img src={playStore} alt="" className="playStore my-2 me-3" />
              <img src={appleStore} alt="" className="appleStore my-2" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StayConnectedBox;
