import { FaFacebookF } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaLinkedinIn } from "react-icons/fa";
import { ImInstagram } from "react-icons/im";
import GiichiLightLogo from "../assets/logo-light.png";
import { HiHomeModern } from "react-icons/hi2";

const Footer = () => {
    return (
        <div className="bg-[#121212] pb-12">
            
            <div className="flex flex-col md:flex-row justify-start md:justify-around px-8 md:px-32 pt-10 pb-10 border-b-[1px] border-[#7c7c7c]">
                
                <div className="" >
                    <p className="text-[#F7B611] text-2xl font-bold pb-0 md:pb-4">Company</p>
                    <p className="text-md font-semibold text-[#ffffff] pt-4">About Us</p>
                    <p className="text-md font-semibold text-[#ffffff] pt-4">Portfolio</p>
                    <p className="text-md font-semibold text-[#ffffff] pt-4">Insights</p>
                    <p className="text-md font-semibold text-[#ffffff] pt-4">Terms & Services</p>
                    <p className="text-md font-semibold text-[#ffffff] pt-4">Privacy Policy</p>
                    <p className="text-md font-semibold text-[#ffffff] pt-4">Careers</p>
                    <p className="text-md font-semibold text-[#ffffff] pt-4">Sitemap</p>
                </div>

                <div className="mt-8 md:mt-0">
                <p className="text-[#F7B611] text-2xl font-bold pb-0 md:pb-4">Services</p>
                    <p className="text-md font-semibold text-[#ffffff] pt-4">Web</p>
                    <p className="text-md font-semibold text-[#ffffff] pt-4">Software</p>
                    <p className="text-md font-semibold text-[#ffffff] pt-4">Mobile App</p>
                    <p className="text-md font-semibold text-[#ffffff] pt-4">IT Services</p>
                    <p className="text-md font-semibold text-[#ffffff] pt-4">Blockchain</p>
                    <p className="text-md font-semibold text-[#ffffff] pt-4">Metaverse</p>
                    <p className="text-md font-semibold text-[#ffffff] pt-4">Game</p>
                </div>

                <div className="mt-8 md:mt-0">
                <p className="text-[#F7B611] text-2xl font-bold pb-0 md:pb-4">Solution</p>
                    <p className="text-md font-semibold text-[#ffffff] pt-4">Web3</p>
                    <p className="text-md font-semibold text-[#ffffff] pt-4">NFT</p>
                    <p className="text-md font-semibold text-[#ffffff] pt-4">P2E</p>
                    <p className="text-md font-semibold text-[#ffffff] pt-4">DeFi</p>
                    <p className="text-md font-semibold text-[#ffffff] pt-4">DAO</p>
                    <p className="text-md font-semibold text-[#ffffff] pt-4">IDO</p>
                    <p className="text-md font-semibold text-[#ffffff] pt-4">AI</p>
                </div>


                <div className="mt-8 md:mt-0">
                <p className="text-[#F7B611] text-2xl font-bold  pb-0 md:pb-4">Products</p>
                    <p className="text-md font-semibold text-[#ffffff] pt-4">Crypto Exchange</p>
                    <p className="text-md font-semibold text-[#ffffff] pt-4">Crypto Wallet</p>
                    <p className="text-md font-semibold text-[#ffffff] pt-4">NFT Marketplace</p>
                    <p className="text-md font-semibold text-[#ffffff] pt-4">Binance Like Exchange</p>
                    <p className="text-md font-semibold text-[#ffffff] pt-4">Pancakeswap Like DEX</p>
                    <p className="text-md font-semibold text-[#ffffff] pt-4">Opensea Like Marketplace</p>
                    <p className="text-md font-semibold text-[#ffffff] pt-4">Launchpad</p>
                </div>

                <div className="mt-8 md:mt-0">
                    <p className="text-[#F7B611] text-2xl font-bold  pb-0 md:pb-4">Social Media</p>
                    <p className="text-md font-semibold text-[#ffffff] pt-4">Follow Us On Social Media</p>
                    <div className="flex flex-row justify-between space-x-0 md:space-x-5 pt-6">
                        <p className="bg-[#F7B611] px-3 py-3 rounded-full animated-icon"><FaFacebookF size={24} /></p>
                        <p className="bg-[#F7B611] px-3 py-3 rounded-full animated-icon"><FaXTwitter size={24}  /></p>
                        <p className="bg-[#F7B611] px-3 py-3 rounded-full animated-icon"><FaLinkedinIn size={24}  /></p>
                        <p className="bg-[#F7B611] px-3 py-3 rounded-full animated-icon"><ImInstagram size={24}  /></p>
                    </div>

                    <p className="text-[#ffffff] text-xl md:text-[22px] font-bold pt-7">Business Enquiry: +91 93845 87998</p>
                    <p className="text-[#ffffff] text-xl md:text-[22px] font-bold pt-6">For Job: +91 93614 23585</p>
                </div>
            </div>

            <div className="flex flex-col md:flex-row justify-between px-8 md:px-48 pt-10">
              <div>
                <img src={GiichiLightLogo} alt="" className="" />
                <p className="pt-5 text-[#ffffff] text-sm md:text-md font-semibold">Giichi Solutions & Pvt Ltd  is a software development <br/>
                company in India that provides mobile app <br/>
                development, custom software development <br/>
                and digital marketing services.</p>
              </div>

              <div>
                <div className="flex flex-row space-x-4 items-center mt-6 md:mt-0">
                <p className="text-[#F7B611] text-2xl md:text-3xl font-bold ">Visit Us </p>
                <p className="text-[#F7B611]"><HiHomeModern  size={40}/></p>
                </div>
               
                <p  className="pt-5 text-[#ffffff] text-sm md:text-md font-semibold mr-12">Giichi IT Solution Pvt Ltd <br/> Sushma Infinium, 4/64 <br/> Zirakpur, Gazipur, Punjab, 140603</p>
              </div>
            </div>


            <div className="text-center mt-10 md:mt-16 text-[#ffffff] text-sm font-medium px-6 md:px-0 ">Copyright © 2024 Giichi IT Solution & Private Limited. All Rights Reserved.</div>
        </div>
    )
}

export default Footer;