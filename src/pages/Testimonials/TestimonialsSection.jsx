import { useState } from "react";
// import {
//   FaAccusoft,
//   FaAffiliatetheme,
//   FaAlgolia,
//   FaAngellist,
//   FaAward,
//   FaBabyCarriage,
// } from "react-icons/fa6";
import { IoPerson } from "react-icons/io5";
import { IoStarSharp } from "react-icons/io5";

const TestimonialsSection = () => {
  const [bgPosition, setBgPosition] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e) => {
    const { clientX, clientY } = e;
    const { left, top } = e.currentTarget.getBoundingClientRect();
    const x = clientX - left;
    const y = clientY - top;
    setBgPosition({ x, y });
  };

  return (
    <div className="bg-[#000000] flex flex-col lg:flex-row  justify-center px-4 md:px-10 lg:px-32 xl:px-40 pt-24 md:pt-12 lg:pt-24 pb-32">
      <div>
        <p className="text-[#ffffff] text-3xl lg:text-4xl font-semibold">
          Testimonials
        </p>
        <p className="block md:hidden lg:block text-[#ffffff] text-3xl md:text-4xl lg:text-4xl xl:text-6xl font-bold pt-8 leading-tight">
          Tales of Triumph from <br /> Our Happy Clients
        </p>

        <p className="hidden md:block lg:hidden text-[#ffffff] text-3xl md:text-4xl lg:text-6xl font-bold pt-8 leading-tight">
          Tales of Triumph from Our Happy Clients
        </p>
        <p className="text-[#ffffff] text-lg md:text-xl font-semibold pt-5">
          Discover the journey of our valued clients from vision to victory and
          join <br />
          the success parade.
        </p>

        

        <div
          className="bg-[#121212] mt-5 w-full lg:w-[800px] xl:w-[1200px] flex flex-col justify-center items-center text-center pb-10 md:pb-20 border-[1px] border-[#868585] relative overflow-hidden"
          style={{
            boxShadow:
              "0 2px 20px rgba(0, 0, 0, 0.4), inset 0 0 10px rgba(255, 255, 255, 0.6)", // White shadow with moderate opacity
            background: `radial-gradient(circle at ${bgPosition.x}px ${bgPosition.y}px, rgba(235, 191, 14, 0.7), transparent)`, // Moving background effect
          }}
          onMouseMove={handleMouseMove}
        >
          <p className="block md:hidden lg:block text-[#ffffff] w-full lg:w-[1000px] text-sm md:text-md leading-8 pt-10 md:pt-24 p-2 md:p-10">
            The services you offer are a broad range of services. All of your
            services complement each other really well and the <br />
            team has been brilliant. You know they get back to us very quickly
            with our issues and have a lot of knowledge and <br />
            expertise around react and usability. Its nice to come to an
            organization like Maticz. Good opportunity for the <br />
            businesses to start your project with Maticz.
          </p>

          <p className="hidden md:block lg:hidden text-[#ffffff] w-full lg:w-[1000px] text-sm md:text-md leading-8 pt-10 md:pt-16 lg:pt-24 p-2 md:p-6 lg:p-10">
            The services you offer are a broad range of services. All of your
            services complement each other <br /> really well and the team has
            been brilliant. You know they get back to us very quickly with our{" "}
            <br /> issues and have a lot of knowledge and expertise around react
            and usability. Its nice to come to <br /> an organization like
            Maticz. Good opportunity for the businesses to start your project
            with Maticz.
          </p>

          <p className="mt-2 md:mt-0 lg:mt-5 bg-[#EBBF0E] rounded-full px-3 py-3 md:px-6 md:py-6">
            <IoPerson size={52} />
          </p>
          <p className="mt-2 md:mt-5 text-[#ffffff] text-lg md:text-xl font-semibold">
            Durgesh Yadav
          </p>
          <div className="mt-2 md:mt-5 flex flex-row space-x-2 text-[#EBBF0E]">
            <IoStarSharp size={24} />
            <IoStarSharp size={24} />
            <IoStarSharp size={24} />
            <IoStarSharp size={24} />
            <IoStarSharp size={24} />
          </div>
          {/* Add an overlay for the blur effect */}
          <div
            className="absolute inset-0 blur-[100px] -z-10"
            style={{ pointerEvents: "none" }}
          />
        </div>
      </div>

      {/* <div className="bg-[#ffffff] w-full xl:w-[20%] relative flex flex-col justify-around items-center mt-6 lg:mt-0">
        <div className="flex flex-row space-x-2 items-center mt-4 lg:mt-0">
          <p className="flex justify-center text-[#B62FFD]">
            <FaAlgolia size={24} />
          </p>
          <p className="text-xl md:text-2xl lg:text-xl xl:text-2xl font-bold pt-2">
            AUDIOSWIM
          </p>
        </div>

        <div className="flex flex-row space-x-2 items-center mt-4 lg:mt-0">
          <p className="flex justify-center text-[#7695FF]">
            <FaAffiliatetheme size={28} />{" "}
          </p>
          <p className="text-xl md:text-2xl font-bold pt-2">CLICKB</p>
        </div>

        <div className="flex flex-row space-x-2 items-center mt-4 lg:mt-0">
          <p className="flex justify-center text-[#6F42C1]">
            <FaAngellist size={28} />{" "}
          </p>
          <p className="text-xl md:text-2xl lg:text-xl xl:text-2xl font-bold pt-2 ">
            L BANK
          </p>
        </div>

        <div className="flex flex-row space-x-2 items-center mt-4 lg:mt-0">
          <p className="flex justify-center text-[#FD7E14]">
            <FaAccusoft size={28} />{" "}
          </p>
          <p className="text-xl md:text-2xl lg:text-xl xl:text-2xl font-bold pt-2 ">
            SMART BBN
          </p>
        </div>

        <div className="flex flex-row space-x-2 items-center mt-4 lg:mt-0">
          <p className="flex justify-center text-[#7695FF]">
            <FaAward size={28} />{" "}
          </p>
          <p className="text-xl md:text-2xl lg:text-xl xl:text-2xl font-bold pt-2 ">
            FINANCIO
          </p>
        </div>

        <div className="flex flex-row space-x-2 items-center pb-16 lg:pb-5 mt-4 lg:mt-0">
          <p className="flex justify-center text-[#B62FFD]">
            <FaBabyCarriage size={28} />{" "}
          </p>
          <p className="text-xl md:text-2xl lg:text-xl xl:text-2xl font-bold pt-2 ">
            METAVERSE
          </p>
        </div>
        <div className="bg-orange w-full absolute bottom-[-40px] h-[70px] text-xl font-bold text-center pt-6">
          View Testimonials
        </div>
      </div> */}
    </div>
  );
};

export default TestimonialsSection;
