import { useState } from "react";
import NftImg from "../../assets/nft_img.png";
import ContactPopUp from "../../components/ContactPopUp";
import GetQuote from "../../components/GetQuote";

const LaunchpadPage = () => {
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
    <div className="text-[#ffffff] bg-[#000000] pt-10  flex flex-col lg:flex-row space-x-0 lg:space-x-12 justify-between ">
      <div className="w-full lg:w-[50%]">
        <p className="text-3xl md:text-4xl xl:text-5xl font-bold leading-tight">
          We Create Products That Users Love
        </p>
        <p className="text-lg font-normal pt-6">
          Get a Glimpse of our Dynamic Portfolio, illustrating our
          Record-breaking Products.
        </p>
        <div className="flex justify-center">
          <img
            src={NftImg}
            alt=""
            className="w-[600px] md:w-[500px] lg:w-[600px] text-center"
          />
        </div>
      </div>

      <div className="w-full lg:w-[50%]">
        <p className="text-[#ffffff] text-2xl md:text-3xl lg:text-2xl xl:text-3xl font-semibold pt-8 xl:pt-20">
          Launchpad
        </p>
        <p className="text-[#ffffff] text-4xl md:text-5xl lg:text-4xl xl:text-5xl font-semibold pt-8">
          Launchpad
        </p>

        <p className="text-[#ffffff] text-md md:text-lg font-normal pt-8 leading-8">
          Have plans to kick-start your own NFT marketplace? You are in the
          right place! Maticz has developed <br /> and successfully launched
          more than 50+ NFT marketplaces which are now top-performing in the{" "}
          <br /> market. We are the pro-players in developing NFT marketplaces
          on various blockchain networks like Ethereum, Binance Chain, Solana,
          Polygon, Avalance, etc
        </p>

        <div className="flex flex-row space-x-5">
          <div>
            {/* Button */}
            <button
              className={`bg-[#569F42]   text-[#ffff] mt-8 button  transition-transform duration-300 ease-out transform group-hover:-translate-x-1/2 relative 
          ${isPopupOpen || isQuoteOpen ? "z-0" : "z-10"}`}
              onClick={handleButtonClick1}
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

export default LaunchpadPage;
