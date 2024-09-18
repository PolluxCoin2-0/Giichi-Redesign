import HeroSection from "../../../src/pages/Hero/HeroSection"
import AboutSection from "../About/AboutSection";
import ServicesSection from "../Services/ServicesSection";
import SolutionsSection from "../Solutions/SolutionSection";
import TechnologiesSection from "../Technologies/TechnologiesSection";
import IndustriesSection from "../Industries/IndustriesSection";
import PortfolioSection from "../Portfolio/PortfolioSection";
import PartnersSection from "../Partners/PartnersSection";
import TestimonialsSection from "../Testimonials/TestimonialsSection";
import ContactsSection from "../Contacts/ContactsSection";
import BlogsSection from "../Blogs/BlogsSection";
import TeamSection from "../Team/TeamSection";
import OpportunitySection from "../Opportunities/OpportunitySection";
import RewardsSection from "../Rewards/RewardSection";
import FaqSection from "../Faq/FaqSection";

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

           {/* Technology Section */}
           <TechnologiesSection />


           {/* Industries Section */}
           <IndustriesSection />

           {/* Portfolio Section */}
           <PortfolioSection />


           {/* Partners Section */}
           <PartnersSection />

           {/* Testimonials Section */}
           <TestimonialsSection />

           {/* Talk to Us */}
           <ContactsSection />

           {/* Blogs Page */}
           <BlogsSection />

           {/* Team Section */}
           <TeamSection />

           {/* Opportunity Section */}
           <OpportunitySection />


           {/* Rewards Section */}
           <RewardsSection />

           {/* FAQ Section */}
           <FaqSection />

       </div>
    )
}

export default HomeSection;