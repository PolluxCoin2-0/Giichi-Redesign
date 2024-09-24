import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import BlogImg from "../../assets/BlogImg.png";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";


const BlogsSection = () => {
  // Custom Arrow Components
  const PreviousArrow = (props) => {
    const { onClick } = props;
    return (
      <div className="slider-arrow slider-arrow-left" onClick={onClick}>
        <FaArrowLeft className="slider-arrow-icon" />
      </div>
    );
  };

  const NextArrow = (props) => {
    const { onClick } = props;
    return (
      <div className="slider-arrow slider-arrow-right" onClick={onClick}>
        <FaArrowRight className="slider-arrow-icon" />
      </div>
    );
  };

  var settings = {
    dots: true,
    autoplay: true,
    autoplaySpeed: 1000,
    infinite: true,
    speed: 500,
    slidesToShow: 4, // Default to 4 slides on large screens
    slidesToScroll: 1,
    prevArrow: <PreviousArrow />,
    nextArrow: <NextArrow />,
    appendDots: (dots) => (
      <div style={{ paddingBottom: "0px", margin: "0px" }}>
        <ul style={{ margin: "0px", padding: "0px" }}>{dots}</ul>
      </div>
    ),
    customPaging: (i) => <div className="dot"></div>, // Customize dots if needed
    responsive: [
      {
        breakpoint: 1024, // For tablet and smaller screens
        settings: {
          slidesToShow: 3, // Show 3 slides at this breakpoint
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 768, // For mobile devices
        settings: {
          slidesToShow: 1, // Show only 1 slide on mobile
          slidesToScroll: 1,
        },
      },
    ],
  };
  

  return (
    <div className="bg-[#000000] pt-20 pb-10 md:pb-32  text-center px-4 md:px-32 ">
      <p className="text-2xl md:text-3xl font-bold text-[#ffffff]">Blog</p>
      <p className="text-4xl md:text-5xl font-bold text-[#ffffff] mt-5">
        Ink and Insights - Dive into our Blog
      </p>
      <p className="text-md md:text-xl font-bold text-[#ffffff] mt-5">
        Fuel Your Knowledge with Fresh Ideas and Trends
      </p>

      <div className="mt-0">
        <div className="bg-black mt-4 md:mt-14 flex flex-row justify-center items-center relative pt-0">
          {/* Set a max-width for the slider to ensure only 3 items are shown */}
          <div className="w-full max-w-8xl px-0 md:px-4">
            <Slider {...settings}>
              {[...Array(6)].map((_, index) => (
                <div key={index} className="p-6">
                  {" "}
                  {/* Add padding to create space */}
                  <div className="w-full bg-[#1B1B1B] text-white h-auto rounded-lg shadow-inner shadow-gray-400">
                    <img src={BlogImg} alt="" className="rounded-t-3xl p-4 w-full" />

                    <p className="text-left pl-4 text-[#adaaaa] pt-2 text-lg font-medium">
                      18 September 2024
                    </p>
                    <p className="text-left pl-4 text-[#ffffff] pt-2 pb-8 leading-7 px-4 text-2xl font-bold ">
                      What is Web Development?
                    </p>
                  </div>
                </div>
              ))}
            </Slider>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogsSection;
