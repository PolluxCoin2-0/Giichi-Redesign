const WebPage = () => {
  return (
    <div className=" bg-[#E6E5E6] p-4 md:p-6 lg:p-8 xl:p-12 flex flex-col justify-center gap-4 pb-8 md:pb-5 mb-0 ">
      <p className="text-2xl md:text-3xl font-bold mt-5 md:mt-0">Web Development</p>
      <p className="text-md md:text-md lg:text-lg  font-medium  leading-7">
      Your website is a vital tool in setting your business apart from competitors. At Giichi, we design visually striking and user-friendly websites that enhance your online identity and leave a lasting impression.

      </p>

      <div className="flex flex-col lg:flex-row justify-between space-x-0 lg:space-x-4 w-full mt-5 md:mt-2 lg:mt-5">
        <div className="w-full lg:w-[50%] p-4 bg-[#F7FBFE]  shadow-lg rounded-lg ">
          <p className="text-lg lg:text-xl font-semibold">Custom Web Development</p>
          <p className="text-md md:text-sm lg:text-lg  font-normal pt-2 leading-8">
          Elevate your business with our expertise in developing custom, responsive websites. 
          Our tailored solutions are designed to optimize key aspects of your operations, 
          driving growth and efficiency.

          </p>
        </div>

        <div className=" w-full lg:w-[50%] mt-8 lg:mt-0 p-4 bg-[#F7FBFE] shadow-lg  rounded-lg ">
          <p className="text-lg lg:text-xl font-semibold">Web UI/UX Development</p>
          <p className="text-md md:text-sm lg:text-lg  font-normal  pt-2 leading-8">
          Fuel your business growth with conversion-driven websites that combine 
          eye-catching designs, easy navigation, and seamless interfaces, 
          delivering outstanding customer experiences every time.

          </p>
        </div>
      </div>

      <div className="w-full  mt-5 p-4 bg-[#F7FBFE] shadow-lg  rounded-lg ">
        <p className="text-lg lg:text-xl font-semibold">Web App Development</p>
        <p className="text-md md:text-sm lg:text-lg  font-normal  pt-2 leading-8">
        Transform your business with our advanced, interactive, and user-centric 
        web applications. Our custom solutions and smooth integrations boost your
         business operations, ensuring long-term success in the digital realm.

        </p>
      </div>

      <div className="flex flex-col lg:flex-row justify-between space-x-0 lg:space-x-4 w-full mt-5 md:mt-2 lg:mt-5">
        <div className=" w-full lg:w-[50%] p-4 bg-[#F7FBFE]  shadow-lg rounded-lg ">
          <p className="text-lg lg:text-xl font-semibold">CMS Development</p>
          <p className="text-md md:text-sm lg:text-lg  font-normal  pt-2 leading-8">
          Gain complete control over your website’s content with our CMS development
           services. We help you manage and organize your digital content effortlessly,
            empowering you to maintain a strong and effective online presence.

          </p>
        </div>

        <div className="w-full lg:w-[50%] mt-8 lg:mt-0 p-4 bg-[#F7FBFE]  shadow-lg rounded-lg ">
          <p className="text-lg lg:text-xl font-semibold">E- Commerce Web Development</p>
          <p className="text-lg md:text-xs lg:text-lg font-normal  pt-2 leading-8">
          Expand your reach with e-commerce solutions designed specifically 
          for your business. Our e-commerce web development blends cutting-edge
           technology with intuitive designs to create powerful digital storefronts
            that drive conversions and sales.

          </p>
        </div>
      </div>
    </div>
  );
};

export default WebPage;
