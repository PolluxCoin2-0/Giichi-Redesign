import { useState } from "react";
import NftPage from "./NftPage";
import ExchangePage from "./ExchangePage";
import TokonomicsPage from "./TokonomicsPage";
import LaunchpadPage from "./LauchpagPage";
import MlmPage from "./MlmPage";
import CryptoWalletPage from "./CryptoWalletPage";



const PortfolioSection = () => {
    const [viewNft, setViewNft] = useState(true);
    const [viewExchange, setViewExchange] = useState(false);
    const [viewTokonomics, setViewTokonomics] = useState(false);
    const [viewLaunchpad, setViewLaunchpad] = useState(false);
    const [viewMlm, setViewMlm] = useState(false);
    const [viewCryptoWallet, setViewCryptoWallet] = useState(false);

    const toggleSection = (section) => {
        setViewNft(section === "NftPage");
        setViewExchange(section === "Exchange");
        setViewTokonomics(section === "Tokonomics");
        setViewLaunchpad(section === "Launchpad");
        setViewMlm(section === "Mlm");
        setViewCryptoWallet(section === "Cryptowallet");
    };

  

    return (
        <div className=" bg-[#000000] w-full flex flex-col items-start px-4 md:px-32 pt-12 pb-12 md:pt-24 md:pb-48">
            <div className="w-full flex flex-col md:flex-row justify-between items-start md:items-center">
                <div>
                    <p className="text-[#ffffff] text-3xl md:text-4xl font-semibold pl-3 md:pl-0">Portfolio</p>
                </div>

                <div className="mt-4 md:mt-0">
                    <ul className="flex flex-wrap md:flex-row space-x-0 md:space-x-3">
                        <li
                            className="text-[#ffffff] text-lg md:text-xl font-medium px-4 py-2 md:px-8 md:py-4 rounded-full cursor-pointer hover:bg-green transition-colors"
                            onClick={() => toggleSection("NftPage")}>NFT</li>

                        <li className="text-[#ffffff] text-lg md:text-xl font-medium cursor-pointer px-4 py-2 md:px-8 md:py-4 rounded-full hover:bg-green transition-colors"
                        onClick={() => toggleSection("Exchange")}>Exchange</li>

                        <li className="text-[#ffffff] text-lg md:text-xl font-medium cursor-pointer px-4 py-2 md:px-8 md:py-4 rounded-full hover:bg-green transition-colors"
                        onClick={() => toggleSection("Tokonomics")}>Tokonomics</li>

                        <li className="text-[#ffffff] text-lg md:text-xl font-medium cursor-pointer px-4 py-2 md:px-8 md:py-4 rounded-full hover:bg-green transition-colors"
                        onClick={() => toggleSection("Launchpad")}>Launchpad</li>

                        <li className="text-[#ffffff] text-lg md:text-xl font-medium cursor-pointer px-4 py-2 md:px-8 md:py-4 rounded-full hover:bg-green transition-colors"
                        onClick={() => toggleSection("Mlm")}>MLM</li>

                        <li className="text-[#ffffff] text-lg md:text-xl font-medium cursor-pointer px-4 py-2 md:px-8 md:py-4 rounded-full hover:bg-green transition-colors"
                        onClick={() => toggleSection("Cryptowallet")}>Crypto Wallet</li>
                    </ul>
                </div>
            </div>

            {/* Conditionally render the NftPage component below */}
            {viewNft && (
                <div className="  w-full  bg-[#000000]  ">
                    <NftPage />
                </div>
           )}


            {viewExchange && (
                <div className=" w-full  bg-[#000000]  ">
                    < ExchangePage />
                </div>
           )}


                {viewTokonomics && (
                <div className=" w-full  bg-[#000000]  ">
                    < TokonomicsPage />
                </div>
           )}

             {viewLaunchpad && (
                <div className=" w-full  bg-[#000000]  ">
                    < LaunchpadPage />
                </div>
           )}

            {viewMlm && (
                <div className=" w-full  bg-[#000000]  ">
                    < MlmPage />
                </div>
           )}

          {viewCryptoWallet && (
                <div className=" w-full  bg-[#000000]  ">
                    < CryptoWalletPage />
                </div>
           )}


          
        </div>
    );
};

export default PortfolioSection;
