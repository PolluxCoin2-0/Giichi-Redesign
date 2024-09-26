import TechImg  from "../../assets/tech_img.png";

const TechnologiesSection = () => {
    return (
        <div className="bg-[#000000] flex flex-col lg:flex-row items-center space-x-0 lg:space-x-12 px-4 md:px-10 lg:px-32 pt-10 lg:pt-20 pb-8">
            
            <div>
                <img src={TechImg} alt="" className="w-[300px] md:w-[400px] lg:w-[740px]" />
            </div>

            <div className="w-full">
                <p className="text-[#ffffff] text-2xl font-bold text-left pl-0">Technologies</p>
                <p  className="text-[#ffffff] text-xl md:text-4xl lg:text-5xl font-bold leading-tight pt-4">Huge Spectrum of Next-Gen Technologies Under One Roof </p>
                <p  className="text-[#ffffff] text-sm md:text-xl font-medium pt-4">Leverage our in-depth technical expertise to bring your stunning ideas to Life.</p>
                
                {/* first tech row */}
                <div className="flex flex-col md:flex-row justify-center  md:justify-between space-x-0 md:space-x-8 w-full mt-10">
                    <div className="w-full md:w-[230px] p-10 pt-3 pb-3  transition-transform transform hover:scale-105"
                      style={{
                        boxShadow: '0 2px 20px rgba(0, 0, 0, 0.4), inset 0 0 10px rgba(255, 255, 255, 0.6)', // White shadow with moderate opacity
                      }}>
                        <p className="text-[#ffffff] text-lg font-medium text-center ">Frontend</p>

                        <ul className="list-disc marker:text-[#FAAC01]  ">
                            <li className="text-[#968e8e] text-md font-normal  pt-4 ">HTML/CSS</li>
                            <li  className="text-[#968e8e] text-md font-normal pt-4">ReactJS</li> 
                            <li  className="text-[#968e8e] text-md font-normal pt-4">AngularJS</li>
                            <li  className="text-[#968e8e] text-md font-normal pt-4 pb-2">VueJS</li>

                        </ul>
                    </div>


                   <div className="w-full md:w-[230px]  p-10 pt-3 pb-3 mt-6 md:mt-0  transition-transform transform hover:scale-105"
                     style={{
                        boxShadow: '0 2px 20px rgba(0, 0, 0, 0.4), inset 0 0 10px rgba(255, 255, 255, 0.6)', // White shadow with moderate opacity
                      }}>
                        <p className="text-[#ffffff] text-lg font-medium text-center ">Frontend</p>

                        <ul className="list-disc marker:text-[#FAAC01] ">
                            <li className="text-[#968e8e] text-md font-normal  pt-4">HTML/CSS</li>
                            <li  className="text-[#968e8e] text-md font-normal pt-4">ReactJS</li>
                            <li  className="text-[#968e8e] text-md font-normal pt-4">AngularJS</li>
                            <li  className="text-[#968e8e] text-md font-normal pt-4 pb-2">VueJS</li>
                        </ul>
                    </div>

                    <div className="w-full md:w-[230px]  p-10 pt-3 pb-3 mt-6 md:mt-0  transition-transform transform hover:scale-105"
                      style={{
                        boxShadow: '0 2px 20px rgba(0, 0, 0, 0.4), inset 0 0 10px rgba(255, 255, 255, 0.6)', // White shadow with moderate opacity
                      }}>
                        <p className="text-[#ffffff] text-lg font-medium text-center ">Frontend</p>

                        <ul className="list-disc marker:text-[#FAAC01] ">
                            <li className="text-[#968e8e] text-md font-normal  pt-4">HTML/CSS</li>
                            <li  className="text-[#968e8e] text-md font-normal pt-4">ReactJS</li>
                            <li  className="text-[#968e8e] text-md font-normal pt-4">AngularJS</li>
                            <li  className="text-[#968e8e] text-md font-normal pt-4 pb-2">VueJS</li>
                        </ul>
                    </div>

                    <div className="w-full md:w-[230px]  p-10 pt-3 pb-3  mt-6 md:mt-0  transition-transform transform hover:scale-105"
                      style={{
                        boxShadow: '0 2px 20px rgba(0, 0, 0, 0.4), inset 0 0 10px rgba(255, 255, 255, 0.6)', // White shadow with moderate opacity
                      }}>
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
                    <div className="w-full md:w-[230px]  p-10 pt-3 pb-3 transition-transform transform hover:scale-105"
                      style={{
                        boxShadow: '0 2px 20px rgba(0, 0, 0, 0.4), inset 0 0 10px rgba(255, 255, 255, 0.6)', // White shadow with moderate opacity
                      }}>
                        <p className="text-[#ffffff] text-lg font-medium text-center ">Frontend</p>

                        <ul className="list-disc marker:text-[#FAAC01] ">
                            <li className="text-[#968e8e] text-md font-normal  pt-4">HTML/CSS</li>
                            <li  className="text-[#968e8e] text-md font-normal pt-4">ReactJS</li>
                            <li  className="text-[#968e8e] text-md font-normal pt-4">AngularJS</li>
                            <li  className="text-[#968e8e] text-md font-normal pt-4 pb-2">VueJS</li>
                        </ul>
                    </div>


                   <div className="w-full md:w-[230px]  p-10 pt-3 pb-3 mt-6 md:mt-0  transition-transform transform hover:scale-105"
                     style={{
                        boxShadow: '0 2px 20px rgba(0, 0, 0, 0.4), inset 0 0 10px rgba(255, 255, 255, 0.6)', // White shadow with moderate opacity
                      }}>
                        <p className="text-[#ffffff] text-lg font-medium text-center ">Frontend</p>

                        <ul className="list-disc marker:text-[#FAAC01] ">
                            <li className="text-[#968e8e] text-md font-normal  pt-4">HTML/CSS</li>
                            <li  className="text-[#968e8e] text-md font-normal pt-4">ReactJS</li>
                            <li  className="text-[#968e8e] text-md font-normal pt-4">AngularJS</li>
                            <li  className="text-[#968e8e] text-md font-normal pt-4 pb-2">VueJS</li>
                        </ul>
                    </div>

                    <div className="w-full md:w-[230px]  p-10 pt-3 pb-3 mt-6 md:mt-0 transition-transform transform hover:scale-105"
                      style={{
                        boxShadow: '0 2px 20px rgba(0, 0, 0, 0.4), inset 0 0 10px rgba(255, 255, 255, 0.6)', // White shadow with moderate opacity
                      }}>
                        <p className="text-[#ffffff] text-lg font-medium text-center ">Frontend</p>

                        <ul className="list-disc marker:text-[#FAAC01] ">
                            <li className="text-[#968e8e] text-md font-normal  pt-4">HTML/CSS</li>
                            <li  className="text-[#968e8e] text-md font-normal pt-4">ReactJS</li>
                            <li  className="text-[#968e8e] text-md font-normal pt-4">AngularJS</li>
                            <li  className="text-[#968e8e] text-md font-normal pt-4 pb-2">VueJS</li>
                        </ul>
                    </div>

                    <div className="w-full md:w-[230px]  p-10 pt-3 pb-3 mt-6 md:mt-0 transition-transform transform hover:scale-105 " 
                      style={{
                        boxShadow: '0 2px 20px rgba(0, 0, 0, 0.4), inset 0 0 10px rgba(255, 255, 255, 0.6)', // White shadow with moderate opacity
                      }}>
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