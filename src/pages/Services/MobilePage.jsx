const MobilePage = () => {
  return (
    <div className=" bg-[#E6E5E6] p-4 md:p-6  lg:p-8 xl:p-12 flex flex-col justify-center gap-4 pb-8 md:pb-8 mb-0 ">
      <p className="text-2xl md:text-3xl font-bold  mt-5 md:mt-0">Mobile App Development</p>
      <p className="text-md md:text-md lg:text-lg  font-medium  leading-7">
      Leverage our technological expertise and forward-thinking approach to 
      deliver world-class mobile applications. At Giichi, we create results-driven 
      mobile apps that cater to current and future business demands.

      </p>

      <div className="flex flex-col lg:flex-row justify-between space-x-0 lg:space-x-4 w-full mt-5">
        <div className="w-full lg:w-[50%] p-4 bg-[#F7FBFE]  shadow-lg rounded-lg ">
          <p className="text-lg lg:text-xl font-semibold">Android App Development</p>
          <p className="text-md md:text-sm lg:text-lg    font-normal pt-2 leading-8">
          Boost your brand's growth with user-centric and high-performance 
          Android applications, combining functionality and design to help 
          you thrive in the digital marketplace.

          </p>
        </div>

        <div className="w-full lg:w-[50%] mt-8 lg:mt-0  p-4 bg-[#F7FBFE] shadow-lg  rounded-lg ">
          <p className="text-lg lg:text-xl font-semibold">iOS App Development</p>
          <p className="text-md md:text-sm lg:text-lg    font-normal  pt-2 leading-8">
          Impress your users with innovative iOS applications designed
           to meet your specific business needs. Our creative solutions
            set you apart in today’s competitive landscape.

          </p>
        </div>
      </div>

      <div className="w-full  mt-5 p-4 bg-[#F7FBFE] shadow-lg  rounded-lg ">
        <p className="text-lg lg:text-xl font-semibold">Native Mobile App Development</p>
        <p className="text-md md:text-sm lg:text-lg    font-normal  pt-2 leading-8">
        Accelerate your business growth with custom native applications, 
        offering seamless performance and enabling your digital transformation.
         Expand your reach globally with solutions built for various platforms.

        </p>
      </div>

      <div className="flex flex-col lg:flex-row justify-between space-x-0 lg:space-x-4 w-full mt-5">
        <div className="w-full lg:w-[50%] p-4 bg-[#F7FBFE]  shadow-lg rounded-lg ">
          <p className="text-lg lg:text-xl font-semibold">Cross Platform App Development</p>
          <p className="text-md md:text-sm lg:text-lg    font-normal  pt-2 leading-8">
          Maximize your business impact with versatile cross-platform apps that work across multiple operating systems. Our solutions adapt to different industries and requirements, helping you capture new opportunities and drive conversions.

          </p>
        </div>

        <div className="w-full lg:w-[50%] mt-8 lg:mt-0  p-4 bg-[#F7FBFE]  shadow-lg rounded-lg ">
          <p className="text-lg lg:text-xl font-semibold">Progressive Web App Development</p>
          <p className="text-md md:text-sm lg:text-lg   font-normal  pt-2 leading-8">
          Turn your innovative ideas into fast, reliable, and engaging progressive 
          web applications. Stay ahead of the competition by offering exceptional 
          web experiences that deliver superior performance.

          </p>
        </div>
      </div>
    </div>
  );
};

export default MobilePage;
