const Web3Page = () => {
  return (
    <div className=" bg-[#E6E5E6] p-4 md:p-6  lg:p-8 xl:p-12 flex flex-col justify-center gap-4 pb-8 md:pb-5 mb-0 ">
      <p className="text-2xl md:text-3xl font-bold ">Web3 Development</p>
      <p className="text-md md:text-lg font-medium  leading-7">
        Web3 is something interesting that the world has been looking for years
        because it makes all the internet processes <br /> decentralized and
        even this helps in improving many business platforms and services in the
        digital space.
      </p>

      <div className="flex flex-col lg:flex-row justify-between space-x-0 lg:space-x-4 w-full mt-5">
        <div className="w-full lg:w-[50%] p-4 bg-[#F7FBFE]  shadow-lg rounded-lg ">
          <p className="text-lg md:text-xl font-semibold">Web3 In Supply Chain</p>
          <p className="text-md md:text-sm lg:text-lg  font-normal pt-2 leading-8">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. <br />
            Officia animi distinctio quisquam esse corporis doloremque <br />
            molestias aspernatur quidem alias cupiditate.
          </p>
        </div>

        <div className=" w-full lg:w-[50%]  mt-8 lg:mt-0 p-4 bg-[#F7FBFE] shadow-lg  rounded-lg ">
          <p className="text-lg md:text-xl font-semibold">Web3 In Healthcare</p>
          <p className="text-md md:text-sm lg:text-lg font-normal  pt-2 leading-8">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Officia
            animi distinctio quisquam esse corporis doloremque molestias
            aspernatur quidem alias cupiditate.
          </p>
        </div>
      </div>

      <div className="w-full  mt-5 p-4 bg-[#F7FBFE] shadow-lg  rounded-lg ">
        <p className="text-lg md:text-xl font-semibold">Web3 Game Development</p>
        <p className="text-md md:text-sm lg:text-lg  font-normal  pt-2 leading-8">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Officia
          animi distinctio quisquam esse corporis doloremque molestias
          aspernatur quidem alias cupiditate.
        </p>
      </div>

      <div className="flex flex-col lg:flex-row justify-between space-x-0 lg:space-x-4 w-full mt-5">
        <div className=" w-full lg:w-[50%] p-4 bg-[#F7FBFE]  shadow-lg rounded-lg ">
          <p className="text-lg md:text-xl font-semibold">Web3 In Education</p>
          <p className="text-md md:text-sm lg:text-lg  font-normal  pt-2 leading-8">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. <br />
            Officia animi distinctio quisquam esse corporis doloremque <br />
            molestias aspernatur quidem alias cupiditate.
          </p>
        </div>

        <div className="w-full lg:w-[50%]  mt-8 lg:mt-0 p-4 bg-[#F7FBFE]  shadow-lg rounded-lg ">
          <p className="text-lg md:text-xl font-semibold">Web3 In Finance</p>
          <p className="text-md md:text-sm lg:text-lg  font-normal  pt-2 leading-8">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. <br />
            Officia animi distinctio quisquam esse corporis doloremque <br />
            molestias aspernatur quidem alias cupiditate.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Web3Page;
