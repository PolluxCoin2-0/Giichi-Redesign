// import Navbar from "../src/layout/Navbar";
import HeroSection from "../src/pages/Hero/HeroSection";
// import AboutSection from "../src/pages/About/AboutSection";
import HomeSection from "./pages/Home/HomeSection";
import ContactPopUp from "./comopnents/ContactPopUp";
import {
  BrowserRouter as Router,
  Route,
  Routes,
 
} from "react-router-dom";

function App() {
  

  return (
      
    <div>
      <Router>
        <Routes>
          {/* <Route path="/navbar" element={<Navbar/>} /> */}
          <Route path="/heroSection" element={<HeroSection/>} />
          {/* <Route path="/aboutSection" element={<AboutSection />}/> */}
          <Route path="/" element={<HomeSection />} />
          <Route path="/home" element={<HomeSection />} />
          <Route path="/contact" element={<ContactPopUp />}/>
        </Routes>
      </Router>
    </div>
  )
}

export default App
