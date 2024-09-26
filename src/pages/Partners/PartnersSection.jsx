import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { FaAlgolia } from "react-icons/fa6";
import { FaAffiliatetheme } from "react-icons/fa6";
import { FaAngellist } from "react-icons/fa6";
import { FaAccusoft } from "react-icons/fa6";
import { FaAward } from "react-icons/fa6";
import { FaBabyCarriage } from "react-icons/fa6";

// Custom Arrow Component
const CustomPrevArrow = (props) => {
  const { className, onClick } = props;
  return (
    <div
      className={`${className} custom-prev-arrow`}
      onClick={onClick}
      style={{
        position: "absolute",
        left: "50%",
        transform: "translateX(-50%) translateY(-50%)",
        top: "-30px", // Adjust as needed for spacing
        zIndex: 1,
        cursor: "pointer",
        fontSize: "24px",
      }}
    >
      ↑
    </div>
  );
};

const CustomNextArrow = (props) => {
  const { className, onClick } = props;
  return (
    <div
      className={`${className} custom-next-arrow`}
      onClick={onClick}
      style={{
        position: "absolute",
        left: "50%",
        transform: "translateX(-50%) translateY(50%)",
        bottom: "-30px", // Adjust as needed for spacing
        zIndex: 1,
        cursor: "pointer",
        fontSize: "24px",
      }}
    >
      ↓
    </div>
  );
};

const PartnersSection = () => {
  const settings = {
    dots: false,
    autoplay: true,               // Enable autoplay
    autoplaySpeed: 1000,           // Set the autoplay speed (3 seconds)
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    vertical: true,
    arrows: false,
    verticalSwiping: true,
    swipeToSlide: true,
    beforeChange: function (currentSlide, nextSlide) {
      console.log("before change", currentSlide, nextSlide);
    },
    afterChange: function (currentSlide) {
      console.log("after change", currentSlide);
    },
    prevArrow: <CustomPrevArrow />, // Use custom prev arrow
    nextArrow: <CustomNextArrow />, // Use custom next arrow
  };

  return (
    <div className="bg-green flex flex-col lg:flex-row justify-between  px-4 md:px-10 lg:px-32 w-full pt-16 pb-16 lg:pt-32 lg:pb-32">
      <div className="w-full lg:w-[50%]">
        <p className="text-2xl md:text-3xl font-bold">Partners</p>
        <p className="text-3xl md:text-4xl lg:text-5xl font-bold leading-snug pt-6 text-[#ffffff]">
          Go-to Partner for the Leading <br />
          Brands and Startups  <br /> Worldwide
          to Unravel the Path  <br /> to Success
        </p>
        <p className="text-xl font-semibold pt-5">
          Our Clients are a Testament to Our Excellence and Expertise
        </p>
      </div>

      <div className="w-full lg:w-[35%] mt-10 lg:mt-0">
        <div className="slider-container relative">
          <Slider {...settings}>
           
              <div className="bg-[#000000] text-[#ffffff]    p-5 mt-6 text-center text-lg font-semibold shadow-xl transition-transform transform hover:scale-105">
              <p className="flex justify-center"><FaAlgolia  size={32}/></p> 
              <p className="text-xl font-semibold pt-2">AUDIOSWIM</p>
              
              </div>
           
           
              <div className="bg-[#000000] text-[#ffffff] p-5 mt-6 text-center text-lg font-semibold  shadow-xl transition-transform transform hover:scale-105">
              <p className="flex justify-center"><FaAffiliatetheme  size={32}/> </p>
              <p className="text-xl font-semibold pt-2">CLICKB</p>
              </div>
            
            
              <div className="bg-[#000000] text-[#ffffff]  p-5  mt-6 text-center text-lg font-semibold  shadow-xl transition-transform transform hover:scale-105">
              <p className="flex justify-center"><FaAngellist  size={32} /> </p>
              <p className="text-xl font-semibold pt-2">L BANK</p>
              </div>
           
           
              <div className="bg-[#000000] text-[#ffffff]  p-5  mt-6 text-center text-lg font-semibold  shadow-xl transition-transform transform hover:scale-105">
              <p className="flex justify-center"><FaAccusoft  size={32} /> </p> 
              <p className="text-xl font-semibold pt-2">SMART BBN</p>
              </div>
           
          
              <div className="bg-[#000000] text-[#ffffff]  p-5 mt-6 text-center text-lg font-semibold  shadow-xl transition-transform transform hover:scale-105">
              <p className="flex justify-center"><FaAward  size={32} /> </p>
              <p className="text-xl font-semibold pt-2">FINANCIO</p>
              </div>
            
          
              <div className="bg-[#000000] text-[#ffffff] p-5  mt-6 text-center text-lg font-semibold  shadow-xl transition-transform transform hover:scale-105">
              <p className="flex justify-center"><FaBabyCarriage size={32}/> </p>
              <p className="text-xl font-semibold pt-2">RIO</p>
              </div>
           
          </Slider>
        </div>
      </div>
    </div>
  );
};

export default PartnersSection;
