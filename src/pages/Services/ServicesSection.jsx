import { useState } from "react";
import SoftwarePage from "./SoftwarePage";
import WebPage from "./WebPage";
import MobilePage from "./MobilePage";
import BlockchainPage from "./BlockchainPage";
import MetaversePage from "./MetaversePage";
import Web3Page from "./Web3Page";
import DigitalPage from "./DigitalPage";
import ConsultPage from "./ConsultPage";

const ServicesSection = () => {
  const [viewSoftwareDev, setViewSoftwareDev] = useState(true);
  const [viewWebDev, setViewWebDev] = useState(false);
  const [viewMobileDev, setViewMobileDev] = useState(false);
  const [viewBlockchain, setViewBlockchain] = useState(false);
  const [viewMetaverse, setViewMetaverse] = useState(false);
  const [viewWeb3, setViewWeb3] = useState(false);
  const [viewDigital, setViewDigital] = useState(false);
  const [viewConsult, setViewConsult] = useState(false);

  const toggleSection = (section) => {
    setViewSoftwareDev(section === "SoftwarePage");
    setViewWebDev(section === "WebPage");
    setViewMobileDev(section === "MobilePage");
    setViewBlockchain(section === "BlockchainPage");
    setViewMetaverse(section === "MetaversePage");
    setViewWeb3(section === "Web3Page");
    setViewDigital(section === "DigitalPage");
    setViewConsult(section === "ConsultPage");
  };
  return (
    <div className=" mt-32 w-full flex flex-row justify-between ">
      <div className="w-[40%] bg-[#FBC901] ">
        <p className="text-2xl font-bold text-end pr-12 pt-12 ">Services</p>
        <p className="text-4xl font-bold text-end mt-5 pl-6 pr-12  ">
          No Matter Whatever You Need, We Build
        </p>
        <div className="mt-10">
          <ul>
            <li
              className="text-xl font-semibold p-5 w-full hover:bg-[#EDBF08] pl-12"
              onClick={() => toggleSection("SoftwarePage")}
            >
              Software Development
            </li>

            <li
              className="text-xl font-semibold p-5  w-full hover:bg-[#EDBF08] pl-12"
              onClick={() => toggleSection("WebPage")}
            >
              Web Development
            </li>

            <li
              className="text-xl font-semibold p-5  w-full hover:bg-[#EDBF08] pl-12"
              onClick={() => toggleSection("MobilePage")}
            >
              Mobile App Development
            </li>

            <li
              className="text-xl font-semibold p-5  w-full hover:bg-[#EDBF08] pl-12"
              onClick={() => toggleSection("BlockchainPage")}
            >
              Blockchain Development
            </li>

            <li
              className="text-xl font-semibold p-5  w-full hover:bg-[#EDBF08] pl-12"
              onClick={() => toggleSection("MetaversePage")}
            >
              Metaverse Development
            </li>

            <li
              className="text-xl font-semibold p-5  w-full hover:bg-[#EDBF08] pl-12"
              onClick={() => toggleSection("Web3Page")}
            >
              Web3 Development
            </li>

            <li
              className="text-xl font-semibold p-5  w-full hover:bg-[#EDBF08] pl-12"
              onClick={() => toggleSection("DigitalPage")}
            >
              Digital Transformation
            </li>

            <li
              className="text-xl font-semibold p-5  w-full hover:bg-[#EDBF08] pl-12"
              onClick={() => toggleSection("ConsultPage")}
            >
              IT Consulting
            </li>
          </ul>
        </div>
      </div>

      {/* Conditionally render the NftPage component below */}
      {viewSoftwareDev && (
        <div className="w-[60%]  ">
          <SoftwarePage />
        </div>
      )}
      {viewWebDev && (
        <div className="w-[60%]  ">
          <WebPage />
        </div>
      )}
      {viewMobileDev && (
        <div className="w-[60%]  ">
          <MobilePage />
        </div>
      )}
      {viewBlockchain && (
        <div className="w-[60%]  ">
          <BlockchainPage />
        </div>
      )}
      {viewMetaverse && (
        <div className="w-[60%]  ">
          <MetaversePage />
        </div>
      )}
      {viewWeb3 && (
        <div className="w-[60%]  ">
          <Web3Page />
        </div>
      )}
      {viewDigital && (
        <div className="w-[60%]  ">
          <DigitalPage />
        </div>
      )}
      {viewConsult && (
        <div className="w-[60%]  ">
          <ConsultPage />
        </div>
      )}
    </div>
  );
};

export default ServicesSection;
