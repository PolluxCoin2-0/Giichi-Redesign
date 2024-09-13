 import GiichiLogoImg from "../assets/Giichilogo.png";
 import { CgMenuLeft } from "react-icons/cg";
 const Navbar = () =>{
    return (
        <div>
             
             {/* Navbar */}
             <div className="flex flex-row justify-between items-center px-32 pt-4 bg-[#569F42]">

                {/* Logo */}
                <img src={GiichiLogoImg} alt="" className="" />

                {/* Nav Menus */}
                 <p><CgMenuLeft size={44} /></p>

             </div>
        </div>
    )
 }


 export default Navbar;