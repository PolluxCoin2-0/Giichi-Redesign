import HeroSection from "../src/pages/Hero/HeroSection";
import GetQuote from "./components/GetQuote";
import HomeSection from "./pages/Home/HomeSection";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
// import SoftwareDevelopment from "./pages/NavbarLayout/SoftwareDevelopment";
// import SoftwareTesting from "./pages/NavbarLayout/SoftwareTesting";
// import DigitalTransformation from "./pages/NavbarLayout/DigitalTransformation";
// import ITConsulting from "./pages/NavbarLayout/ITConsulting";


function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/heroSection" element={<HeroSection />} />
          <Route path="/" element={<HomeSection />} />
          <Route path="/home" element={<HomeSection />} />
          <Route path="/quote" element={<GetQuote />} />
          {/* <Route path="/softwaredev" element={<SoftwareDevelopment />} /> */}
          {/* <Route path="/softwaretest" element={<SoftwareTesting />} /> */}
          {/* <Route path="/digitalTransformation" element={<DigitalTransformation />} /> */}
          {/* <Route path="/itconsulting" element={<ITConsulting />} /> */}
        </Routes>
      </Router>
    </div>
  );
}

export default App;
