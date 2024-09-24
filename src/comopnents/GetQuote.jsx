import { useState } from "react";
import { RiCloseLargeFill } from "react-icons/ri";

const servicesList = [
  "Crypto Exchange Development",
  "Cryptocurrency Development",
  "Smart Contract MLM Development",
  "DApp Development",
  "Ethereum Token Development",
  "Blockchain Development",
  "HyperLedger Development",
  "NFT Marketplace",
  "Business Intelligence",
];

const GetQuote = ({onClose}) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    contact: "",
    country: "",
    whatsapp: "",
  });

  const [formErrors, setFormErrors] = useState({});

  const validateForm = () => {
    const errors = {};

    // Name validation
    if (!formData.name.trim()) {
      errors.name = "Name is required";
    }

    // Email validation
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formData.email) {
      errors.email = "Email is required";
    } else if (!emailPattern.test(formData.email)) {
      errors.email = "Invalid email format";
    }

    // Contact validation (10-digit number)
    const contactPattern = /^[0-9]{10}$/;
    if (!formData.contact) {
      errors.contact = "Contact number is required";
    } else if (!contactPattern.test(formData.contact)) {
      errors.contact = "Contact must be a 10-digit number";
    }

    // Country validation
    if (!formData.country.trim()) {
      errors.country = "Country is required";
    }

    // WhatsApp validation (optional)
    const whatsappPattern = /^[0-9]{10}$/;
    if (formData.whatsapp && !whatsappPattern.test(formData.whatsapp)) {
      errors.whatsapp = "WhatsApp number must be a 10-digit number";
    }

    return errors;
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const errors = validateForm();
    if (Object.keys(errors).length === 0) {
      // No validation errors, submit the form
      console.log("Form data:", formData);
    } else {
      // Set validation errors
      setFormErrors(errors);
    }
    onClose(); // Close popup on submit
  };

  // Service Selection
  const [selectedServices, setSelectedServices] = useState([]);
  const [formError, setFormError] = useState("");

  const handleCheckboxChange = (e) => {
    const { value, checked } = e.target;
    if (checked) {
      setSelectedServices([...selectedServices, value]);
    } else {
      setSelectedServices(
        selectedServices.filter((service) => service !== value)
      );
    }
  };

  const handleSubmit1 = (e) => {
    e.preventDefault();
    if (selectedServices.length === 0) {
      setFormError("Please select at least one service.");
    } else {
      setFormError("");
      console.log("Selected Services:", selectedServices);
      // Submit logic here
    }
  };

  return (
    <div className="fixed inset-0 flex justify-center items-center bg-black bg-opacity-50 backdrop-blur-sm">
      <div className="relative w-[60%] flex flex-col justify-center items-center p-4  ">
        {/* Close Icon */}
        <div className="absolute top-[-2px] left-[-2px] cursor-pointer bg-[#FFC107] px-2 py-2 rounded-full text-[#000000]"
         onClick={onClose}>
          <RiCloseLargeFill size={20} />
        </div>
        <div
          className="w-full flex flex-col justify-center items-center p-4 bg-[#ffffff]"
          style={{
            boxShadow:
              "0 2px 20px rgba(0, 0, 0, 0.4), inset 0 0 10px rgba(255, 255, 255, 0.6)", // White shadow with moderate opacity
          }}
        >
          <p className="text-2xl font-bold text-[#000000]">Request For Quote</p>
          <p className="text-lg font-medium pt-3 text-[#000000]">
            Discuss your project with us. We are waiting to serve you Better
          </p>

          <div className="w-[90%] mt-8">
            <form onSubmit={handleSubmit}>
              <div className="flex flex-col md:flex-row space-x-0 md:space-x-8 w-full">
                {/* Name Field */}
                <div className="mb-4 w-full md:w-[50%]">
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    placeholder="Name"
                    onChange={handleInputChange}
                    className="w-full p-3 bg-[#F5F5F5] border-b border-[#C9C9C9] placeholder-[#818181]"
                  />
                  {formErrors.name && (
                    <p className="text-red-500 text-sm">{formErrors.name}</p>
                  )}
                </div>

                {/* Email Field */}
                <div className="mb-4 w-full md:w-[50%]">
                  <input
                    type="email"
                    name="email"
                    placeholder="Email"
                    value={formData.email}
                    onChange={handleInputChange}
                    className="w-full p-3 bg-[#F5F5F5] border-b border-[#C9C9C9] placeholder-[#818181]"
                  />
                  {formErrors.email && (
                    <p className="text-red-500 text-sm">{formErrors.email}</p>
                  )}
                </div>
              </div>

              <div className="flex flex-col md:flex-row space-x-0 md:space-x-8 w-full">
                {/* Contact Field */}
                <div className="mb-4 w-full md:w-[50%]">
                  <input
                    type="text"
                    name="contact"
                    placeholder="Contact Number"
                    value={formData.contact}
                    onChange={handleInputChange}
                    className="w-full p-3 bg-[#F5F5F5] border-b border-[#C9C9C9] placeholder-[#818181]"
                  />
                  {formErrors.contact && (
                    <p className="text-red-500 text-sm">{formErrors.contact}</p>
                  )}
                </div>

                {/* Country Field */}
                <div className="mb-4 w-full md:w-[50%]">
                  <input
                    type="text"
                    name="country"
                    placeholder="Country"
                    value={formData.country}
                    onChange={handleInputChange}
                    className="w-full p-3 bg-[#F5F5F5] border-b border-[#C9C9C9] placeholder-[#818181] "
                  />
                  {formErrors.country && (
                    <p className="text-red-500 text-sm">{formErrors.country}</p>
                  )}
                </div>
              </div>

              {/* WhatsApp Field */}
              <div className="mb-4">
                <input
                  type="text"
                  name="whatsapp"
                  placeholder="Whatsapp/Telegram"
                  value={formData.whatsapp}
                  onChange={handleInputChange}
                  className="w-full p-3 border-b bg-[#F5F5F5] border-[#C9C9C9] placeholder-[#818181] "
                />
                {formErrors.whatsapp && (
                  <p className="text-red-500 text-sm">{formErrors.whatsapp}</p>
                )}
              </div>

              <div className="w-[100%] mt-2">
                <div
                  className="w-[100%] max-w-full bg-white p-4"
                  style={{
                    boxShadow:
                      "0 2px 20px rgba(0, 0, 0, 0.1), inset 0 0 10px rgba(255, 255, 255, 0.6)", // White shadow with moderate opacity
                  }}
                >
                  <h2 className="text-xl font-bold text-left mb-6 text-[#000000]">
                    Select Our Services
                  </h2>
                  <form onSubmit={handleSubmit1}>
                    <div className="flex flex-wrap justify-between gap-6">
                      {servicesList.map((service, index) => (
                        <div
                          key={index}
                          className="flex items-center space-x-2 bg-white shadow-md p-3 rounded-lg w-[31%]"
                          style={{
                            boxShadow:
                              "0 2px 20px rgba(0, 0, 0, 0.1), inset 0 0 10px rgba(255, 255, 255, 0.6)", // White shadow with moderate opacity
                          }}
                        >
                          <input
                            type="checkbox"
                            id={`service-${index}`}
                            value={service}
                            onChange={handleCheckboxChange}
                            className="h-3 w-3 border-gray-300 focus:ring-blue-500 rounded-xl"
                          />
                          <label
                            htmlFor={`service-${index}`}
                            className="text-sm text-[#868585]"
                          >
                            {service}
                          </label>
                        </div>
                      ))}
                    </div>

                    {/* Error Message */}
                    {formError && (
                      <p className="text-red-500 text-sm mt-4">{formError}</p>
                    )}
                  </form>
                </div>
              </div>

              {/* Project Description Field */}
              <div className="mb-4 mt-6">
                <textarea
                  name="description"
                  placeholder="Project Description"
                  rows="4"
                  className="w-full p-3 border-b bg-[#F5F5F5] border-[#C9C9C9] placeholder-[#818181] resize-none"
                />
              </div>
               
               <div className="text-center">
               <button
                type="submit"
                className=" bg-blue-600 text-white p-3 rounded-lg hover:bg-blue-700 font-bold transition duration-200 bg-[#FFC107] w-[10%] hover:bg-[#C9C9C9] text-[#000000]"
              >
                Submit
              </button>
               </div>
            
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GetQuote;
