import SolutionImg from "../../assets/solution_img.png";

const SolutionSection = () => {
    return (
        <div >
            <div className="bg-purple-gradient flex flex-col md:flex-row items-center space-x-0 md:space-x-56 px-4 md:px-32 pt-20 pb-8">
           
               <div>
                <img src={SolutionImg} alt="" className="w-[300px] md:w-[600px]" />
               </div>
               
               <div className="w-full">
                <p className="text-xl md:text-2xl font-bold text-start">Solutions</p>
                <p className="text-[30px] md:text-5xl font-bold leading-tight pt-4">We’re More than Just Developers. We Solve <br/>Real-world Problems By Creating Better <br/> Digital Solutions.</p>
                <p className="text-lg font-medium pt-3">As a full-stack software development agency, We make some extraordinary things that engage your users.</p>

                
               <div>
                <div className="flex flex-col md:flex-row justify-between mt-6">
                    <div className="bg-[#000000] text-[#ffffff] w-full md:w-[32%] p-4  text-center text-lg font-semibold rounded-md shadow-xl transition-transform transform hover:scale-105">ERP</div>
                    <div className="bg-[#000000] text-[#ffffff] w-full md:w-[32%] mt-4 md:mt-0 p-4  text-center text-lg font-semibold rounded-md shadow-xl transition-transform transform hover:scale-105">CRM</div>
                    <div className="bg-[#000000] text-[#ffffff] w-full md:w-[32%]  mt-4 md:mt-0 p-4  text-center  text-lg font-semibold rounded-md shadow-xl transition-transform transform hover:scale-105">Inventory</div>
                </div>

                <div className="flex flex-col md:flex-row justify-between mt-4">
                    <div className="bg-[#000000] text-[#ffffff] w-full md:w-[32%] p-4  text-center text-lg font-semibold rounded-md shadow-xl transition-transform transform hover:scale-105">Enterprise Application</div>
                    <div className="bg-[#000000] text-[#ffffff] w-full md:w-[32%]  mt-4 md:mt-0 p-4  text-center text-lg font-semibold rounded-md shadow-xl transition-transform transform hover:scale-105">Data Analytics</div>
                    <div className="bg-[#000000] text-[#ffffff] w-full md:w-[32%]  mt-4 md:mt-0 p-4  text-center  text-lg font-semibold rounded-md shadow-xl transition-transform transform hover:scale-105">IT Service Management</div>
                </div>

                <div className="flex flex-col md:flex-row justify-between mt-4">
                    <div className="bg-[#000000] text-[#ffffff] w-full md:w-[32%] p-4  text-center text-lg font-semibold rounded-md shadow-xl transition-transform transform hover:scale-105">Ecommerce</div>
                    <div className="bg-[#000000] text-[#ffffff] w-full md:w-[32%]  mt-4 md:mt-0 p-4  text-center text-lg font-semibold rounded-md shadow-xl transition-transform transform hover:scale-105">Digital Twin</div>
                    <div className="bg-[#000000] text-[#ffffff] w-full md:w-[32%]  mt-4 md:mt-0 p-4  text-center  text-lg font-semibold rounded-md shadow-xl transition-transform transform hover:scale-105">Web Portals</div>
                </div>
               </div>
               </div>


            </div>
         
        </div>
    )
}

export default SolutionSection;