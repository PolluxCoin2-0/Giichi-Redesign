import { HiOutlinePlus } from "react-icons/hi";

const TeamSection = () => {
    return (
        <div className="bg-purple-gradient px-4 md:px-32 pt-20 pb-20 text-center ">
            <p className="text-2xl md:text-3xl font-bold ">Team</p>
            <p className="text-4xl md:text-5xl font-bold pt-4 ">Empower Your Success With Us</p>
            <p className="text-lg font-semibold pt-4">Together Towards a Boundless Horizon of Thriving Tomorrow</p>

            <div className="flex flex-row justify-center items-center mt-12 space-x-3 md:space-x-6  ">
                <p className="bg-yellow px-2 py-2 md:px-4 md:py-4 rounded-full font-bold "><HiOutlinePlus size={32}/></p>
                <p className="text-md md:text-lg font-bold ">JOIN OUR TEAM / SQUAD</p>
            </div>

           
        </div>
    )
}

export default TeamSection;