import { useState } from "react";
import TechImg from "../assets/tech_img.png";
import { IoClose } from "react-icons/io5";

const ContactPopUp = ({ onClose }) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phoneNumber: "",
    country: "",
    whatsappNumber: "",
    comment: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Data Submitted:", formData);
    setFormData({
      name: "",
      email: "",
      phoneNumber: "",
      country: "",
      whatsappNumber: "",
      comment: "",
    });
    onClose(); // Close popup on submit
  };

  return (
    <div className="fixed inset-0 flex justify-center items-center px-4 md:px-0 bg-black bg-opacity-50 backdrop-blur-sm">
      <div
        className="relative bg-[#ffffff] w-full md:w-[35%] flex flex-col justify-center items-start text-left p-2"
        style={{
          boxShadow:
            "0 2px 20px rgba(0, 0, 0, 0.4), inset 0 0 10px rgba(255, 255, 255, 0.6)", // White shadow with moderate opacity
        }}
      >
        <div
          onClick={onClose}
          className="absolute top-[-10px] left-[-8px] bg-[#EDBF08] p-2 rounded-full z-10 cursor-pointer text-[#000000]"
        >
          <IoClose size={20} />
        </div>

        <div className="absolute top-[-90px] right-[-80px]">
          <img src={TechImg} alt="" className="w-10 md:w-56" />
        </div>

        <p className="text-2xl md:text-3xl font-bold mb-4 px-4 pt-5">Connect With Us</p>

        <div className="w-full">
          <form onSubmit={handleSubmit} className="px-4 pt-4 mb-4">
            <div className="flex flex-col md:flex-row space-x-0 md:space-x-8 justify-between w-full">
              <div className="flex flex-col w-full md:w-[50%]">
                <div className="mb-4">
                  <input
                    type="text"
                    name="name"
                    id="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Name"
                    className="w-full px-2 py-3 border-b-[1px] border-[#999488] focus:outline-none focus:border-b-[#000000] placeholder-[#999488]"
                    required
                  />
                </div>

                <div className="mb-4">
                  <input
                    type="tel"
                    name="phoneNumber"
                    id="phoneNumber"
                    value={formData.phoneNumber}
                    onChange={handleChange}
                    placeholder="Contact Number"
                    className="w-full px-2 py-3 border-b-[1px] border-[#999488] focus:outline-none focus:border-b-[#000000] placeholder-[#999488]"
                    required
                  />
                </div>
              </div>

              <div className="flex flex-col w-full md:w-[50%]">
                <div className="mb-4">
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

                <div className="mb-4">
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
              </div>
            </div>

            <div className="mb-4">
              <input
                type="tel"
                name="whatsappNumber"
                id="whatsappNumber"
                value={formData.whatsappNumber}
                onChange={handleChange}
                placeholder="Your Whatsapp / Telegram / Skype"
                className="w-full px-2 py-3 border-b-[1px] border-[#999488] focus:outline-none focus:border-b-[#000000] placeholder-[#999488]"
                required
              />
            </div>

            <div className="mb-4">
              <textarea
                name="comment"
                id="comment"
                value={formData.comment}
                onChange={handleChange}
                placeholder="Project Description"
                className="w-full px-2 py-3 border-b-[1px] border-[#999488] focus:outline-none focus:border-b-[#000000] placeholder-[#999488] resize-none"
                rows="3"
                required
              />
            </div>

            <div className="text-center mt-10 mb-4">
              <button
                type="submit"
                className="bg-[#000000] hover:bg-[#999488] text-[#ffffff] font-semibold py-2 px-8 text-lg rounded-lg transition-transform transform hover:scale-105"
              >
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactPopUp;
