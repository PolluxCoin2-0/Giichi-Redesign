const MetaversePage = () => {
  return (
    <div className=" bg-[#E6E5E6] p-4 md:p-6  lg:p-8 xl:p-12 flex flex-col justify-center gap-4 pb-8 md:pb-5 mb-0 ">
      <p className="text-2xl md:text-3xl font-bold ">Metaverse Development</p>
      <p className="text-md md:text-lg font-medium  leading-7">
      The Metaverse is a 3D environment that bridges the gap between physical
       activities and the digital world. In the coming years, most companies 
       will establish their own metaverse platforms, driving business innovation 
       and engagement.

      </p>

      <div className="flex flex-col lg:flex-row justify-between space-x-0 lg:space-x-4 w-full mt-5">
        <div className="w-full lg:w-[50%] p-4 bg-[#F7FBFE]  shadow-lg rounded-lg ">
          <p className="text-lg md:text-xl font-semibold">Metaverse Game Development</p>
          <p className="text-md md:text-sm lg:text-lg  font-normal pt-2 leading-8">
          Seize the opportunity to be at the forefront of the gaming industry 
          with our metaverse game development services. Embrace the latest trends
           and introduce groundbreaking game solutions that captivate players in
            immersive environments.

          </p>
        </div>

        <div className=" w-full lg:w-[50%]  mt-8 lg:mt-0 p-4 bg-[#F7FBFE] shadow-lg  rounded-lg ">
          <p className="text-lg md:text-xl font-semibold">
            Metaverse Real Estate Platform
          </p>
          <p className="text-md md:text-sm lg:text-lg  font-normal  pt-2 leading-8">
          Help startups and small businesses transition to the digital landscape 
          with our metaverse real estate platform. We facilitate seamless business 
          setups in the metaverse, allowing companies to thrive in this new frontier.

          </p>
        </div>
      </div>

      <div className="w-full  mt-5 p-4 bg-[#F7FBFE] shadow-lg  rounded-lg ">
        <p className="text-lg md:text-xl font-semibold">
          Metaverse E-commerce Store Platform
        </p>
        <p className="text-md md:text-sm lg:text-lg  font-normal  pt-2 leading-8">
        Expand your e-commerce business with a captivating and interactive 
        metaverse platform. Leverage Virtual Reality and innovative metaverse
         solutions to create an exceptional online shopping experience that 
         engages customers like never before.

        </p>
      </div>

      <div className="flex flex-col lg:flex-row justify-between space-x-0 lg:space-x-4 w-full mt-5">
        <div className=" w-full lg:w-[50%] p-4 bg-[#F7FBFE]  shadow-lg rounded-lg ">
          <p className="text-lg md:text-xl font-semibold">Metaverse Event Platform</p>
          <p className="text-md md:text-sm lg:text-lg  font-normal  pt-2 leading-8">
          Host your special occasions, award ceremonies, and more in the metaverse. 
          Invite participants from around the world to join in the celebration, 
          creating unforgettable memories in a virtual setting.

          </p>
        </div>

        <div className="w-full lg:w-[50%] mt-8 lg:mt-0 p-4 bg-[#F7FBFE]  shadow-lg rounded-lg ">
          <p className="text-lg md:text-xl font-semibold">
            Metaverse Application Development
          </p>
          <p className="text-lg md:text-sm lg:text-lg font-normal  pt-2 leading-8">
          Looking for a unique metaverse experience? Our custom metaverse 
          applications are designed to elevate your business and draw a 
          global audience into your digital universe.

          </p>
        </div>
      </div>
    </div>
  );
};

export default MetaversePage;
