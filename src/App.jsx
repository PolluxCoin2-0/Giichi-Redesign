import HeroSection from "../src/pages/Hero/HeroSection";
import GetQuote from "./comopnents/GetQuote";
import HomeSection from "./pages/Home/HomeSection";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import ThreeScene from "./comopnents/ThreeScene";
import TextWithBalls from "./comopnents/TextWithBalls";
// import TextAnimation from "./comopnents/TextAnimation";
import ParticleScene from "./comopnents/ParticleScene";
import AnimatedBox from "./comopnents/AnimatedBox";

function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/heroSection" element={<HeroSection />} />
          <Route path="/" element={<HomeSection />} />
          <Route path="/home" element={<HomeSection />} />
          <Route path="/quote" element={<GetQuote />} />
          <Route path="/threescene" element={<ThreeScene />} />
          <Route path="/textwithball" element={<TextWithBalls />} />
          {/* <Route path="/textanimation" element={<TextAnimation />} /> */}
          <Route path="/particlescene" element={<ParticleScene />} />
          <Route path="/animatedbox" element={<AnimatedBox />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
