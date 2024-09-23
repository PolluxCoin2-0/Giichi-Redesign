import TechImg  from "../../assets/tech_img.png";

const TechnologiesSection = () => {
    return (
        <div className="bg-[#000000] flex flex-col md:flex-row items-center space-x-12 px-4 md:px-32 pt-20 pb-8">
            
            <div>
                <img src={TechImg} alt="" className="w-[300px] md:w-[740px]" />
            </div>

            <div className="">
                <p className="text-[#ffffff] text-2xl font-bold">Technologies</p>
                <p  className="text-[#ffffff] text-xl md:text-5xl font-bold leading-tight pt-4">Lorem, ipsum dolor sit amet consectetur <br/> adipisicing elit. </p>
                <p  className="text-[#ffffff] text-xl font-medium pt-4">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Doloribus, distinctio!</p>
                
                {/* first tech row */}
                <div className="flex flex-col md:flex-row justify-center  md:justify-between space-x-0 md:space-x-8 w-full mt-10">
                    <div className="w-full md:w-[230px] border-[1px] border-[#968e8e] p-10 pt-3 pb-3 shadow-lg shadow-[#464343] transition-transform transform hover:scale-105">
                        <p className="text-[#ffffff] text-lg font-medium text-center ">Frontend</p>

                        <ul className="list-disc marker:text-[#FAAC01]  ">
                            <li className="text-[#968e8e] text-md font-normal  pt-4 ">HTML/CSS</li>
                            <li  className="text-[#968e8e] text-md font-normal pt-4">ReactJS</li> 
                            <li  className="text-[#968e8e] text-md font-normal pt-4">AngularJS</li>
                            <li  className="text-[#968e8e] text-md font-normal pt-4 pb-2">VueJS</li>

                        </ul>
                    </div>


                   <div className="w-full md:w-[230px] border-[1px] border-[#968e8e] p-10 pt-3 pb-3 mt-6 md:mt-0 shadow-lg shadow-[#464343] transition-transform transform hover:scale-105">
                        <p className="text-[#ffffff] text-lg font-medium text-center ">Frontend</p>

                        <ul className="list-disc marker:text-[#FAAC01] ">
                            <li className="text-[#968e8e] text-md font-normal  pt-4">HTML/CSS</li>
                            <li  className="text-[#968e8e] text-md font-normal pt-4">ReactJS</li>
                            <li  className="text-[#968e8e] text-md font-normal pt-4">AngularJS</li>
                            <li  className="text-[#968e8e] text-md font-normal pt-4 pb-2">VueJS</li>
                        </ul>
                    </div>

                    <div className="w-full md:w-[230px] border-[1px] border-[#968e8e] p-10 pt-3 pb-3 mt-6 md:mt-0 shadow-lg shadow-[#464343] transition-transform transform hover:scale-105">
                        <p className="text-[#ffffff] text-lg font-medium text-center ">Frontend</p>

                        <ul className="list-disc marker:text-[#FAAC01] ">
                            <li className="text-[#968e8e] text-md font-normal  pt-4">HTML/CSS</li>
                            <li  className="text-[#968e8e] text-md font-normal pt-4">ReactJS</li>
                            <li  className="text-[#968e8e] text-md font-normal pt-4">AngularJS</li>
                            <li  className="text-[#968e8e] text-md font-normal pt-4 pb-2">VueJS</li>
                        </ul>
                    </div>

                    <div className="w-full md:w-[230px] border-[1px] border-[#968e8e] p-10 pt-3 pb-3  mt-6 md:mt-0 shadow-lg shadow-[#464343] transition-transform transform hover:scale-105">
                        <p className="text-[#ffffff] text-lg font-medium text-center ">Frontend</p>

                        <ul className="list-disc marker:text-[#FAAC01] ">
                            <li className="text-[#968e8e] text-md font-normal  pt-4">HTML/CSS</li>
                            <li  className="text-[#968e8e] text-md font-normal pt-4">ReactJS</li>
                            <li  className="text-[#968e8e] text-md font-normal pt-4">AngularJS</li>
                            <li  className="text-[#968e8e] text-md font-normal pt-4 pb-2">VueJS</li>
                        </ul>
                    </div>

                </div>
                 

                 {/* Second Tech Row */}
                <div className="flex flex-col md:flex-row justify-center md:justify-between space-x-0 md:space-x-8 w-full mt-8">
                    <div className="w-full md:w-[230px] border-[1px] border-[#968e8e] p-10 pt-3 pb-3 shadow-lg shadow-[#464343] transition-transform transform hover:scale-105">
                        <p className="text-[#ffffff] text-lg font-medium text-center ">Frontend</p>

                        <ul className="list-disc marker:text-[#FAAC01] ">
                            <li className="text-[#968e8e] text-md font-normal  pt-4">HTML/CSS</li>
                            <li  className="text-[#968e8e] text-md font-normal pt-4">ReactJS</li>
                            <li  className="text-[#968e8e] text-md font-normal pt-4">AngularJS</li>
                            <li  className="text-[#968e8e] text-md font-normal pt-4 pb-2">VueJS</li>
                        </ul>
                    </div>


                   <div className="w-full md:w-[230px] border-[1px] border-[#968e8e] p-10 pt-3 pb-3 mt-6 md:mt-0 shadow-lg shadow-[#464343] transition-transform transform hover:scale-105">
                        <p className="text-[#ffffff] text-lg font-medium text-center ">Frontend</p>

                        <ul className="list-disc marker:text-[#FAAC01] ">
                            <li className="text-[#968e8e] text-md font-normal  pt-4">HTML/CSS</li>
                            <li  className="text-[#968e8e] text-md font-normal pt-4">ReactJS</li>
                            <li  className="text-[#968e8e] text-md font-normal pt-4">AngularJS</li>
                            <li  className="text-[#968e8e] text-md font-normal pt-4 pb-2">VueJS</li>
                        </ul>
                    </div>

                    <div className="w-full md:w-[230px] border-[1px] border-[#968e8e] p-10 pt-3 pb-3 mt-6 md:mt-0 shadow-lg shadow-[#464343] transition-transform transform hover:scale-105">
                        <p className="text-[#ffffff] text-lg font-medium text-center ">Frontend</p>

                        <ul className="list-disc marker:text-[#FAAC01] ">
                            <li className="text-[#968e8e] text-md font-normal  pt-4">HTML/CSS</li>
                            <li  className="text-[#968e8e] text-md font-normal pt-4">ReactJS</li>
                            <li  className="text-[#968e8e] text-md font-normal pt-4">AngularJS</li>
                            <li  className="text-[#968e8e] text-md font-normal pt-4 pb-2">VueJS</li>
                        </ul>
                    </div>

                    <div className="w-full md:w-[230px] border-[1px] border-[#968e8e] p-10 pt-3 pb-3 mt-6 md:mt-0 shadow-lg shadow-[#464343] transition-transform transform hover:scale-105 " >
                        <p className="text-[#ffffff] text-lg font-medium text-center ">Frontend</p>

                        <ul className="list-disc marker:text-[#FAAC01] ">
                            <li className="text-[#968e8e] text-md font-normal  pt-4">HTML/CSS</li>
                            <li  className="text-[#968e8e] text-md font-normal pt-4">ReactJS</li>
                            <li  className="text-[#968e8e] text-md font-normal pt-4">AngularJS</li>
                            <li  className="text-[#968e8e] text-md font-normal pt-4 pb-2">VueJS</li>
                        </ul>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default TechnologiesSection;