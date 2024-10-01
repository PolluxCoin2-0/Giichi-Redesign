import { useState } from "react";
import GiichiLogoImg from "../assets/Giichilogo.png";
import GiichiLogoLight from "../assets/logo-light.png";
import { CgMenuLeft } from "react-icons/cg";
import { ImCross } from "react-icons/im";
import { FaArrowRightLong } from "react-icons/fa6";

// Service, Product, and Industry content components
const ContentSection = ({ items, title }) => (
  <div className="flex flex-col space-y-8 ml-8">
    <ul className="flex flex-col space-y-5">
      {items.map((item, index) => (
        <div key={index} className="flex flex-row space-x-2 items-center pl-12">
          <p className="text-[#ffffff]">
            <FaArrowRightLong size={16} />
          </p>
          <li className="text-[#ffffff] text-xl font-normal">{item}</li>
        </div>
      ))}
    </ul>
  </div>
);

const Navbar = () => {
  const [viewNavbar, setViewNavbar] = useState(false);
  const [viewServices, setViewServices] = useState(false);
  const [viewProducts, setViewProducts] = useState(false);
  const [viewIndustries, setViewIndustries] = useState(false);
  const [viewCompany, setViewCompany] = useState(false);

  const toggleNavbar = () => setViewNavbar((prev) => !prev);
  const closeNavbar = () => setViewNavbar(false);

  const toggleSection = (section) => {
    setViewServices(section === "services");
    setViewProducts(section === "products");
    setViewIndustries(section === "industries");
    setViewCompany(section === "company");
  };

  const services = [
    "Software ",
    "Mobile App",
    "Blockchain",
    "Web3",
    "AI/ML/IoT",
    "Metaverse",
    "Web",
    "Games",
  ];

  const products = [
    "Crypto Exchange Software",
    "White Label Blockchain Solutions",
    "White Label Crypto Exchange",
    "White Label Crypto Wallet",
    "White Label NFT Marketplace",
    "White Label NFT Minting",
    "White Label NFT Staking",
    "White Label DeFi Solutions",
    "White Label Casino",
    "Crypto Banking Software",
    "White Label Crypto Launchpad",
    "White Label Payment Gateway",
    "Web3 Solutions",
    "Blockchain Solutions",
    "DeFi Solutions",
  ];

  const industries = [
    "Healthcare",
    "Banking and Finance",
    "Transportation and EV",
    "Education",
    "Manufacturing",
    "Social Networking",
    "Supply Chain",
    "Logistics",
    "Telecommunication",
    "Government",
    "Gas and Oil",
    "Construction",
    "Insurance",
    "Aviation",
    "Agriculture",
    "Energy",
  ];

  const company = [
    "About Us",
    "Terms & Conditions",
    "Privacy Policy",
    "Careers",
  ];

  return (
    <div>
      {/* Navbar */}
      <div className="flex flex-row justify-between items-center px-4 md:px-10 lg:px-32 pt-4 bg-[#569F42]">
        {/* Logo */}
        <img src={GiichiLogoImg} alt="Logo" className="h-10" />
        {/* Menu Icon */}
        <p className=" hover:text-yellow" onClick={toggleNavbar}>
          <CgMenuLeft size={44} />
        </p>
      </div>

      {/* Sidebar with animation */}
      <div
        className={`fixed top-0 left-0 w-full h-screen bg-[#000000] text-white flex flex-col px-4 md:px-10 lg:px-0 xl:px-32 pt-8 z-50 transition-transform duration-1000 ease-in-out ${
          viewNavbar ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex flex-row justify-between items-center">
          <img src={GiichiLogoLight} alt="Logo" className="h-10" />
          <ImCross
            size={24}
            onClick={closeNavbar}
            className="cursor-pointer text-[#ffffff] hover:text-yellow"
          />
        </div>
        {/* Nav items */}
        <div className="flex flex-row space-x-10 mt-8">
          <ul className="flex flex-col space-y-12">
            <li
              className="text-[#ffffff] text-2xl font-semibold cursor-pointer"
              onClick={() => toggleSection("services")}
            >
              Services
            </li>
            <li
              className="text-[#ffffff] text-2xl font-semibold"
              onClick={() => toggleSection("products")}
            >
              Products
            </li>
            <li
              className="text-[#ffffff] text-2xl font-semibold"
              onClick={() => toggleSection("industries")}
            >
              Industries
            </li>
            <li
              className="text-[#ffffff] text-2xl font-semibold"
              onClick={() => toggleSection("company")}
            >
              Company
            </li>
            <li className="text-[#ffffff] text-2xl font-semibold">Our Work</li>
            <li className="text-[#ffffff] text-2xl font-semibold">Blogs</li>
            <li className="text-[#ffffff] text-2xl font-semibold">
              Contact Us
            </li>
            <li className="text-[#ffffff] text-2xl font-semibold">Contacts</li>
          </ul>
          {/* Conditional Content Sections */}
          {viewServices && <ContentSection items={services} />}
          {viewProducts && <ContentSection items={products} />}
          {viewIndustries && <ContentSection items={industries} />}
          {viewCompany && <ContentSection items={company} />}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
