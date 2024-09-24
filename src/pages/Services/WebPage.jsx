const WebPage = () => {
  return (
    <div className=" bg-[#E6E5E6] p-4 md:p-12 flex flex-col justify-center gap-4 pb-8 md:pb-0 mb-0 ">
      <p className="text-2xl md:text-3xl font-bold mt-5 md:mt-0">Web Development</p>
      <p className="text-md md:text-lg  font-medium  leading-7">
        Your business website is an important opportunity to set your business
        apart from the competition. We Maticzian, <br /> frame you with
        appealing and impressive web design that ignites your online identity.
      </p>

      <div className="flex flex-col md:flex-row justify-between space-x-0 md:space-x-4 w-full mt-5">
        <div className="w-full md:w-[50%] p-4 bg-[#F7FBFE]  shadow-lg rounded-lg ">
          <p className="text-lg md:text-xl font-semibold">Custom Web Development</p>
          <p className="text-md md:text-lg  font-normal pt-2 leading-8">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. <br />
            Officia animi distinctio quisquam esse corporis doloremque <br />
            molestias aspernatur quidem alias cupiditate.
          </p>
        </div>

        <div className=" w-full md:w-[50%] mt-8 md:mt-0 p-4 bg-[#F7FBFE] shadow-lg  rounded-lg ">
          <p className="text-lg md:text-xl font-semibold">Web UI/UX Development</p>
          <p className="text-md md:text-lg  font-normal  pt-2 leading-8">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Officia
            animi distinctio quisquam esse corporis doloremque molestias
            aspernatur quidem alias cupiditate.
          </p>
        </div>
      </div>

      <div className="w-full  mt-5 p-4 bg-[#F7FBFE] shadow-lg  rounded-lg ">
        <p className="text-lg md:text-xl font-semibold">Web App Development</p>
        <p className="text-md md:text-lg  font-normal  pt-2 leading-8">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Officia
          animi distinctio quisquam esse corporis doloremque molestias
          aspernatur quidem alias cupiditate.
        </p>
      </div>

      <div className="flex flex-col md:flex-row justify-between space-x-0 md:space-x-4 w-full mt-5">
        <div className=" w-full md:w-[50%] p-4 bg-[#F7FBFE]  shadow-lg rounded-lg ">
          <p className="text-lg md:text-xl font-semibold">CMS Development</p>
          <p className="text-md md:text-lg  font-normal  pt-2 leading-8">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. <br />
            Officia animi distinctio quisquam esse corporis doloremque <br />
            molestias aspernatur quidem alias cupiditate.
          </p>
        </div>

        <div className="w-full md:w-[50%] mt-8 md:mt-0 p-4 bg-[#F7FBFE]  shadow-lg rounded-lg ">
          <p className="text-xl font-semibold">E- Commerce Web Development</p>
          <p className="text-lg font-normal  pt-2 leading-8">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. <br />
            Officia animi distinctio quisquam esse corporis doloremque <br />
            molestias aspernatur quidem alias cupiditate.
          </p>
        </div>
      </div>
    </div>
  );
};

export default WebPage;
