import { SiCircuitverse } from "react-icons/si";
import { MdHealthAndSafety } from "react-icons/md";
import { PiGraduationCapBold } from "react-icons/pi";
import { FaShopify } from "react-icons/fa6";
import { FaHandsHoldingCircle } from "react-icons/fa6";
import { RiHotelFill } from "react-icons/ri";
import { MdSettingsSuggest } from "react-icons/md";
import { SiBlockchaindotcom } from "react-icons/si";
import { FaCaravan } from "react-icons/fa6";
import { ImTv } from "react-icons/im";
import { MdOutlineRealEstateAgent } from "react-icons/md";
import { TbSocial } from "react-icons/tb";

const IndustriesSection = () => {
  return (
    <div className="bg-purple-gradient w-full flex flex-col lg:flex-row space-x-0 lg:space-x-10 px-4 md:px-10 lg:px-32 pt-10 lg:pt-24 pb-10 lg:pb-24">
      <div className="w-full lg:w-[40%]">
        <p className="text-2xl md:text-3xl font-bold mt-0 md:mt-5">Industries</p>
        <p className="text-4xl md:text-4xl lg:text-5xl font-bold leading-snug pt-6">
          Transforming Industries to Become Smarter and Safer
        </p>
        <p className=" text-xl font-medium pt-6">
           At Giichi, We Tackle Some of the Worlds Biggest Challenges by <br/> Building Great  Digital Products.
        </p>
      </div>

      <div className="w-full lg:w-[60%]">
        {/* First Row */}
        <div className="flex flex-col md:flex-row space-x-0 md:space-x-8 w-full p-2 md:p-4 ">
          <div
            className="bg-[#000000] w-full md:w-[25%] pt-5 pb-5 flex flex-col justify-center items-center border-[2px]  shadow-xl shadow-[#AFC16F] 
          transition-transform transform hover:scale-105 hover:border-[4px] hover:border-[#42A978] hover:bg-[#111111]"
          >
            <p className="text-[#ffffff]">
              <SiCircuitverse size={40} />
            </p>
            <p className=" text-[#ffffff] text-lg font-semibold pt-3">
              Fintech
            </p>
          </div>

          <div
            className="bg-[#000000] w-full md:w-[25%] pt-5 pb-5 mt-4 md:mt-0 flex flex-col justify-center items-center border-[2px]  shadow-xl shadow-[#AFC16F] 
          transition-transform transform hover:scale-105 hover:border-[4px] hover:border-[#42A978] hover:bg-[#111111]"
          >
            <p className="text-[#ffffff]">
              {" "}
              <MdHealthAndSafety size={40} />
            </p>
            <p className=" text-[#ffffff] text-lg font-semibold pt-3 ">
              {" "}
              Healthcare
            </p>
          </div>

          <div
            className="bg-[#000000] w-full md:w-[25%] pt-5 pb-5  mt-4 md:mt-0 flex flex-col justify-center items-center border-[2px]  shadow-xl shadow-[#AFC16F] transition-transform 
          transform hover:scale-105 hover:border-[4px] hover:border-[#42A978] hover:bg-[#111111]"
          >
            <p className="text-[#ffffff]">
              <PiGraduationCapBold size={40} />
            </p>
            <p className="text-[#ffffff] text-lg font-semibold pt-3">
              {" "}
              Education
            </p>
          </div>

          <div
            className="bg-[#000000] w-full md:w-[25%] pt-5 pb-5  mt-4 md:mt-0 flex flex-col justify-center items-center border-[2px]  shadow-xl shadow-[#AFC16F] 
          transition-transform transform hover:scale-105 hover:border-[4px] hover:border-[#42A978] hover:bg-[#111111]"
          >
            <p className="text-[#ffffff]">
              <FaShopify size={40} />
            </p>
            <p className=" text-[#ffffff] text-lg font-semibold pt-3">
              Ecommerce
            </p>
          </div>
        </div>

        {/* Second Row */}
        <div className="flex flex-col md:flex-row space-x-0 md:space-x-8 w-full p-2 md:p-4  ">
          <div
            className="bg-[#000000] w-full md:w-[25%] pt-5 pb-5 flex flex-col justify-center items-center  border-[2px] shadow-xl shadow-[#AFC16F] 
          transition-transform transform hover:scale-105 hover:border-[4px] hover:border-[#42A978] hover:bg-[#111111]"
          >
            <p className="text-[#ffffff]">
              <FaHandsHoldingCircle size={40} />
            </p>
            <p className="text-[#ffffff] text-lg font-semibold pt-3">
              Insurance
            </p>
          </div>

          <div
            className="bg-[#000000] w-full md:w-[25%] pt-5 pb-5  mt-4 md:mt-0 flex flex-col justify-center items-center  border-[2px]  shadow-xl shadow-[#AFC16F] 
          transition-transform transform hover:scale-105 hover:border-[4px] hover:border-[#42A978] hover:bg-[#111111]"
          >
            <p className="text-[#ffffff]">
              <RiHotelFill size={40} />
            </p>
            <p className=" text-[#ffffff] text-lg font-semibold pt-3 ">Hotel</p>
          </div>

          <div
            className="bg-[#000000] w-full md:w-[25%] pt-5 pb-5  mt-4 md:mt-0 flex flex-col justify-center items-center  border-[2px]  shadow-xl shadow-[#AFC16F] 
          transition-transform transform hover:scale-105 hover:border-[4px] hover:border-[#42A978] hover:bg-[#111111]"
          >
            <p className="text-[#ffffff]">
              <MdSettingsSuggest size={40} />
            </p>
            <p className="text-[#ffffff] text-lg font-semibold pt-3">
              Manufacturing
            </p>
          </div>

          <div
            className="bg-[#000000] w-full md:w-[25%] pt-5 pb-5  mt-4 md:mt-0 flex flex-col justify-center items-center  border-[2px]  shadow-xl shadow-[#AFC16F] 
          transition-transform transform hover:scale-105 hover:border-[4px] hover:border-[#42A978] hover:bg-[#111111]"
          >
            <p className="text-[#ffffff]">
              <SiBlockchaindotcom size={40} />
            </p>
            <p className="text-[#ffffff] text-lg font-semibold pt-3">
              Supply Chain
            </p>
          </div>
        </div>

        {/* Third Row */}
        <div className="flex flex-col md:flex-row space-x-0 md:space-x-8 w-full p-2 md:p-4 ">
          <div
            className="bg-[#000000] w-full md:w-[25%] pt-5 pb-5 flex flex-col justify-center items-center  border-[2px]  shadow-xl shadow-[#AFC16F] 
          transition-transform transform hover:scale-105 hover:border-[4px] hover:border-[#42A978] hover:bg-[#111111]"
          >
            <p className="text-[#ffffff]">
              <FaCaravan size={40} />
            </p>
            <p className=" text-[#ffffff] text-lg font-semibold pt-3">
              Logistics
            </p>
          </div>

          <div
            className="bg-[#000000] w-full md:w-[25%] pt-5 pb-5 mt-4 md:mt-0 flex flex-col justify-center items-center  border-[2px]  shadow-xl shadow-[#AFC16F] 
          transition-transform transform hover:scale-105 hover:border-[4px] hover:border-[#42A978] hover:bg-[#111111]"
          >
            <p className="text-[#ffffff]">
              <ImTv size={40} />
            </p>
            <p className="text-[#ffffff] text-lg font-semibold pt-3 ">
              Entertainment
            </p>
          </div>

          <div
            className="bg-[#000000] w-full md:w-[25%] pt-5 pb-5 mt-4 md:mt-0 flex flex-col justify-center items-center  border-[2px]  shadow-xl shadow-[#AFC16F] 
          transition-transform transform hover:scale-105 hover:border-[4px] hover:border-[#42A978] hover:bg-[#111111]"
          >
            <p className="text-[#ffffff]">
              <MdOutlineRealEstateAgent size={40} />
            </p>
            <p className="text-[#ffffff] text-lg font-semibold pt-3">
              Real Estate
            </p>
          </div>

          <div
            className="bg-[#000000] w-full md:w-[25%] pt-5 pb-5 mt-4 md:mt-0 flex flex-col justify-center items-center  text-center border-[2px] shadow-xl shadow-[#AFC16F] 
          transition-transform transform hover:scale-105 hover:border-[4px] hover:border-[#42A978] hover:bg-[#111111]"
          >
            <p className="text-[#ffffff]">
              <TbSocial size={40} />
            </p>
            <p className="text-[#ffffff] text-lg font-semibold pt-3">
              Social Networking
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default IndustriesSection;
