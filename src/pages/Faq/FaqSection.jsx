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
        "Giichi IT Solutions is a trusted partner for leading brands and startups around the globe. Our team of dedicated developers possesses the technical expertise to deliver digital solutions tailored to your business needs. From startups to Fortune 150 companies, we support our clients on their digital transformation journeys. Let us help you build a brighter future for your business.",
    },
    {
      question: "What type of Software Development Services do you offer?",
      answer: [
        "Our talented community of developers is ready to assist you with a diverse range of services, including",
        [
        "Custom software development",
        "Mobile app development (iOS and Android)",
        "Web application development",
        "Cloud solutions and DevOps",
        "Enterprise software integration",
        "UI/UX design and prototyping",
        "Software maintenance and support",
        ]
      ],
    },
    {
      question: "How does Giichi IT Solutions ensure the quality of its products?",
      answer:
        "Our experienced team of developers, designers, testers, and digital marketers excels at managing complex projects. We maintain product quality by employing established practices throughout the development lifecycle. We begin with a complete prototype based on your specifications and seek your approval at each stage before progressing. Before launching, we conduct thorough testing to ensure our products are bug-free and fully functional according to your needs. Our goal is always to exceed your expectations.",
    },
    // Add more FAQ items here
  ];

  return (
    <div className="bg-[#F7B611] px-4 md:px-10 lg:px-32 pt-12  md:pt-20 pb-64">
      <p className="text-2xl md:text-3xl font-bold">FAQ</p>
      <p className="block md:hidden lg:block text-3xl md:text-5xl font-bold text-[#ffffff] mt-4 leading-tight">
        Find Answers to Your Questions
      </p>

      <p className="hidden md:block lg:hidden text-3xl md:text-4xl lg:text-5xl font-bold text-[#ffffff] mt-4 leading-tight">
        Find Answers to Your Questions
      </p>
      <p className="text-lg font-semibold text-[#ffffff] mt-4">
        Connect with our experts for in-depth technical consultations.
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
              className={`pl-6 pb-8 text-sm md:text-md text-[#3f310f] p-2 transition-all duration-300 ease-in-out ${
                expandedIndex === index ? "block" : "hidden"
              }`}
            >
              {Array.isArray(faq.answer) ? (
                <ul style={{ listStyleType: 'disc', paddingLeft: '20px' }}>
                  {faq.answer.map((item, idx) => (
                    <li key={idx}>{item}</li>
                  ))}
                </ul>
              ) : (
                <p>{faq.answer}</p>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FaqSection;
