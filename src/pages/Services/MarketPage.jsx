const MarketPage = () => {
  return (
    <div className=" bg-[#E6E5E6] p-4 md:p-6  lg:p-8 xl:p-12 flex flex-col justify-center gap-4 pb-8 md:pb-0 mb-0 ">
      <p className="text-2xl md:text-3xl font-bold ">Digital Marketing </p>
      <p className="text-md md:text-md lg:text-lg font-medium  leading-7">
        Elevate your brand’s success and enhance business outcomes with our
        cutting-edge marketing strategies. We enhance your online visibility,
        driving customer acquisition and engagement.
      </p>

      <div className="flex flex-col lg:flex-row justify-between space-x-0 lg:space-x-4 w-full ">
        <div className=" w-full lg:w-[50%] p-4 bg-[#F7FBFE]  shadow-lg rounded-lg ">
          <p className="text-lg md:text-xl font-semibold">
            Search Engine Optimization
          </p>
          <p className="text-md md:text-sm lg:text-lg font-normal pt-2 leading-8">
            Become the fastest-growing brand in your industry by leveraging our
            SEO strategies designed to generate leads and stimulate business
            growth.
          </p>
        </div>

        <div className="w-full lg:w-[50%] mt-8 lg:mt-0 p-4 bg-[#F7FBFE] shadow-lg  rounded-lg ">
          <p className="text-lg md:text-xl font-semibold">
            Search Engine Marketing
          </p>
          <p className="text-md md:text-sm lg:text-lg  font-normal  pt-2 leading-8">
            Dominate the competitive digital landscape with our SEM campaigns,
            positioning your brand at the forefront of relevant search engine
            results pages (SERPs).
          </p>
        </div>
      </div>

      <div className="w-full  mt-5 p-4 bg-[#F7FBFE] shadow-lg  rounded-lg ">
        <p className="text-lg md:text-xl font-semibold">
          Pay-Per-Click Advertising
        </p>
        <p className="text-md md:text-sm lg:text-lg  font-normal  pt-2 leading-8">
          Transform your digital presence and increase profitability with the
          power of PPC advertising. Attract targeted audiences, boost brand
          awareness, and uncover new growth opportunities.
        </p>
      </div>

      <div className="flex flex-col lg:flex-row justify-between space-x-0 lg:space-x-4 w-full mt-5">
        <div className="w-full lg:w-[50%] p-4 bg-[#F7FBFE]  shadow-lg rounded-lg ">
          <p className="text-lg md:text-xl font-semibold">
            App Store Optimization
          </p>
          <p className="text-md md:text-sm lg:text-lg  font-normal  pt-2 leading-8">
            Engage your target audience by improving the visibility of your
            mobile applications and simplifying the app store listing process.
          </p>
        </div>

        <div className=" w-full lg:w-[50%] mt-8 lg:mt-0 p-4 bg-[#F7FBFE]  shadow-lg rounded-lg ">
          <p className="text-lg md:text-xl font-semibold">
            Online Reputation Management
          </p>
          <p className="text-md md:text-sm lg:text-lg  font-normal  pt-2 leading-8">
            Enhance your brand recognition by effectively managing your online
            reputation, leading to valuable insights and improved business
            performance.
          </p>
        </div>
      </div>
    </div>
  );
};

export default MarketPage;
