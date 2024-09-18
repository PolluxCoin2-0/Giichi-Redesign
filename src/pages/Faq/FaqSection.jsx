import { LuPlus } from "react-icons/lu";

const FaqSection = () => {
    return (
        <div className="bg-[#F7B611] px-32 pt-20 pb-20">
          <p className="text-3xl font-bold ">FAQ</p>
          <p className="text-5xl font-bold text-[#ffffff] mt-4 leading-tight">Solve the un-solved queries on <br/>your mind</p>
          <p className="text-lg font-semibold text-[#ffffff] m t-4">Connect with our experts for detailed technical consultation.</p>

         <div className="bg-[#F5C34A] w-[70%] mt-10 p-4 rounded-md"
          style={{
            boxShadow: '0 2px 20px rgba(0, 0, 0, 0.4), inset 0 0 10px rgba(255, 255, 255, 0.6)', // White shadow with moderate opacity
          }}>
              <div className="flex flex-row justify-between items-center p-6 text-[#3f310f] ">
                <p className="text-md font-medium">Why should I choose Giichi for software consulting and development?</p>
              <LuPlus />
              </div>

              <div className="flex flex-row justify-between items-center p-6 text-[#3f310f] ">
                <p className="text-md font-medium">Why should I choose Giichi for software consulting and development?</p>
              <LuPlus />
              </div>


              <div className="flex flex-row justify-between items-center p-6 text-[#3f310f] ">
                <p className="text-md font-medium">Why should I choose Giichi for software consulting and development?</p>
              <LuPlus />
              </div>

              <div className="flex flex-row justify-between items-center p-6 text-[#3f310f] ">
                <p className="text-md font-medium">Why should I choose Giichi for software consulting and development?</p>
              <LuPlus />
              </div>

              
         </div>
        </div>
    )
}

export default FaqSection;