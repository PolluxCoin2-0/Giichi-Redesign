import TechImg  from "../../assets/tech_img.png";

const TechnologiesSection = () => {
    return (
        <div className="bg-[#000000] flex flex-col xl:flex-row items-center space-x-0 xl:space-x-12 px-4 md:px-10 lg:px-12 xl:px-32 pt-10 lg:pt-20 pb-8">
            
            <div>
                <img src={TechImg} alt="" className="w-[300px] md:w-[400px] xl:w-[740px]" />
            </div>

            <div className="w-full">
                <p className="text-[#ffffff] text-2xl font-bold text-left pl-0">Technologies</p>
                <p  className="text-[#ffffff] text-xl md:text-4xl lg:text-4xl xl:text-5xl font-bold leading-tight pt-4">A Comprehensive Range of Next-Gen Technologies Under One Roof  </p>
                <p  className="text-[#ffffff] text-sm md:text-xl font-medium pt-4">Leverage our extensive technical expertise to turn your innovative ideas into reality.                </p>
                
                {/* first tech row */}
                <div className="flex flex-col md:flex-row justify-center  md:justify-between space-x-0 md:space-x-8 w-full mt-10">
                    <div className="w-full md:w-[230px] p-10 pt-3 pb-3  transition-transform transform hover:scale-105"
                      style={{
                        boxShadow: '0 2px 20px rgba(0, 0, 0, 0.4), inset 0 0 10px rgba(255, 255, 255, 0.6)', // White shadow with moderate opacity
                      }}>
                        <p className="text-[#ffffff] text-md font-medium text-center ">Frontend Development</p>

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
                        <p className="text-[#ffffff] text-lg font-medium text-center ">Backend  Development
                        </p>

                        <ul className="list-disc marker:text-[#FAAC01] ">
                            <li className="text-[#968e8e] text-md font-normal  pt-4">.NET</li>
                            <li  className="text-[#968e8e] text-md font-normal pt-4">Java
                            </li>
                            <li  className="text-[#968e8e] text-md font-normal pt-4">Python</li>
                            <li  className="text-[#968e8e] text-md font-normal pt-4 pb-2">NodeJS</li>
                        </ul>
                    </div>

                    <div className="w-full md:w-[230px]  p-10 pt-3 pb-3 mt-6 md:mt-0  transition-transform transform hover:scale-105"
                     style={{
                        boxShadow: '0 2px 20px rgba(0, 0, 0, 0.4), inset 0 0 10px rgba(255, 255, 255, 0.6)', // White shadow with moderate opacity
                      }}>
                        <p className="text-[#ffffff] text-lg font-medium text-center ">Backend  Development
                        </p>

                        <ul className="list-disc marker:text-[#FAAC01] ">
                            <li className="text-[#968e8e] text-md font-normal  pt-4">C/C++</li>
                            <li  className="text-[#968e8e] text-md font-normal pt-4">Django
                            </li>
                            <li  className="text-[#968e8e] text-md font-normal pt-4">PHP</li>
                            <li  className="text-[#968e8e] text-md font-normal pt-4 pb-2">Golang</li>
                        </ul>
                    </div>

                    <div className="w-full md:w-[230px]  p-10 pt-3 pb-3  mt-6 md:mt-0  transition-transform transform hover:scale-105"
                      style={{
                        boxShadow: '0 2px 20px rgba(0, 0, 0, 0.4), inset 0 0 10px rgba(255, 255, 255, 0.6)', // White shadow with moderate opacity
                      }}>
                        <p className="text-[#ffffff] text-md font-medium text-center ">Blockchain Solutions
                        </p>

                        <ul className="list-disc marker:text-[#FAAC01] ">
                            <li className="text-[#968e8e] text-md font-normal  pt-4">Solidity
                            </li>
                            <li  className="text-[#968e8e] text-md font-normal pt-4">Ethereum
                            </li>
                            <li  className="text-[#968e8e] text-md font-normal pt-4">Hyperledger
                            </li>
                            <li  className="text-[#968e8e] text-md font-normal pt-4 pb-2">Smart Contracts
                            </li>
                        </ul>
                    </div>

                </div>
                 

                 {/* Second Tech Row */}
                <div className="flex flex-col md:flex-row justify-center md:justify-between space-x-0 md:space-x-8 w-full mt-8">
                    <div className="w-full md:w-[230px]  p-10 pt-3 pb-3 transition-transform transform hover:scale-105"
                      style={{
                        boxShadow: '0 2px 20px rgba(0, 0, 0, 0.4), inset 0 0 10px rgba(255, 255, 255, 0.6)', // White shadow with moderate opacity
                      }}>
                        <p className="text-[#ffffff] text-md font-medium text-center ">DevOps & Machine Learning
                        </p>

                        <ul className="list-disc marker:text-[#FAAC01] ">
                            <li className="text-[#968e8e] text-md font-normal  pt-4">Azure</li>
                            <li  className="text-[#968e8e] text-md font-normal pt-4">AWS
                            </li>
                            <li  className="text-[#968e8e] text-md font-normal pt-4">TensorFlow
                            </li>
                            <li  className="text-[#968e8e] text-md font-normal pt-4 pb-2">Dialogflow
                            </li>
                        </ul>
                    </div>


                   <div className="w-full md:w-[230px]  p-10 pt-3 pb-3 mt-6 md:mt-0  transition-transform transform hover:scale-105"
                     style={{
                        boxShadow: '0 2px 20px rgba(0, 0, 0, 0.4), inset 0 0 10px rgba(255, 255, 255, 0.6)', // White shadow with moderate opacity
                      }}>
                        <p className="text-[#ffffff] text-md font-medium text-center ">Full Stack Development
                        </p>

                        <ul className="list-disc marker:text-[#FAAC01] ">
                            <li className="text-[#968e8e] text-md font-normal  pt-4">MEAN Stack
                            </li>
                            <li  className="text-[#968e8e] text-md font-normal pt-4">MERN Stack
                            </li>
                            <li  className="text-[#968e8e] text-md font-normal pt-4">JavaScript
                            </li>
                            <li  className="text-[#968e8e] text-md font-normal pt-4 pb-2">Python</li>
                        </ul>
                    </div>

                    <div className="w-full md:w-[230px]  p-10 pt-3 pb-3 mt-6 md:mt-0  transition-transform transform hover:scale-105"
                      style={{
                        boxShadow: '0 2px 20px rgba(0, 0, 0, 0.4), inset 0 0 10px rgba(255, 255, 255, 0.6)', // White shadow with moderate opacity
                      }}>
                        <p className="text-[#ffffff] text-md font-medium text-center ">Mobile Development                        </p>

                        <ul className="list-disc marker:text-[#FAAC01] ">
                            <li className="text-[#968e8e] text-md font-normal  pt-4">Android/Kotlin                            </li>
                            <li  className="text-[#968e8e] text-md font-normal pt-4">iOS/Swift
                            </li>
                            <li  className="text-[#968e8e] text-md font-normal pt-4">React Native
                            </li>
                            <li  className="text-[#968e8e] text-md font-normal pt-4 pb-2">React Native
                            </li>
                        </ul>
                    </div>

                    <div className="w-full md:w-[230px]  p-10 pt-3 pb-3 mt-6 md:mt-0 transition-transform transform hover:scale-105 " 
                      style={{
                        boxShadow: '0 2px 20px rgba(0, 0, 0, 0.4), inset 0 0 10px rgba(255, 255, 255, 0.6)', // White shadow with moderate opacity
                      }}>
                        <p className="text-[#ffffff] text-md font-medium text-center ">E-commerce & CMS
                        </p>

                        <ul className="list-disc marker:text-[#FAAC01] ">
                            <li className="text-[#968e8e] text-md font-normal  pt-4">WordPress
                            </li>
                            <li  className="text-[#968e8e] text-md font-normal pt-4">Drupal
                            </li>
                            <li  className="text-[#968e8e] text-md font-normal pt-4">Magento
                            </li>
                            <li  className="text-[#968e8e] text-md font-normal pt-4 pb-2">Shopify
                            </li>
                        </ul>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default TechnologiesSection;