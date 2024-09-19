import AwardImg from "../../assets/award_1.png";

const RewardsSection = () => {
    return (
        <div className="bg-purple-gradient px-32 pt-20 pb-20 text-center ">
           <p className="text-3xl font-bold ">Rewards</p>
           <p className="text-5xl font-bold mt-4">Rewards and Recognitions</p>
           <p className="text-lg font-semibold mt-4">Celebrating a Symphony of Success with our Rewards of Excellence and Recognitions that Spark Off</p>


           <div className="flex flex-row justify-between mt-16 w-full px-32"
           >
            <p className=" p-5 ">
                <img src={AwardImg} alt="" className="w-56" />
            </p>
            <p className="  p-5 "><img src={AwardImg} alt="" className="w-56" /></p>
            <p className=" p-5 "><img src={AwardImg} alt="" className="w-56" /></p>
            <p className="  p-5 "><img src={AwardImg} alt="" className="w-56" /></p>
           </div>
        </div>
    )
}

export default RewardsSection;