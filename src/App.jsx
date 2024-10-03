import HeroSection from "../src/pages/Hero/HeroSection";
import GetQuote from "./components/GetQuote";
import HomeSection from "./pages/Home/HomeSection";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Calendly from "./components/Calendly";
import CareerPage from "./pages/Career/CareerPage";

function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/heroSection" element={<HeroSection />} />
          <Route path="/" element={<HomeSection />} />
          <Route path="/home" element={<HomeSection />} />
          <Route path="/quote" element={<GetQuote />} />
          <Route path="/calendly" element={<Calendly />} />
          <Route path="/career" element={<CareerPage />} />
         
        </Routes>
      </Router>
    </div>
  );
}

export default App;
