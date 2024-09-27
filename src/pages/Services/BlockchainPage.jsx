const BlockchainPage = () => {
  return (
    <div className=" bg-[#E6E5E6] p-4 md:p-6  lg:p-8 xl:p-12 flex flex-col justify-center gap-4 pb-8 md:pb-8 mb-0 ">
      <p className="text-2xl md:text-3xl font-bold mt-5 md:mt-0">Blockchain Development</p>
      <p className="text-md md:text-lg font-medium  leading-7">
        As the leader of the blockchain space, we help businesses across the
        globe build a solid financial infrastructure and thriving <br />
        blockchain products nurtured by technological innovations.
      </p>

      <div className="flex flex-col lg:flex-row justify-between space-x-0 lg:space-x-4 w-full mt-5">
        <div className=" w-full lg:w-[50%] p-4 bg-[#F7FBFE]  shadow-lg rounded-lg ">
          <p className="text-lg md:text-xl font-semibold">Crypto Exchange</p>
          <p className="text-md md:text-sm lg:text-lg    font-normal pt-2 leading-8">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. <br />
            Officia animi distinctio quisquam esse corporis doloremque <br />
            molestias aspernatur quidem alias cupiditate.
          </p>
        </div>

        <div className=" w-full lg:w-[50%] mt-8 lg:mt-0 p-4 bg-[#F7FBFE] shadow-lg  rounded-lg ">
          <p className="text-lg md:text-xl font-semibold">DeFi</p>
          <p className=" text-md md:text-sm lg:text-lg  font-normal  pt-2 leading-8">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Officia
            animi distinctio quisquam esse corporis doloremque molestias
            aspernatur quidem alias cupiditate.
          </p>
        </div>
      </div>

      <div className="w-full  mt-5 p-4 bg-[#F7FBFE] shadow-lg  rounded-lg ">
        <p className="text-lg md:text-xl font-semibold">Enterprise Blockchain Solution</p>
        <p className="text-md md:text-sm lg:text-lg    font-normal  pt-2 leading-8">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Officia
          animi distinctio quisquam esse corporis doloremque molestias
          aspernatur quidem alias cupiditate.
        </p>
      </div>

      <div className="flex flex-col lg:flex-row justify-between space-x-0 lg:space-x-4 w-full mt-5">
        <div className=" w-full lg:w-[50%] p-4 bg-[#F7FBFE]  shadow-lg rounded-lg ">
          <p className="text-lg md:text-xl font-semibold">Token and Coin Creation</p>
          <p className="text-text-md md:text-sm lg:text-lg    font-normal  pt-2 leading-8">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. <br />
            Officia animi distinctio quisquam esse corporis doloremque <br />
            molestias aspernatur quidem alias cupiditate.
          </p>
        </div>

        <div className=" w-full lg:w-[50%] mt-8 lg:mt-0 p-4 bg-[#F7FBFE]  shadow-lg rounded-lg ">
          <p className="text-xl font-semibold">NFT Marketplace</p>
          <p className="text-md md:text-sm lg:text-lg    font-normal  pt-2 leading-8">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. <br />
            Officia animi distinctio quisquam esse corporis doloremque <br />
            molestias aspernatur quidem alias cupiditate.
          </p>
        </div>
      </div>
    </div>
  );
};

export default BlockchainPage;
