const SoftwarePage = () => {
  return (
    <div className=" bg-[#E6E5E6] p-4 md:p-6 lg:p-8 xl:p-12 flex flex-col justify-center gap-4 mb-0  ">
      <p className="text-2xl md:text-3xl lg:text-3xl font-bold mt-5 md:mt-0">Software Development</p>
      <p className="text-md md:text-lg font-medium leading-7">
      We provide robust and future-ready software development solutions for
      businesses and startups. Leverage our technical expertise to create
      tailor-made software that perfectly aligns with your business needs.
      </p>
    


      <div className="flex flex-col lg:flex-row justify-between space-x-0 lg:space-x-4 w-full mt-5 md:mt-2 lg:mt-5">
        <div className=" w-full lg:w-[50%] p-4 bg-[#F7FBFE]  shadow-lg rounded-lg ">
          <p className="text-lg lg:text-xl font-semibold">Customer Software Development</p>
          <p className="text-md md:text-sm lg:text-lg font-normal pt-2 leading-8">
          
            Elevate your digital business with our custom software  
            solutions,  designed to meet your specific requirements 
            and drive 
            the outcomes you desire.

          </p>
        </div>

        <div className="w-full lg:w-[50%] mt-8 lg:mt-0 p-4 bg-[#F7FBFE] shadow-lg  rounded-lg ">
          <p className="text-lg lg:text-xl font-semibold">
            Software Development Outsourcing
          </p>
          <p className="text-md  md:text-sm lg:text-lg font-normal  pt-2 leading-8">
          Unlock new opportunities with our software outsourcing services,
           delivered by skilled global professionals. Accelerate your projects 
           and resolve complex challenges with ease.

          </p>
        </div>
      </div>

      <div className="w-full  mt-5 p-4 bg-[#F7FBFE] shadow-lg  rounded-lg ">
        <p className="text-lg lg:text-xl font-semibold">Enterprise Software Development</p>
        <p className="text-md  md:text-sm lg:text-lg font-normal  pt-2 leading-8">
        Enhance your business productivity and streamline operations with 
        our high-performance enterprise software solutions. From API integration 
        to legacy software modernization, we help you achieve global success with 
        increased trust, transparency, and security.

        </p>
      </div>

      <div className="flex flex-col lg:flex-row justify-between space-x-0 lg:space-x-4 w-full mt-5">
        <div className="w-full lg:w-[50%] p-4 bg-[#F7FBFE]  shadow-lg rounded-lg ">
          <p className="text-lg lg:text-xl font-semibold">Software Product Development</p>
          <p className="text-md  md:text-sm lg:text-lg font-normal  pt-2 leading-8">
        
Develop groundbreaking software products with our comprehensive, end-to-end
 solutions and agile methodology. Our tailored approach equips you with the
  tools and expertise needed to gain a competitive edge.

          </p>
        </div>

        <div className=" w-full lg:w-[50%] mt-8 lg:mt-0 p-4 bg-[#F7FBFE]  shadow-lg rounded-lg ">
          <p className="text-lg lg:text-xl font-semibold">Software Consulting Service</p>
          <p className="text-md  md:text-sm lg:text-lg font-normal  pt-2 leading-8">
          Embark on a digital transformation with our Software Consulting Services. 
          Our expert consultants craft personalized solutions to drive innovation
           and deliver measurable business results.


          </p>
        </div>
      </div>
    </div>
  );
};

export default SoftwarePage;
