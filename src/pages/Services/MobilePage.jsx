const MobilePage = () => {
  return (
    <div className=" bg-[#E6E5E6] p-4 md:p-6 lg:p-12 flex flex-col justify-center gap-4 pb-8 md:pb-8 mb-0 ">
      <p className="text-2xl md:text-3xl font-bold  mt-5 md:mt-0">Mobile App Development</p>
      <p className="text-md md:text-md lg:text-lg  font-medium  leading-7">
        Technological expertise coupled with visionary skills helps us deliver
        world-class mobile applications. Maticz can help you with a<br />
        results-driven mobile app that meets current and future demands.
      </p>

      <div className="flex flex-col lg:flex-row justify-between space-x-0 lg:space-x-4 w-full mt-5">
        <div className="w-full lg:w-[50%] p-4 bg-[#F7FBFE]  shadow-lg rounded-lg ">
          <p className="text-lg lg:text-xl font-semibold">Android App</p>
          <p className="text-md md:text-sm lg:text-lg    font-normal pt-2 leading-8">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. <br />
            Officia animi distinctio quisquam esse corporis doloremque <br />
            molestias aspernatur quidem alias cupiditate.
          </p>
        </div>

        <div className="w-full lg:w-[50%] mt-8 lg:mt-0  p-4 bg-[#F7FBFE] shadow-lg  rounded-lg ">
          <p className="text-lg lg:text-xl font-semibold">iOS App</p>
          <p className="text-md md:text-sm lg:text-lg    font-normal  pt-2 leading-8">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Officia
            animi distinctio quisquam esse corporis doloremque molestias
            aspernatur quidem alias cupiditate.
          </p>
        </div>
      </div>

      <div className="w-full  mt-5 p-4 bg-[#F7FBFE] shadow-lg  rounded-lg ">
        <p className="text-lg lg:text-xl font-semibold">Native Mobile App</p>
        <p className="text-md md:text-sm lg:text-lg    font-normal  pt-2 leading-8">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Officia
          animi distinctio quisquam esse corporis doloremque molestias
          aspernatur quidem alias cupiditate.
        </p>
      </div>

      <div className="flex flex-col lg:flex-row justify-between space-x-0 lg:space-x-4 w-full mt-5">
        <div className="w-full lg:w-[50%] p-4 bg-[#F7FBFE]  shadow-lg rounded-lg ">
          <p className="text-lg lg:text-xl font-semibold">Cross Platform App</p>
          <p className="text-md md:text-sm lg:text-lg    font-normal  pt-2 leading-8">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. <br />
            Officia animi distinctio quisquam esse corporis doloremque <br />
            molestias aspernatur quidem alias cupiditate.
          </p>
        </div>

        <div className="w-full lg:w-[50%] mt-8 lg:mt-0  p-4 bg-[#F7FBFE]  shadow-lg rounded-lg ">
          <p className="text-lg lg:text-xl font-semibold">Progressive Web App</p>
          <p className="text-md md:text-sm lg:text-lg   font-normal  pt-2 leading-8">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. <br />
            Officia animi distinctio quisquam esse corporis doloremque <br />
            molestias aspernatur quidem alias cupiditate.
          </p>
        </div>
      </div>
    </div>
  );
};

export default MobilePage;
