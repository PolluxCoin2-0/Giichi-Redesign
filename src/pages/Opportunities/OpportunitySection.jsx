import { useState } from "react";
import HeroImg from "../../assets/banner_img_home.png";
import ContactPopUp from "../../comopnents/ContactPopUp";
import GetQuote from "../../comopnents/GetQuote";
import ProgressBar from "../../comopnents/ProgressBar";

const testData = [
  { bgcolor: "#F7B611", completed: 60, title: "No. of Clients", value: "200+" },
  {
    bgcolor: "#F7B611",
    completed: 50,
    title: "Delivered Projects",
    value: "150+",
  },
  {
    bgcolor: "#F7B611",
    completed: 65,
    title: "No. of Employees",
    value: "80+",
  },
];

const OpportunitySection = () => {
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const [isQuoteOpen, setIsQuoteOpen] = useState(false);

  const handleButtonClick1 = () => {
    setIsPopupOpen(true);
  };

  const handleClosePopup1 = () => {
    setIsPopupOpen(false);
  };

  const handleButtonClick2 = () => {
    setIsQuoteOpen(true);
  };

  const handleClosePopup2 = () => {
    setIsQuoteOpen(false);
  };

  return (
    <div className="bg-[#000000] px-4 md:px-10 lg:px-32 pt-20 pb-20 flex flex-col lg:flex-row justify-between w-full">
      <div className="w-full lg:w-[40%]">
        <p className="block md:hidden lg:block text-4xl md:text-5xl lg:text-7xl text-[#ffffff] font-bold leading-tight">
          WHY CHOOSE <br /> US?
        </p>

        <p className="hidden md:block lg:hidden text-4xl md:text-5xl lg:text-7xl text-[#ffffff] font-bold leading-tight">
          WHY CHOOSE US?
        </p>

        <div className="flex justify-center">
          <img
            src={HeroImg}
            alt="hero-image"
            className="w-[600px] md:w-[400px] "
          />
        </div>
      </div>

      <div className="w-full lg:w-[60%]">
        <p className="text-4xl md:text-4xl lg:text-5xl text-[#ffffff] font-bold leading-tight  ">
          Maximizing Opportunities for <br />
          Businesses with Our Values
        </p>

        <p className="text-sm md:text-xs lg:text-md text-[#a8a5a5] mt-4   ">
          Maticz is your one-stop solution for all your software development
          demands and requirements. From concept ideation to <br />
          post-launch support, our comprehensive services cover every stage of
          the software lifecycle. With a proven track record of <br />
          delivering exceptional solutions, we have garnered a reputation as a
          leading force in the industry. We value your feedback <br />
          and work collaboratively with you to address any concerns, ensuring
          that the final product is precisely what you envision.
        </p>
        <p className="text-sm md:text-xs lg:text-md text-[#a8a5a5] mt-4  ">
          Our tailored approach ensures that we understand your specific
          requirements and deliver results that exceed expectations. <br /> Our
          team consists of seasoned professionals and creative minds who thrive
          on pushing the boundaries of technology, and <br />
          bring fresh perspectives and ingenious solutions to every project. We
          keep you involved at every stage, providing transparent <br />
          communication and delivering on time and within budget.
        </p>

        {/* Progress Bar */}
        <div>
          {testData.map((item, idx) => (
            <ProgressBar
              key={idx}
              bgcolor={item.bgcolor}
              completed={item.completed}
              title={item.title}
              value={item.value} // Pass the value prop here
            />
          ))}
        </div>

        {/* Buttons */}
        <div className="flex flex-row  space-x-5 mt-4">
          <div>
            {/* Button */}
            <button
              className={`bg-[#569F42]   text-[#ffff] mt-8 button transition-transform duration-300 ease-out transform group-hover:-translate-x-1/2 relative 
                ${isPopupOpen || isQuoteOpen ? "z-0" : "z-10"}`}
              onClick={handleButtonClick1}
            >
              <a
                href="#_"
                className="relative inline-flex items-center justify-center p-4 px-6 py-1 md:py-3 overflow-hidden font-medium text-indigo-600 transition duration-400 ease-out shadow-md group"
              >
                <span className="absolute inset-0 flex items-center justify-center w-full h-full text-white transition duration-400 -translate-x-full bg-purple-500 group-hover:translate-x-0 ease-out">
                  <svg
                    className="w-6 h-6"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M14 5l7 7m0 0l-7 7m7-7H3"
                    ></path>
                  </svg>
                </span>
                <span className="text-xl font-bold text-[#000000] absolute flex items-center justify-center w-full h-full text-purple-500 transition-all duration-400 transform group-hover:translate-x-full ease-outt">
                  Get Demo
                </span>
                <span className="relative invisible">Talk to Experts</span>
              </a>
            </button>
          </div>

          <div>
            {/* Button */}
            <button
              className={`bg-[#569F42]  text-[#ffff] mt-8 button  transition-transform duration-300 ease-out transform group-hover:-translate-x-1/2 relative 
                ${isPopupOpen || isQuoteOpen ? "z-0" : "z-10"}`}
              onClick={handleButtonClick2}
            >
              <a
                href="#_"
                className="relative inline-flex items-center justify-center p-4 px-6 py-1 md:py-3 overflow-hidden font-medium text-indigo-600 transition duration-400 ease-out shadow-md group"
              >
                <span className="absolute inset-0 flex items-center justify-center w-full h-full text-white transition duration-400 -translate-x-full bg-purple-500 group-hover:translate-x-0 ease-out">
                  <svg
                    className="w-6 h-6"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M14 5l7 7m0 0l-7 7m7-7H3"
                    ></path>
                  </svg>
                </span>
                <span className="text-xl font-bold text-[#000000] absolute flex items-center justify-center w-full h-full text-purple-500 transition-all duration-400 transform group-hover:translate-x-full ease-outt">
                  Get Quote
                </span>
                <span className="relative invisible">Talk to Experts</span>
              </a>
            </button>
          </div>
        </div>

        {/* Contact PopUp */}
        {isPopupOpen && (
          <ContactPopUp onClose={handleClosePopup1} className="z-50" />
        )}
        {isQuoteOpen && (
          <GetQuote onClose={handleClosePopup2} className="z-50" />
        )}
      </div>
    </div>
  );
};

export default OpportunitySection;
