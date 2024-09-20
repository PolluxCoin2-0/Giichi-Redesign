import { FaAccusoft, FaAffiliatetheme, FaAlgolia, FaAngellist, FaAward, FaBabyCarriage } from "react-icons/fa6";
import { IoPerson } from "react-icons/io5";
import { IoStarSharp } from "react-icons/io5";

const TestimonialsSection = () => {
  return (
    <div className="bg-[#000000] flex flex-row  justify-center px-64 pt-24 pb-32">
      <div>
        <p className="text-[#ffffff] text-4xl font-semibold">Testimonials</p>
        <p className="text-[#ffffff] text-6xl font-bold pt-8 leading-tight">
          Tales of Triumph from <br /> Our Happy Clients
        </p>
        <p className="text-[#ffffff] text-xl font-semibold pt-5">
          Discover the journey of our valued clients from vision to victory and join <br />
          the success parade.
        </p>

        <div
          className="bg-[#121212] mt-5 w-[1000px] flex flex-col justify-center items-center text-center pb-20 border-[1px] border-[#868585] "
          style={{
            boxShadow: '0 2px 20px rgba(0, 0, 0, 0.4), inset 0 0 10px rgba(255, 255, 255, 0.6)', // White shadow with moderate opacity
          }}
        >
          <p className="text-[#ffffff] w-[1000px] text-md leading-8 pt-24 ">
            The services you offer are a broad range of services. All of your services complement each other really well and the <br />
            team has been brilliant. You know they get back to us very quickly with our issues and have a lot of knowledge and <br />
            expertise around react and usability. Its nice to come to an organization like Maticz. Good opportunity for the <br />
            businesses to start your project with Maticz.
          </p>

          <p className="mt-5 bg-[#EBBF0E] rounded-full px-6 py-6">
            <IoPerson size={52} />
          </p>
          <p className="mt-5 text-[#ffffff] text-xl font-semibold">Durgesh Yadav</p>
          <div className="mt-5 flex flex-row space-x-2 text-[#EBBF0E]">
            <IoStarSharp size={24} />
            <IoStarSharp size={24} />
            <IoStarSharp size={24} />
            <IoStarSharp size={24} />
            <IoStarSharp size={24} />
          </div>
        </div>
      </div>
         
      <div className="bg-[#ffffff] w-[20%] relative flex flex-col justify-around items-center"> 
      
      <div className="flex flex-row space-x-2 items-center">
      <p className="flex justify-center text-[#B62FFD]"><FaAlgolia  size={24}/></p> 
      <p className="text-2xl font-bold pt-2">AUDIOSWIM</p>
      </div>

      <div className="flex flex-row space-x-2 items-center">
      <p className="flex justify-center text-[#7695FF]"><FaAffiliatetheme  size={28}/> </p>
      <p className="text-2xl font-bold pt-2">CLICKB</p>
      </div>


      <div className="flex flex-row space-x-2 items-center">
      <p className="flex justify-center text-[#6F42C1]"><FaAngellist  size={28} /> </p>
      <p className="text-2xl font-bold pt-2 ">L BANK</p>
      </div>

      <div className="flex flex-row space-x-2 items-center">
      <p className="flex justify-center text-[#FD7E14]"><FaAccusoft  size={28} /> </p> 
      <p className="text-2xl font-bold pt-2 ">SMART BBN</p>
      </div>

      <div className="flex flex-row space-x-2 items-center">
      <p className="flex justify-center text-[#7695FF]"><FaAward  size={28} /> </p>
      <p className="text-2xl font-bold pt-2 ">FINANCIO</p>
      </div>

      <div className="flex flex-row space-x-2 items-center pb-5">
      <p className="flex justify-center text-[#B62FFD]"><FaBabyCarriage size={28}/> </p>
      <p className="text-2xl font-bold pt-2 ">METAVERSE</p>
      </div>
  <div className="bg-orange w-full absolute bottom-[-40px] h-[70px] text-xl font-bold text-center pt-6">View Testimonials</div>
</div>


      
    </div>
  );
};

export default TestimonialsSection;
