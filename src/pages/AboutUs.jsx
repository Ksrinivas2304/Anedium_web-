import React from 'react';
import { Outlet, useLocation } from "react-router-dom";
import Header from '../components/Header';
import SubNav from '../components/SubNav';
import EmpoweringLearners from '../components/EmpoweringLearners';
import OurVision from '../components/OurVision';
import OurMission from '../components/OurMission';
import Ourhistory from '../components/Ourhistory';
import OurAdvisors from '../components/OurAdvisors';
import OurTeams from '../components/OurTeams';
import OurPoineer from '../components/OurPoineer';
import Footer from "../components/Footer";

const AboutUs = () => {

  const location = useLocation();
 
  const isSubPage = location.pathname.includes("ourhistory") || location.pathname.includes("ourstory") || location.pathname.includes("ouradvisors") || location.pathname.includes("visionandmission") || location.pathname.includes("ourteams") || location.pathname.includes("ourpioneer");

  return (
    <div>
      <Header />
      <SubNav />
      {/* Only render these components if not on subpages */}
      {!isSubPage && (
        <>
          <EmpoweringLearners />
          <OurVision />
          <OurMission />
          <Ourhistory />
          <OurPoineer />
          <OurAdvisors />
          <OurTeams />
          <Footer />
        </>
      )}
      <Outlet />
    </div>
  );
};

export default AboutUs;
