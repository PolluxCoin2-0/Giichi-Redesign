import HeroSection from "../../../src/pages/Hero/HeroSection"
import AboutSection from "../About/AboutSection";
import ServicesSection from "../Services/ServicesSection";

const HomeSection = ()=> {
    return (
       <div>


        {/* Hero Section */}
          <HeroSection/>

          {/* About Section */}
          <AboutSection />

           {/* ServicesSection */}
           <ServicesSection />

       </div>
    )
}

export default HomeSection;