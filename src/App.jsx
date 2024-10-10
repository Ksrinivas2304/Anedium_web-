import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import AboutUs from "./pages/AboutUs";
import Services from "./pages/services";
import Pricing from "./pages/pricing";
import Career from "./pages/Career";
import SoftwareDeveloper from "./Career components/SoftwareDeveloper";
import AplicationSoftwareDeveloper from "./Career components/AplicationSoftwareDeveloper";
import ContactUs from "./pages/ContactUs";
import VisionAndMission from "./pages/VisionAndMission";
import Ourterms from "./pages/Ourterms";
import Ourhistory from "./components/Ourhistory";
import OurAdvisors from "./components/OurAdvisors";
import OurTeams from "./components/OurTeams";
import EmpoweringLearners from "./components/EmpoweringLearners";
import OurPoineer from "./components/OurPoineer";
import Servicefeatures from "./pages/Servicefeature";
import Nopage from "./pages/Nopage";
import "./App.css";

function App() {
  return (
    <>
      <div>
        <Routes>
          <Route index element={<Home />} />
          <Route path="home" element={<Home />} />

          <Route path="aboutus" element={<AboutUs />}>
            <Route path="ourhistory" element={<Ourhistory />} />
            <Route path="visionandmission" element={<VisionAndMission />} />
            <Route path="ouradvisors" element={<OurAdvisors />} />
            <Route path="ourstory" element={<EmpoweringLearners />} />
            <Route path="ourteams" element={<OurTeams />} />
            <Route path="ourpioneer" element={<OurPoineer />} />
          </Route>

          <Route path="services" element={<Services />}>
            <Route path="servicefeatures" element={<Servicefeatures />} />
          </Route>

          <Route path="pricing" element={<Pricing />} />
          <Route path="career" element={<Career />}>
            <Route path="softwaredeveloper" element={<SoftwareDeveloper />} />
            <Route path="softwaredeveloperapplication" element={<AplicationSoftwareDeveloper />} />
          </Route>
          <Route path="contact" element={<ContactUs />} />
          <Route path="ourterms" element={<Ourterms />} />

          <Route path="*" element={<Nopage />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
