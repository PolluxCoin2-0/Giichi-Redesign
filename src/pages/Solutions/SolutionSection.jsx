import SolutionImg from "../../assets/solution_img.png";

const SolutionSection = () => {
  return (
    <div>
      <div className="bg-purple-gradient flex flex-col lg:flex-row items-center space-x-0 lg:space-x-12 xl:space-x-56 px-4 md:px-10 lg:px-12 xl:px-32 pt-20 pb-8">
        <div>
          <img
            src={SolutionImg}
            alt=""
            className="w-[300px] md:w-[400px] lg:w-[80%] xl:w-[600px]"
          />
        </div>

        <div className="w-full">
          <p className="text-xl md:text-2xl font-bold text-start">Solutions</p>
          <p className="text-[30px] md:text-3xl lg:text-2xl xl:text-5xl font-bold leading-tight pt-4">
          More Than Just Developers—We Create Innovative Digital Solutions for Real-World Challenges

          </p>
          <p className="text-lg font-medium pt-3">
            As a full-stack software development agency, We make some
            extraordinary things that engage your users.
          </p>

          <div>
            <div className="flex flex-col md:flex-row justify-between mt-6">
              <div className="bg-[#000000] text-[#ffffff] w-full md:w-[32%] p-4  text-center text-lg font-semibold rounded-md shadow-xl transition-transform transform hover:scale-105">
                ERP Solution 
              </div>
              <div className="bg-[#000000] text-[#ffffff] w-full md:w-[32%] mt-4 md:mt-0 p-4  text-center text-lg font-semibold rounded-md shadow-xl transition-transform transform hover:scale-105">
                CRM System
              </div>
              <div className="bg-[#000000] text-[#ffffff] w-full md:w-[32%]  mt-4 md:mt-0 p-4  text-center  text-lg font-semibold rounded-md shadow-xl transition-transform transform hover:scale-105">
                Inventory Management
              </div>
            </div>

            <div className="flex flex-col md:flex-row justify-between mt-4">
              <div className="bg-[#000000] text-[#ffffff] w-full md:w-[32%] p-4  text-center text-lg font-semibold rounded-md shadow-xl transition-transform transform hover:scale-105">
                Enterprise Application
              </div>
              <div className="bg-[#000000] text-[#ffffff] w-full md:w-[32%]  mt-4 md:mt-0 p-4  text-center text-lg font-semibold rounded-md shadow-xl transition-transform transform hover:scale-105">
                Data Analytics
              </div>
              <div className="bg-[#000000] text-[#ffffff] w-full md:w-[32%] truncate mt-4 md:mt-0 p-4  text-center  text-lg font-semibold rounded-md shadow-xl transition-transform transform hover:scale-105">
                IT Service Management
              </div>
            </div>

            <div className="flex flex-col md:flex-row justify-between mt-4">
              <div className="bg-[#000000] text-[#ffffff] w-full md:w-[32%] p-4  text-center text-lg font-semibold rounded-md shadow-xl transition-transform transform hover:scale-105">
                Ecommerce Platforms
              </div>
              <div className="bg-[#000000] text-[#ffffff] w-full md:w-[32%]  mt-4 md:mt-0 p-4  text-center text-lg font-semibold rounded-md shadow-xl transition-transform transform hover:scale-105">
                Digital Twin Technologies
              </div>
              <div className="bg-[#000000] text-[#ffffff] w-full md:w-[32%]  mt-4 md:mt-0 p-4  text-center  text-lg font-semibold rounded-md shadow-xl transition-transform transform hover:scale-105">
                Web Portals
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SolutionSection;
