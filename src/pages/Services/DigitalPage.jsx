const DigitalPage = () => {
  return (
    <div className=" bg-[#E6E5E6] p-4 md:p-6 lg:p-12 flex flex-col justify-center gap-4 pb-8 md:Pb-0 mb-0 ">
      <p className="text-2xl md:text-3xl font-bold ">Digital Transformation</p>
      <p className="text-md md:text-md lg:text-lg font-medium  leading-7">
        Giichi is your go-to partner to embark on your digital transformation
        journey. Our end-to-end digital transformation services <br />
        incorporate breakthroughs in technologies for businesses to embrace
        faster product creation and strategic business moves.
      </p>

      <div className="flex flex-col lg:flex-row justify-between space-x-0 lg:space-x-4 w-full mt-5">
        <div className=" w-full lg:w-[50%] p-4 bg-[#F7FBFE]  shadow-lg rounded-lg ">
          <p className="text-lg md:text-xl font-semibold">AI and Automation</p>
          <p className="text-md md:text-sm lg:text-lg font-normal pt-2 leading-8">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. <br />
            Officia animi distinctio quisquam esse corporis doloremque <br />
            molestias aspernatur quidem alias cupiditate.
          </p>
        </div>

        <div className="w-full lg:w-[50%] mt-8 lg:mt-0 p-4 bg-[#F7FBFE] shadow-lg  rounded-lg ">
          <p className="text-lg md:text-xl font-semibold">Application Modernization</p>
          <p className="text-md md:text-sm lg:text-lg  font-normal  pt-2 leading-8">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Officia
            animi distinctio quisquam esse corporis doloremque molestias
            aspernatur quidem alias cupiditate.
          </p>
        </div>
      </div>

      <div className="w-full  mt-5 p-4 bg-[#F7FBFE] shadow-lg  rounded-lg ">
        <p className="text-lg md:text-xl font-semibold">Business Model Transformation</p>
        <p className="text-md md:text-sm lg:text-lg  font-normal  pt-2 leading-8">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Officia
          animi distinctio quisquam esse corporis doloremque molestias
          aspernatur quidem alias cupiditate.
        </p>
      </div>

      <div className="flex flex-col lg:flex-row justify-between space-x-0 lg:space-x-4 w-full mt-5">
        <div className="w-full lg:w-[50%] p-4 bg-[#F7FBFE]  shadow-lg rounded-lg ">
          <p className="text-lg md:text-xl font-semibold">
            Customer Experience Transformatin
          </p>
          <p className="text-md md:text-sm lg:text-lg  font-normal  pt-2 leading-8">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. <br />
            Officia animi distinctio quisquam esse corporis doloremque <br />
            molestias aspernatur quidem alias cupiditate.
          </p>
        </div>

        <div className=" w-full lg:w-[50%] mt-8 lg:mt-0 p-4 bg-[#F7FBFE]  shadow-lg rounded-lg ">
          <p className="text-lg md:text-xl font-semibold">
            Digital Transformation Implementation
          </p>
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

export default DigitalPage;
