  import Navbar from "../../layout/Navbar";
  import HeroImg from "../../assets/banner_img_home.png";

  const HeroSection = () => {
     return (
        <div>
              {/* Navabar  */}
              <div>
                <Navbar />
              </div>

              {/* Hero-section */}
              <div className="flex flex-row justify-between items-center px-32 bg-[#569F42] h-screen">

                <div>
                   <p className="text-6xl font-bold -mt-80 text-[#ffff] leading-tight">Modernizing and <br/>Transforming Businesses <br/> Digitally To Move Forward</p>
                   <p className="mt-4 text-xl font-medium leading-8">Embrace our visionary software development services to navigate the ever- <br/>
                   changing business landscape. We help you stay ahead of industry trends to <br/>
                   secure your market dominance and achieve unrivaled success.</p>
                    <button className="bg-[#000000] text-[#ffff] mt-7 px-10 py-2 button">
                       Talk to Experts
                   </button>
                </div>

                <div>
                      <img src={HeroImg} alt="hero-image" className="" />
                </div> 
              </div>
        </div>
     )
  }

  export default  HeroSection;