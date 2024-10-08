import HeroImg from "../../assets/banner_img_home.png";

const AboutSection = () => {
  return (
    <div className="px-4 md:px-10 lg:px-12 xl:px-32 relative -mb-20 md:mb-0">
      <div className=" flex flex-col md:flex-col lg:flex-row justify-between items-start md:items-center mt-10 w-full">
        <div className=" w-full lg:w-[40%] ">
          <p className="text-xl md:text-2xl font-bold">Award Winning</p>
          <p className=" block md:hidden lg:hidden xl:block text-3xl md:text-4xl lg:text-4xl xl:text-5xl font-bold leading-tight mt-4 md:mt-8 ">
            Software Development <br /> Company
          </p>

          <p className="hidden md:block lg:block xl:hidden text-3xl md:text-4xl lg:text-3xl xl:text-5xl font-bold leading-tight mt-4 md:mt-8 ">
            Software Development  Company
          </p>
          <div className="flex justify-center lg:justify-normal">
          <img src={HeroImg} alt="" className="md:w-[400px] lg:w-[1200px] w-full " />
          </div>
         
        </div>

        <div className="w-full lg:w-[50%] ">
          <p className="text-md lg:text-md xl:text-xl font-semibold">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Amet ipsa
            atque repellendus <br /> aperiam ipsam veritatis doloribus ipsum
            deserunt beatae, accusamus omnis incidunt? Suscipit <br />
            fuga saepe odio doloremque, minus nihil asperiores, eos nisi ratione
            velit a!
          </p>
          <p className="text-md  lg:text-md xl:text-xl  font-semibold mt-4">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique,
            alias. <br />
            Aliquam, harum fugiat! Praesentium minus accusamus nesciunt qui
            voluptatem <br />
            illo nisi beatae similique, debitis sequi!
          </p>

          <div className="flex flex-col md:flex-row justify-between space-y-6 md:space-y-0 space-x-0 md:space-x-6 mt-10">
            <div className="bg-[#ffffff] w-full md:w-[50%] py-3 rounded-md shadow-md hover:bg-[#FBC901] p-4">
              Years of Expertise
            </div>
            <div className="bg-[#ffffff]  w-full md:w-[50%] py-3 rounded-md shadow-md hover:bg-[#FBC901] p-4">
              In-House Professionals
            </div>
          </div>

          <div className="flex flex-col md:flex-row justify-between space-y-6 md:space-y-0 space-x-0 md:space-x-6 mt-4">
            <div className="bg-[#ffffff]  w-full md:w-[50%] py-3 rounded-md shadow-md hover:bg-[#FBC901] p-4">
              Years of Expertise
            </div>
            <div className="bg-[#ffffff] w-full md:w-[50%] py-3 rounded-md shadow-md  hover:bg-[#FBC901] p-4">
              In-House Professionals
            </div>
          </div>
        </div>
      </div>

      <div className="lg:border-2  md:mt-48 lg:mt-12 xl:-mt-32"></div>
      <div className="relative md:absolute md:-bottom-36 lg:-bottom-16 md:left-0 flex justify-center md:justify-end w-full px-0 md:px-10 lg:px-12 xl:px-32 mt-10 md:mt-0">
  <div className="bg-[#569F42] flex flex-col md:flex-row justify-between p-6 w-full xl:w-[80%] rounded-tr-xl rounded-tl-xl rounded-bl-xl rounded-br-[60px]">
    <div className="w-full md:w-[32%] text-center mb-6 md:mb-0">
      <p className="text-3xl text-[#ffffff] font-bold md:border-r-2">
        50+ <br /> <span className="text-lg">Countries</span>
      </p>
    </div>

    <div className="w-full md:w-[32%] text-center mb-6 md:mb-0">
      <p className="text-3xl text-[#ffffff] font-bold md:border-r-2">
        50+ <br /> <span className="text-lg">Countries</span>
      </p>
    </div>

    <div className="w-full md:w-[32%] text-center">
      <p className="text-3xl text-[#ffffff] font-bold">
        50+ <br /> <span className="text-lg">Countries</span>
      </p>
    </div>
  </div>
</div>

    </div>
  );
};

export default AboutSection;
