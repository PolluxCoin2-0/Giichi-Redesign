import { useState } from "react";
import TechImg from "../../assets/tech_img.png";
import { FaTelegramPlane } from "react-icons/fa";
import { FaDiscord } from "react-icons/fa6";
import { RiWhatsappFill } from "react-icons/ri";
import { MdEmail } from "react-icons/md";

const ContactFormSection = () => {
  // States to hold the input values
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phoneNumber: "",
    country: "",
    whatsappNumber: "",
    comment: "",
  });

  // Handle input change for each field
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    // Perform form submission logic (e.g., sending data to a server)
    console.log("Form Data Submitted:", formData);
    // Reset the form after submission
    setFormData({
      name: "",
      email: "",
      phoneNumber: "",
      country: "",
      whatsappNumber: "",
      comment: "",
    });
  };

  return (
    <div className="bg-[#000000] flex flex-col items-center  pb-20">

        {/* Form Section */}
      <div className="w-[60%] bg-[#ffffff] -mt-32 relative pb-20 ">
        {" "}
        {/* Added relative positioning */}
        <div className="flex flex-row justify-between">
          <p className="text-4xl font-bold p-16 text-[#3f310f]">Contact Us</p>
          <div className="relative">
            {/* Apply absolute positioning to the image */}
            <img
              src={TechImg}
              alt=""
              className="w-80 -mt-20  " // Adjust top and right overlap
            />
          </div>
        </div>
        <p className="pl-16 -mt-16 text-md font-medium text-[#3f310f]">
          We’re excited to hear about your project. Schedule a call today and
          Connect with our experts. <br />
          At Giichi, We respect your privacy and Never share your details with
          anyone. Lets build together.
        </p>
        {/* form */}
        <div className="p-10 ">
          <form onSubmit={handleSubmit} className=" px-8 pt-6 mb-4">
            <div className="flex flex-row justify-between w-full">
              <div className="flex flex-col w-[40%]">
                {/* Name */}
                <div className="mb-4">
                  <input
                    type="text"
                    name="name"
                    id="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Name"
                    className="w-full px-2 py-3 border-b-[1px] border-[#999488] focus:outline-none focus:border-b-[#000000] placeholder-[#999488] "
                    required
                  />
                </div>

                {/* Email */}
                <div className="mb-4 pt-4">
                  <input
                    type="email"
                    name="email"
                    id="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="Email"
                    className="w-full px-2 py-3 border-b-[1px] border-[#999488] focus:outline-none focus:border-b-[#000000] placeholder-[#999488]"
                    required
                  />
                </div>

                {/* Comment */}
                <div className="mb-4 pt-4">
                  <textarea
                    name="comment"
                    id="comment"
                    value={formData.comment}
                    onChange={handleChange}
                    placeholder="Comment"
                    className="w-full px-2 py-3 border-b-[1px] border-[#999488] focus:outline-none focus:border-b-[#000000] placeholder-[#999488] resize-none"
                    rows="3"
                    required
                  />
                </div>
              </div>

              <div className="flex flex-col w-[40%]">
                {/*Phone Number */}
                <div className="mb-4">
                  <input
                    type="tel"
                    name="phoneNumber"
                    id="phoneNumber"
                    value={formData.phoneNumber}
                    onChange={handleChange}
                    placeholder="Phone Number"
                    className="w-full px-2 py-3 border-b-[1px] border-[#999488] focus:outline-none focus:border-b-[#000000] placeholder-[#999488]"
                    required
                  />
                </div>

                {/* Country */}
                <div className="mb-4 pt-4">
                  <input
                    type="text"
                    name="country"
                    id="country"
                    value={formData.country}
                    onChange={handleChange}
                    placeholder="Country"
                    className="w-full px-2 py-3 border-b-[1px] border-[#999488] focus:outline-none focus:border-b-[#000000] placeholder-[#999488]"
                    required
                  />
                </div>

                {/* WhatsApp Number */}
                <div className="mb-4 pt-4">
                  <input
                    type="tel"
                    name="whatsappNumber"
                    id="whatsappNumber"
                    value={formData.whatsappNumber}
                    onChange={handleChange}
                    placeholder="Your Whatsapp / Telegram / Skype
"
                    className="w-full px-2 py-3 border-b-[1px] border-[#999488] focus:outline-none focus:border-b-[#000000] placeholder-[#999488]"
                    required
                  />
                </div>
              </div>
            </div>
          </form>
        </div>
        {/* Socials  */}
        <div className="flex flex-row items-center justify-between ">
          {/* socials */}
          <div>
            <div className="flex flex-row space-x-24 pl-16">
              <div className="flex flex-row  space-x-2 items-center">
              <p className=" bg-[#F7B611] px-2 py-2 rounded-full animated-icon">
              <FaTelegramPlane size={24} />
              </p>
                <p className="text-md font-semibold">Telegram Us:</p>
                <p className="text-md font-bold">@giichiofficial</p>
              </div>

              <div className="flex flex-row  space-x-2 items-center">
                <p className="bg-[#F7B611] px-2 py-2 rounded-full animated-icon">
                  <FaDiscord size={24} />
                </p>
                <p className="text-md font-semibold">Discord: </p>
                <p className="text-md font-bold">@xyzofficial</p>
              </div>
            </div>

            <div className="flex flex-row space-x-[90px] pl-16 mt-6">
              <div className="flex flex-row  space-x-2 items-center">
                <p className=" bg-[#F7B611] px-2 py-2 rounded-full animated-icon">
                  <RiWhatsappFill size={24} />
                </p>
                <p className="text-md font-semibold">WhatsApp: </p>
                <p className="text-md font-bold">+91 6345734324</p>
              </div>

              <div className="flex flex-row  space-x-2 items-center ml-10">
                <p className=" bg-[#F7B611] px-2 py-2 rounded-full animated-icon">
                  <MdEmail size={24} />
                </p>
                <p className="text-md font-semibold">Drop Email: </p>
                <p className="text-md font-bold">giichixyz@gmail.com</p>
              </div>
            </div>
          </div>

          {/* Submit Button */}
          <div className="flex items-center justify-between pr-16">
            <button
              type="submit"
              className="bg-[#F7B611] text-[#ffffff] hover:bg-[#999488] text-white font-bold py-3 px-8 text-lg rounded-lg transition-transform 
          transform hover:scale-105"
            >
              Submit
            </button>
          </div>
        </div>
      </div>

      {/* Visit Us Section */}

      <div className="flex flex-row justify-between w-[60%] mt-10">
     

        <div className="w-[50%] ">
            <p className="text-[#F7B611] text-4xl font-bold">Newsletter</p>
            <p className="text-[#ffffff] pt-3 font-semibold text-xl">Subscribe or newsletter to get more technology updates.</p>
            <input
                    type="email"
                    name="email"
                    id="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="Enter Your Email"
                    className=" mt-5 w-[1140px] px-4 py-3 border-[1px] border-[#999488] bg-[#000000] focus:outline-none  placeholder-[#ffffff] text-xl font-semibold rounded-md "
                    required
                  />
        </div>
    
      </div>
    </div>
  );
};

export default ContactFormSection;
