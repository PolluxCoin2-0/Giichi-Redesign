import NftImg from "../../assets/nft_img.png";

const NftPage = () => {
    return (
     <div className="text-[#ffffff] bg-[#000000] pt-10  flex flex-row space-x-12 justify-between ">
           
           <div className="w-[50%]">
             <p className="text-5xl font-bold leading-tight">Showcasing our Unmatched Portfolio <br/>of Excellence</p>
             <p className="text-lg font-normal pt-6">Get a Glimpse of our Dynamic Portfolio, illustrating our Record-breaking Products.</p>
             <img src={NftImg} alt="" className="w-[600px] text-center " />
           </div>

           <div className="w-[50%]">
            <p className="text-[#ffffff] text-3xl font-semibold pt-20">NFT</p>
            <p className="text-[#ffffff] text-5xl font-semibold pt-8">NFT Marketplace</p>

            <p className="text-[#ffffff] text-lg font-normal pt-8 leading-8">Have plans to kick-start your own NFT marketplace? You are in the right place! Maticz has developed and <br/>
            successfully launched more than 50+ NFT marketplaces which are now top-performing in the market. We are <br/>
            the pro-players in developing NFT marketplaces on various blockchain networks like Ethereum, Binance Chain, <br/>
             Solana, Polygon, Avalance, etc</p>


             <div className="flex flex-row space-x-5">
              <div>
                  {/* Button */}
            <button className="bg-[#569F42]   text-[#ffff] mt-8 button rounded-xl transition-transform duration-300 ease-out transform group-hover:-translate-x-1/2 relative z-10">
              <a
                href="#_"
                className="relative inline-flex items-center justify-center p-4 px-6 py-3 overflow-hidden font-medium text-indigo-600 transition duration-400 ease-out shadow-md group"
              >
                <span className="absolute inset-0 flex items-center justify-center w-full h-full text-white transition duration-400 -translate-x-full bg-purple-500 group-hover:translate-x-0 ease-out">
                  <svg
                    className="w-6 h-6"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M14 5l7 7m0 0l-7 7m7-7H3"
                    ></path>
                  </svg>
                </span>
                <span className="text-xl font-bold text-[#000000] absolute flex items-center justify-center w-full h-full text-purple-500 transition-all duration-400 transform group-hover:translate-x-full ease-outt">
                  Get Demo
                </span>
                <span className="relative invisible">Talk to Experts</span>
              </a>
            </button>
              </div>

              <div>
                  {/* Button */}
            <button className="bg-[#569F42]  text-[#ffff] mt-8 button rounded-xl transition-transform duration-300 ease-out transform group-hover:-translate-x-1/2 relative z-10">
              <a
                href="#_"
                className="relative inline-flex items-center justify-center p-4 px-6 py-3 overflow-hidden font-medium text-indigo-600 transition duration-400 ease-out shadow-md group"
              >
                <span className="absolute inset-0 flex items-center justify-center w-full h-full text-white transition duration-400 -translate-x-full bg-purple-500 group-hover:translate-x-0 ease-out">
                  <svg
                    className="w-6 h-6"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M14 5l7 7m0 0l-7 7m7-7H3"
                    ></path>
                  </svg>
                </span>
                <span className="text-xl font-bold text-[#000000] absolute flex items-center justify-center w-full h-full text-purple-500 transition-all duration-400 transform group-hover:translate-x-full ease-outt">
                  Get Quote
                </span>
                <span className="relative invisible">Talk to Experts</span>
              </a>
            </button>
              </div>
             </div>

           </div>
     </div>
    )
}

export default NftPage;