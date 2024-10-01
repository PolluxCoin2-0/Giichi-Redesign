const DigitalPage = () => {
  return (
    <div className=" bg-[#E6E5E6] p-4 md:p-6  lg:p-8 xl:p-12 flex flex-col justify-center gap-4 pb-8 md:Pb-0 mb-0 ">
      <p className="text-2xl md:text-3xl font-bold ">Digital Transformation</p>
      <p className="text-md md:text-md lg:text-lg font-medium  leading-7">
        Giichi is your trusted partner in embarking on a successful digital
        transformation journey. Our comprehensive digital transformation
        services leverage cutting-edge technologies, enabling businesses to
        accelerate product development and make strategic moves effectively.
      </p>

      <div className="flex flex-col lg:flex-row justify-between space-x-0 lg:space-x-4 w-full mt-5">
        <div className=" w-full lg:w-[50%] p-4 bg-[#F7FBFE]  shadow-lg rounded-lg ">
          <p className="text-lg md:text-xl font-semibold">AI and Automation</p>
          <p className="text-md md:text-sm lg:text-lg font-normal pt-2 leading-8">
            Elevate your business with our insightful automation solutions that
            ensure you remain competitive. Our data-driven insights empower you
            to make informed decisions, driving your business toward significant
            growth.
          </p>
        </div>

        <div className="w-full lg:w-[50%] mt-8 lg:mt-0 p-4 bg-[#F7FBFE] shadow-lg  rounded-lg ">
          <p className="text-lg md:text-xl font-semibold">
            Application Modernization
          </p>
          <p className="text-md md:text-sm lg:text-lg  font-normal  pt-2 leading-8">
            Harness the power of our proven methodology to seamlessly transition
            your existing application portfolios to the cloud while developing
            innovative new applications that address your evolving business
            needs.
          </p>
        </div>
      </div>

      <div className="w-full  mt-5 p-4 bg-[#F7FBFE] shadow-lg  rounded-lg ">
        <p className="text-lg md:text-xl font-semibold">
          Business Model Transformation
        </p>
        <p className="text-md md:text-sm lg:text-lg  font-normal  pt-2 leading-8">
          Transform your operations and join the ranks of successful businesses
          by embracing digital innovation. Our approach ensures a smooth
          transition to enhanced efficiency and productivity in the
          ever-evolving digital landscape.
        </p>
      </div>

      <div className="flex flex-col lg:flex-row justify-between space-x-0 lg:space-x-4 w-full mt-5">
        <div className="w-full lg:w-[50%] p-4 bg-[#F7FBFE]  shadow-lg rounded-lg ">
          <p className="text-lg md:text-xl font-semibold">
            Customer Experience Transformatin
          </p>
          <p className="text-md md:text-sm lg:text-lg  font-normal  pt-2 leading-8">
            Enhance your customer experience by leveraging insights to create
            user-friendly digital solutions that differentiate you from the
            competition, enabling you to thrive even in challenging times.
          </p>
        </div>

        <div className=" w-full lg:w-[50%] mt-8 lg:mt-0 p-4 bg-[#F7FBFE]  shadow-lg rounded-lg ">
          <p className="text-lg md:text-xl font-semibold">
            Digital Transformation Implementation
          </p>
          <p className="text-md md:text-sm lg:text-lg  font-normal  pt-2 leading-8">
            Empower your digital transformation journey with our expert team,
            who guide you seamlessly from strategy to implementation, addressing
            all your unique requirements.
          </p>
        </div>
      </div>
    </div>
  );
};

export default DigitalPage;
