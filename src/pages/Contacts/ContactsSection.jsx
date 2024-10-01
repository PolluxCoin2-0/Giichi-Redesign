import { useState } from "react";
import ContactPopUp from "../../components/ContactPopUp";
import GetQuote from "../../components/GetQuote";

const ContactsSection = () => {
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
    <div className="bg-purple-gradient text-center pt-16 pb-16  px-4 md:px-10 lg:px-32 lg:pt-32 lg:pb-32">
      <p className="text-2xl md:text-3xl font-bold ">Talk To Us</p>
      <p className="text-3xl md:text-4xl lg:text-6xl font-bold leading-tight mt-5">
        Empower Your Business with Our Fine <br /> Tuned Digital Solutions
      </p>
      <p className="text-lg md:text-xl font-medium mt-5">
        Take the First Step in creating a better tomorrow by joining hands with
        Giichi.
      </p>

      <div className="flex flex-row justify-center space-x-5 mt-8">
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
export default ContactsSection;
