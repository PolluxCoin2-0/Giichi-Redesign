const ConsultPage = () => {
  return (
    <div className=" bg-[#E6E5E6] p-4 md:p-6  lg:p-8 xl:p-12 flex flex-col justify-center gap-4 pb-8 md:pb-5">
      <p className="text-2xl md:text-3xl font-bold ">IT Consulting</p>
      <p className="text-md md:text-md lg:text-lg  font-medium  leading-7">
        Achieve your business goals with our tailored solutions that integrate
        technology-driven strategies. We provide unique insights and guidance to
        navigate complex IT projects and enhance your business scalability.
      </p>

      <div className="flex flex-col lg:flex-row justify-between space-x-0 lg:space-x-4 w-full mt-5">
        <div className="w-full lg:w-[50%] p-4 bg-[#F7FBFE]  shadow-lg rounded-lg ">
          <p className="text-lg md:text-xl font-semibold">
            IT Strategy Consulting
          </p>
          <p className="text-md md:text-sm lg:text-lg  font-normal pt-2 leading-8">
            Unlock your IT potential and excel in the digital landscape with our
            strategic consulting services, delivered by our experienced
            technology advisors.
          </p>
        </div>

        <div className="w-full lg:w-[50%] mt-8 lg:mt-0  p-4 bg-[#F7FBFE] shadow-lg  rounded-lg ">
          <p className="text-lg md:text-xl font-semibold">IT Assessment</p>
          <p className="text-md md:text-sm lg:text-lg  font-normal  pt-2 leading-8">
            Chart your path to digital success by redefining your IT strategy
            through our comprehensive assessments that drive innovation and
            enhance performance for your business.
          </p>
        </div>
      </div>

      <div className="w-full  mt-5 p-4 bg-[#F7FBFE] shadow-lg  rounded-lg ">
        <p className="text-lg md:text-xl font-semibold">
          IT Project and Program Management
        </p>
        <p className="text-md md:text-sm lg:text-lg  font-normal  pt-2 leading-8">
          Accelerate your business growth and embrace the wave of digital
          transformation with our comprehensive IT project and program
          management services. Our skilled team ensures that your IT projects
          achieve outstanding results with efficiency and speed.
        </p>
      </div>

      <div className="flex flex-col lg:flex-row justify-between space-x-0 lg:space-x-4 w-full mt-5">
        <div className="w-full lg:w-[50%] p-4 bg-[#F7FBFE]  shadow-lg rounded-lg ">
          <p className="text-lg md:text-xl font-semibold">
            IT Infrastructure Management
          </p>
          <p className="text-md md:text-sm lg:text-lg font-normal  pt-2 leading-8">
            Achieve IT excellence with our reliable infrastructure management
            services, designed to boost your operational efficiency and drive
            peak performance.
          </p>
        </div>

        <div className=" w-full lg:w-[50%] mt-8 lg:mt-0 p-4 bg-[#F7FBFE]  shadow-lg rounded-lg ">
          <p className="text-lg md:text-xl font-semibold">IT Outsourcing</p>
          <p className="text-md md:text-sm lg:text-lg  font-normal  pt-2 leading-8">
            Harness the vast potential of our premium IT outsourcing services to
            gain a competitive edge, foster innovation, and achieve unparalleled
            efficiency.
          </p>
        </div>
      </div>
    </div>
  );
};

export default ConsultPage;
