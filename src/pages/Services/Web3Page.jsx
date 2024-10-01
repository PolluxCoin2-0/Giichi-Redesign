const Web3Page = () => {
  return (
    <div className=" bg-[#E6E5E6] p-4 md:p-6  lg:p-8 xl:p-12 flex flex-col justify-center gap-4 pb-8 md:pb-5 mb-0 ">
      <p className="text-2xl md:text-3xl font-bold ">Web3 Development</p>
      <p className="text-md md:text-lg font-medium  leading-7">
      Web3 is an exciting evolution that the world has been anticipating
       for years, enabling decentralized processes across the internet. 
       This shift enhances numerous business platforms and services in 
       the digital landscape.

      </p>

      <div className="flex flex-col lg:flex-row justify-between space-x-0 lg:space-x-4 w-full mt-5">
        <div className="w-full lg:w-[50%] p-4 bg-[#F7FBFE]  shadow-lg rounded-lg ">
          <p className="text-lg md:text-xl font-semibold">Web3 In Supply Chain</p>
          <p className="text-md md:text-sm lg:text-lg  font-normal pt-2 leading-8">
          Tired of complex supply chain management? Embrace our innovative
           Web3 solutions that simplify operations and provide real-time 
           monitoring of every data point in your supply chain.

          </p>
        </div>

        <div className=" w-full lg:w-[50%]  mt-8 lg:mt-0 p-4 bg-[#F7FBFE] shadow-lg  rounded-lg ">
          <p className="text-lg md:text-xl font-semibold">Web3 In Healthcare</p>
          <p className="text-md md:text-sm lg:text-lg font-normal  pt-2 leading-8">
          Frustrated with the constant search for patient records? Transform 
          your patient data management with Web3 technologies, ensuring 
          security and instant accessibility whenever you need it.

          </p>
        </div>
      </div>

      <div className="w-full  mt-5 p-4 bg-[#F7FBFE] shadow-lg  rounded-lg ">
        <p className="text-lg md:text-xl font-semibold">Web3 Game Development</p>
        <p className="text-md md:text-sm lg:text-lg  font-normal  pt-2 leading-8">
        Our Web3 games revolutionize the gaming industry, seamlessly connecting 
        the physical and digital worlds. We create immersive experiences that 
        engage gamers and expand your user base. Discover gaming like never 
        before with our groundbreaking Web3 games.

        </p>
      </div>

      <div className="flex flex-col lg:flex-row justify-between space-x-0 lg:space-x-4 w-full mt-5">
        <div className=" w-full lg:w-[50%] p-4 bg-[#F7FBFE]  shadow-lg rounded-lg ">
          <p className="text-lg md:text-xl font-semibold">Web3 In Education</p>
          <p className="text-md md:text-sm lg:text-lg  font-normal  pt-2 leading-8">
          Educational institutions are reaching out to students in various 
          locations by leveraging Web3 technology, enhancing their capabilities 
          and broadening their impact.

          </p>
        </div>

        <div className="w-full lg:w-[50%]  mt-8 lg:mt-0 p-4 bg-[#F7FBFE]  shadow-lg rounded-lg ">
          <p className="text-lg md:text-xl font-semibold">Web3 In Finance</p>
          <p className="text-md md:text-sm lg:text-lg  font-normal  pt-2 leading-8">
          Leading financial institutions globally are embracing Web3 strategies. Now it’s your opportunity to establish your presence in the Web3 space and position your business for future growth.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Web3Page;
