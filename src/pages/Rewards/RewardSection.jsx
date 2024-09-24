import AwardImg from "../../assets/award_1.png";

const RewardsSection = () => {
    return (
        <div className="bg-purple-gradient px-4 md:px-32 pt-8 pb-8 md:pt-20 md:pb-20 text-center ">
           <p className="text-xl md:text-3xl font-bold ">Rewards</p>
           <p className="text-2xl md:text-5xl font-bold mt-4">Rewards and Recognitions</p>
           <p className="text-md md:text-lg font-semibold mt-4">Celebrating a Symphony of Success with our Rewards of Excellence and Recognitions that Spark Off</p>


           <div className="flex flex-col md:flex-row justify-between mt-4 md:mt-16 w-full px-32">
            
            <div className="flex flex-row space-x-24">
            <p className=" p-5 "> <img src={AwardImg} alt="" className="w-56" /></p>
            <p className="  p-5 "><img src={AwardImg} alt="" className="w-56" /></p>
            </div>
          
          <div className="flex flex-row space-x-24">
          <p className=" p-5 "><img src={AwardImg} alt="" className="w-56" /></p>
          <p className="  p-5 "><img src={AwardImg} alt="" className="w-56" /></p>
          </div>
          
           </div>
        </div>
    )
}

export default RewardsSection;