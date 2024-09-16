import HeroSection from "../../../src/pages/Hero/HeroSection"
import AboutSection from "../About/AboutSection";
import ServicesSection from "../Services/ServicesSection";
import SolutionsSection from "../Solutions/SolutionSection";
const HomeSection = ()=> {
    return (
       <div>


        {/* Hero Section */}
          <HeroSection/>

          {/* About Section */}
          <AboutSection />

           {/* ServicesSection */}
           <ServicesSection />

           {/* Solution Section */}
           <SolutionsSection />

       </div>
    )
}

export default HomeSection;