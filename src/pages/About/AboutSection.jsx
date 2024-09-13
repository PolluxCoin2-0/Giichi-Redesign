import HeroImg from '../../assets/banner_img_home.png';

const AboutSection = () => {
    return (
          <div className="px-32 relative " >
            
            <div className=" flex flex-row justify-between items-center mt-10 w-full">

            <div className=" w-[30%] ">
            <p className="text-2xl font-bold">Award Winning</p>
            <p className="text-5xl font-bold leading-tight mt-8 ">Software Development <br/> Company</p>
            <img src={HeroImg} alt="" className="" />
            </div>


            <div className="w-[50%] ">
                <p className="text-xl font-semibold">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Amet ipsa atque repellendus <br/> aperiam ipsam veritatis 
                doloribus ipsum deserunt beatae, accusamus omnis incidunt? Suscipit <br/>fuga saepe odio doloremque, 
                minus nihil asperiores, eos nisi ratione velit a!</p>
                <p className="text-xl font-semibold mt-4">Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique, alias. <br/>Aliquam, harum fugiat! 
                 Praesentium minus accusamus nesciunt qui voluptatem <br/>illo nisi beatae similique, debitis sequi!</p>
                
                <div className="flex flex-row justify-between space-x-6 mt-10">
                    <div className="bg-[#ffffff] w-[50%] py-3 rounded-md shadow-md hover:bg-[#FBC901] p-4">Years of Expertise</div>
                    <div className="bg-[#ffffff]  w-[50%] py-3 rounded-md shadow-md hover:bg-[#FBC901] p-4">In-House Professionals</div>
                </div>

                <div className="flex flex-row justify-between space-x-6 mt-4">
                    <div className="bg-[#ffffff]  w-[50%] py-3 rounded-md shadow-md hover:bg-[#FBC901] p-4">Years of Expertise</div>
                    <div className="bg-[#ffffff]  w-[50%] py-3 rounded-md shadow-md  hover:bg-[#FBC901] p-4">In-House Professionals</div>
                </div>
            </div>
            </div>
                 

            <div className="border-2 -mt-32"></div>
               <div className="absolute -bottom-16 left-0 flex justify-end w-full px-32 ">
              
               <div className="bg-[#569F42] flex flex-row justify-between p-6 w-[80%] rounded-tr-xl rounded-tl-xl rounded-bl-xl rounded-br-[60px] ">
               
                <div className="w-[32%] text-center">
                  <p className="text-3xl text-[#ffffff] font-bold border-r-2">50+ <br/> <span className="text-lg">Countries</span></p>
                </div>

                <div className="w-[32%] text-center ">
                   <p className="text-3xl text-[#ffffff] font-bold  border-r-2">50+ <br/> <span className="text-lg">Countries</span></p>
                </div>

                <div className="w-[32%] text-center ">
                <p className="text-3xl text-[#ffffff] font-bold">50+ <br/> <span className="text-lg">Countries</span></p>
                </div>
             </div>
               </div>
            
          </div>
    )
}

export default AboutSection;