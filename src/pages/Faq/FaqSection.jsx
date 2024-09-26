import { LuPlus, LuMinus } from "react-icons/lu";
import { useState } from "react";

const FaqSection = () => {
  const [expandedIndex, setExpandedIndex] = useState(null);

  // Toggle the visibility of the FAQ content
  const toggleFaq = (index) => {
    setExpandedIndex(expandedIndex === index ? null : index);
  };

  const faqs = [
    {
      question:
        "Why should I choose Giichi for software consulting and development?",
      answer:
        "We are a Software Consulting company trusted by leading brands and startups worldwide. Our team of passionate developers has the right technical expertise to deliver digital solutions that perfectly fit your business requirements. Startups to Fortune 500 companies rely on us in their digital transformation journey. We can help you too in creating a better future for your business.",
    },
    {
      question: "How do I get started with Giichi's services?",
      answer:
        "Getting started with Giichi is easy. Just reach out to us with your project requirements, and we will provide a customized consultation to help you navigate through the best possible solutions for your business.",
    },
    {
      question: "What type of Software Development Services do you offer?",
      answer:
        "We have a community of passionate and dedicated developers ready to help with a wide array of services such as Software Development, Web Development, Ecommerce Web Development, Mobile App Development, Digital Marketing Services, Blockchain Development, Digital Transformation, and much more.",
    },
    {
      question: "How does Giichi guarantee the quality of its product?",
      answer:
        "We have a team of experienced developers, designers, testers, and digital marketers who are experts in handling all types of complex projects. We guarantee the quality of the product by using several proven practices throughout the product development. We create a complete prototype based on client requirements and at every stage of the development process, we get approval from the client before we carry forward with the next phase. Before launching into the market we test our products continuously to ensure that it is bug-free and fully functional as per the client's needs. We always provide our clients with more than what they expected.",
    },
    // Add more FAQ items here
  ];

  return (
    <div className="bg-[#F7B611] px-4 md:px-10 lg:px-32 pt-12  md:pt-20 pb-64">
      <p className="text-2xl md:text-3xl font-bold ">FAQ</p>
      <p className="block md:hidden lg:block text-3xl md:text-5xl font-bold text-[#ffffff] mt-4 leading-tight">
        Solve the un-solved queries on <br /> your mind
      </p>

      <p className="hidden md:block lg:hidden text-3xl md:text-4xl lg:text-5xl font-bold text-[#ffffff] mt-4 leading-tight">
        Solve the un-solved queries on your mind
      </p>
      <p className="text-lg font-semibold text-[#ffffff] mt-4">
        Connect with our experts for detailed technical consultation.
      </p>

      <div
        className="bg-[#F5C34A] w-full lg:w-[70%] mt-10 p-0 md:p-10 rounded-md"
        style={{
          boxShadow:
            "0 2px 20px rgba(0, 0, 0, 0.4), inset 0 0 10px rgba(255, 255, 255, 0.6)", // White shadow with moderate opacity
        }}
      >
        {faqs.map((faq, index) => (
          <div key={index}>
            <div
              className="flex flex-row justify-between items-center p-6 text-[#3f310f] cursor-pointer"
              onClick={() => toggleFaq(index)}
            >
              <p className="text-md font-medium">{faq.question}</p>
              {expandedIndex === index ? (
                <p className="bg-[#000000] text-[#ffffff] px-1 py-1 rounded-full font-bold">
                  <LuMinus size={20} />
                </p>
              ) : (
                <p className="bg-[#000000] text-[#ffffff] px-1 py-1 rounded-full font-bold">
                  <LuPlus size={20} />
                </p>
              )}
            </div>
            <div
              className={`faq-content ${
                expandedIndex === index ? "expanded" : "collapsed"
              }`}
            >
              <div className="pl-6 pb-8 text-sm md:text-md text-[#3f310f] p-2">
                {faq.answer}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FaqSection;
