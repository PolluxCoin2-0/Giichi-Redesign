const BlockchainPage = () => {
  return (
    <div className=" bg-[#E6E5E6] p-4 md:p-6  lg:p-8 xl:p-12 flex flex-col justify-center gap-4 pb-8 md:pb-8 mb-0 ">
      <p className="text-2xl md:text-3xl font-bold mt-5 md:mt-0">Blockchain Development</p>
      <p className="text-md md:text-lg font-medium  leading-7">
      As a leader in blockchain technology, We empowers businesses globally 
      to build robust financial infrastructures and innovative blockchain 
      products, driven by cutting-edge technological advancements.

      </p>

      <div className="flex flex-col lg:flex-row justify-between space-x-0 lg:space-x-4 w-full mt-5">
        <div className=" w-full lg:w-[50%] p-4 bg-[#F7FBFE]  shadow-lg rounded-lg ">
          <p className="text-lg md:text-xl font-semibold">Crypto Exchange</p>
          <p className="text-md md:text-sm lg:text-lg    font-normal pt-2 leading-8">
          Unlock seamless access to the crypto world with a custom-built crypto
           exchange, enabling real-time trading of digital assets and ensuring 
           a smooth transition into the digital economy.

          </p>
        </div>

        <div className=" w-full lg:w-[50%] mt-8 lg:mt-0 p-4 bg-[#F7FBFE] shadow-lg  rounded-lg ">
          <p className="text-lg md:text-xl font-semibold">DeFi (Decentralizedn Finance)</p>
          <p className=" text-md md:text-sm lg:text-lg  font-normal  pt-2 leading-8">
          Transform your financial operations with secure and scalable DeFi
           solutions, allowing for borderless transactions and enhanced
            efficiency through decentralized finance platforms.

          </p>
        </div>
      </div>

      <div className="w-full  mt-5 p-4 bg-[#F7FBFE] shadow-lg  rounded-lg ">
        <p className="text-lg md:text-xl font-semibold">Enterprise Blockchain Solution</p>
        <p className="text-md md:text-sm lg:text-lg    font-normal  pt-2 leading-8">
        Elevate your business operations with enterprise-grade blockchain 
        integration, offering heightened transparency, security, 
        and efficiency for significant business growth.

        </p>
      </div>

      <div className="flex flex-col lg:flex-row justify-between space-x-0 lg:space-x-4 w-full mt-5">
        <div className=" w-full lg:w-[50%] p-4 bg-[#F7FBFE]  shadow-lg rounded-lg ">
          <p className="text-lg md:text-xl font-semibold">Token and Coin Creation</p>
          <p className="text-text-md md:text-sm lg:text-lg    font-normal  pt-2 leading-8">
          Achieve long-term profitability by creating authentic tokens and 
          coins tailored for your crypto business, helping you reach key 
          business milestones and establish sustainability in the market.

          </p>
        </div>

        <div className=" w-full lg:w-[50%] mt-8 lg:mt-0 p-4 bg-[#F7FBFE]  shadow-lg rounded-lg ">
          <p className="text-xl font-semibold">NFT Marketplace</p>
          <p className="text-md md:text-sm lg:text-lg    font-normal  pt-2 leading-8">
          Drive your digital business forward by leveraging advanced technologies 
          to build secure, feature-rich NFT marketplaces that empower users to
           grow their NFT ventures.

          </p>
        </div>
      </div>
    </div>
  );
};

export default BlockchainPage;
