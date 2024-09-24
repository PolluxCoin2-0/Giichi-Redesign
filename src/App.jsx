// import Navbar from "../src/layout/Navbar";
import HeroSection from "../src/pages/Hero/HeroSection";
import GetQuote from "./comopnents/GetQuote";
import HomeSection from "./pages/Home/HomeSection";
// import Chatbot from "./comopnents/Chatbot";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/heroSection" element={<HeroSection />} />

          <Route path="/" element={<HomeSection />} />
          <Route path="/home" element={<HomeSection />} />
          <Route path="/quote" element={<GetQuote />} />
          {/* <Route path="/chatbot" element={<Chatbot />} /> */}
        </Routes>
      </Router>
    </div>
  );
}

export default App;
