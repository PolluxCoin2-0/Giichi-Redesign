import { useState } from "react";
import { motion } from "framer-motion"; // Import framer-motion
import Navbar from "../../layout/Navbar";
import HeroImg from "../../assets/banner_img_home.png";
import { IoIosChatbubbles } from "react-icons/io";
import ContactPopUp from "../../comopnents/ContactPopUp"; // Fixed import typo


const HeroSection = () => {
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  const handleButtonClick = () => {
    setIsPopupOpen(true);
  };

  const handleClosePopup = () => {
    setIsPopupOpen(false);
  };

  return (
    <div>
      <Navbar />

      <div className="flex flex-col md:flex-col lg:flex-row justify-between items-center md:items-start lg:items-center space-x-0 lg:space-x-20 xl:space-x-0 px-4 md:px-10 lg:px-12 xl:px-32 bg-[#569F42] h-auto md:h-screen">
        {/* Animated Text Section */}
        <motion.div
          initial={{ x: -100, opacity: 0 }} // Start off-screen to the left
          animate={{ x: 0, opacity: 1 }} // Animate to original position
          transition={{ duration: 1.8 }} // Transition duration
        >
          {/* For Mobile and Laptop/Desktop */}
          <p className="block md:hidden xl:block text-[33px] lg:text-[34px] xl:text-[60px] font-bold mt-8 xl:-mt-48 text-[#ffff] leading-snug">
            Modernizing And <br />
            Transforming Businesses <br /> Digitally To Move Forward
          </p>

          {/* For Tablet Devices */}
          <p className="hidden md:block xl:hidden md:text-[40px] text-[#ffff] leading-snug font-bold mt-10 lg:-mt-40">
            Modernizing And Transforming <br /> Businesses Digitally To Move
            Forward
          </p>

          <p className="mt-6 text-md md:text-lg lg:text-lg xl:text-xl font-medium md:font-semibold lg:font-medium leading-6 md:leading-8 tracking-normal md:tracking-wide">
            Embrace our visionary software development services to navigate the
            ever- <br />
            changing business landscape. We help you stay ahead of industry
            trends to <br />
            secure your market dominance and achieve unrivaled success.
          </p>

          <div className="flex flex-row items-center group relative">
            <p className="mt-8 text-[#ffffff] bg-[#383934] px-2 py-2 -mr-2 rounded-tl-3xl rounded-bl-3xl">
              <IoIosChatbubbles size={20} />
            </p>

            <button
              onClick={handleButtonClick}
              className="bg-[#000000] text-[#ffff] mt-8 button skew-x-12 rounded-tr-lg rounded-br-lg transition-transform duration-300 ease-out transform group-hover:-translate-x-1/2 relative z-10"
            >
              <a
                href="#_"
                className="relative inline-flex items-center justify-center p-4 px-6 py-3 overflow-hidden font-medium text-indigo-600 transition duration-400 ease-out shadow-md group"
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
                <span className="text-lg absolute flex items-center justify-center w-full h-full text-purple-500 transition-all duration-400 transform group-hover:translate-x-full ease-outt">
                  Talk to Experts
                </span>
                <span className="relative invisible">Talk to Experts</span>
              </a>
            </button>
          </div>
        </motion.div>

        {/* Animated Image Section */}
        <motion.div
          initial={{ x: 100, opacity: 0 }} // Start off-screen to the right
          animate={{ x: 0, opacity: 1 }} // Animate to original position
          transition={{ duration: 1.8 }} // Transition duration
          className="flex justify-center lg:justify-normal lg:-mt-40"
        >
          <img
            src={HeroImg}
            alt="hero-image"
            className="w-[90%] md:w-[60%] lg:w-full xl:w-[80%]"
          />
        </motion.div>
      </div>

      {/* Contact PopUp */}
      {isPopupOpen && <ContactPopUp onClose={handleClosePopup} />}
    </div>
  );
};

export default HeroSection;
