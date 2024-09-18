import HeroImg from "../../assets/banner_img_home.png";
// import Timeline from "../../comopnents/Timeline";
const OpportunitySection = () => {
    return (
        <div className="bg-[#000000] px-32 pt-20 pb-20 flex flex-row justify-between w-full">

            <div className="w-[40%]">
                <p className="text-7xl text-[#ffffff] font-bold leading-tight">WHY CHOOSE <br/> US?</p>
                
          <img src={HeroImg} alt="hero-image" className="w-[600px]" />
        
            </div>

            <div className="w-[60%]">
                <p className="text-5xl text-[#ffffff] font-bold leading-tight  ">Maximizing Opportunities for <br/>Businesses with Our Values</p>

                <p className="text-md text-[#a8a5a5] mt-4   ">Maticz is your one-stop solution for all your software development demands and requirements. From concept ideation to <br/>
                post-launch support, our comprehensive services cover every stage of the software lifecycle. With a proven track record of <br/>
                delivering exceptional solutions, we have garnered a reputation as a leading force in the industry. We value your feedback <br/>and 
                work collaboratively with you to address any concerns, ensuring that the final product is precisely what you envision.</p>
                <p className="text-md text-[#a8a5a5] mt-4  ">Our tailored approach ensures that we understand your specific requirements and 
                deliver results that exceed expectations. <br/> Our team consists of seasoned professionals and creative minds who thrive on pushing the boundaries of technology, and <br/>
                bring fresh perspectives and ingenious solutions to every project. We keep you involved at every stage, providing transparent <br/>
                communication and delivering on time and within budget.</p>

             
           
            </div>


         
        </div>
    )
}

export default OpportunitySection;