const ConsultPage = () => {
  return (
    <div className=" bg-[#E6E5E6] p-4 md:p-6 lg:p-12 flex flex-col justify-center gap-4 pb-8 md:pb-5">
      <p className="text-2xl md:text-3xl font-bold ">IT Consulting</p>
      <p className="text-md md:text-md lg:text-lg  font-medium  leading-7">
        Realize your business objectives with our customized solutions
        incorporated with tech-driven strategies that provide guidance <br />{" "}
        and insights from a different angle to handle complex IT projects and
        boost the scalability of your business.
      </p>

      <div className="flex flex-col lg:flex-row justify-between space-x-0 lg:space-x-4 w-full mt-5">
        <div className="w-full lg:w-[50%] p-4 bg-[#F7FBFE]  shadow-lg rounded-lg ">
          <p className="text-lg md:text-xl font-semibold">IT Strategy Consulting</p>
          <p className="text-md md:text-sm lg:text-lg  font-normal pt-2 leading-8">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. <br />
            Officia animi distinctio quisquam esse corporis doloremque <br />
            molestias aspernatur quidem alias cupiditate.
          </p>
        </div>

        <div className="w-full lg:w-[50%] mt-8 lg:mt-0  p-4 bg-[#F7FBFE] shadow-lg  rounded-lg ">
          <p className="text-lg md:text-xl font-semibold">IT Assessment</p>
          <p className="text-md md:text-sm lg:text-lg  font-normal  pt-2 leading-8">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Officia
            animi distinctio quisquam esse corporis doloremque molestias
            aspernatur quidem alias cupiditate.
          </p>
        </div>
      </div>

      <div className="w-full  mt-5 p-4 bg-[#F7FBFE] shadow-lg  rounded-lg ">
        <p className="text-lg md:text-xl font-semibold">
          IT Project and Program Management
        </p>
        <p className="text-md md:text-sm lg:text-lg  font-normal  pt-2 leading-8">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Officia
          animi distinctio quisquam esse corporis doloremque molestias
          aspernatur quidem alias cupiditate.
        </p>
      </div>

      <div className="flex flex-col lg:flex-row justify-between space-x-0 lg:space-x-4 w-full mt-5">
        <div className="w-full lg:w-[50%] p-4 bg-[#F7FBFE]  shadow-lg rounded-lg ">
          <p className="text-lg md:text-xl font-semibold">IT Infrastructure Management</p>
          <p className="text-md md:text-sm lg:text-lg font-normal  pt-2 leading-8">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. <br />
            Officia animi distinctio quisquam esse corporis doloremque <br />
            molestias aspernatur quidem alias cupiditate.
          </p>
        </div>

        <div className=" w-full lg:w-[50%] mt-8 lg:mt-0 p-4 bg-[#F7FBFE]  shadow-lg rounded-lg ">
          <p className="text-lg md:text-xl font-semibold">IT Outsourcing</p>
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

export default ConsultPage;
