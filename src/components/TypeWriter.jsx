import  { useState, useEffect } from "react";

const Typewriter = () => {
  const firstLine = "Driving Digital ";
  const secondLine = "Transformation for ";
  const thirdLine = "Future-Ready Businesses";

  const [currentTextFirstLine, setCurrentTextFirstLine] = useState(""); // For animating the first line
  const [currentTextSecondLine, setCurrentTextSecondLine] = useState(""); // For animating the second line
  const [currentTextThirdLine, setCurrentTextThirdLine] = useState(""); // For animating the third line
  const [letterIndexFirstLine, setLetterIndexFirstLine] = useState(0); // Track letter index for first line
  const [letterIndexSecondLine, setLetterIndexSecondLine] = useState(0); // Track letter index for second line
  const [letterIndexThirdLine, setLetterIndexThirdLine] = useState(0); // Track letter index for third line
  const [isTypingSecondLine, setIsTypingSecondLine] = useState(false); // Track if we're typing the second line
  const [isTypingThirdLine, setIsTypingThirdLine] = useState(false); // Track if we're typing the third line

  useEffect(() => {
    const handleTyping = () => {
      if (!isTypingSecondLine && !isTypingThirdLine) {
        // Typing the first line
        if (letterIndexFirstLine < firstLine.length) {
          setCurrentTextFirstLine(firstLine.substring(0, letterIndexFirstLine + 1));
          setLetterIndexFirstLine(letterIndexFirstLine + 1);
        } else {
          // Start typing the second line after the first line is fully typed
          setTimeout(() => {
            setIsTypingSecondLine(true);
          }, 500); // Small delay before starting the second line
        }
      } else if (isTypingSecondLine && !isTypingThirdLine) {
        // Typing the second line
        if (letterIndexSecondLine < secondLine.length) {
          setCurrentTextSecondLine(secondLine.substring(0, letterIndexSecondLine + 1));
          setLetterIndexSecondLine(letterIndexSecondLine + 1);
        } else {
          // Start typing the third line after the second line is fully typed
          setTimeout(() => {
            setIsTypingThirdLine(true);
          }, 500); // Small delay before starting the third line
        }
      } else if (isTypingThirdLine) {
        // Typing the third line
        if (letterIndexThirdLine < thirdLine.length) {
          setCurrentTextThirdLine(thirdLine.substring(0, letterIndexThirdLine + 1));
          setLetterIndexThirdLine(letterIndexThirdLine + 1);
        }
      }
    };

    const typingSpeed = 100; // Speed for typing (adjust as needed)
    const timeout = setTimeout(handleTyping, typingSpeed);

    return () => clearTimeout(timeout); // Cleanup the timeout on unmount or re-render
  }, [letterIndexFirstLine, letterIndexSecondLine, letterIndexThirdLine, isTypingSecondLine, isTypingThirdLine]);

  return (
    <div>
      {/* First Line (typed and stays on screen) */}
      <h1 className="block md:hidden xl:block text-[33px] lg:text-[34px] xl:text-[60px] font-bold mt-8 xl:-mt-48 text-[#ffff] leading-tight">
        {currentTextFirstLine}
      </h1>

      {/* Second Line (starts animating after the first line is done) */}
      <h1 className="block md:hidden xl:block text-[33px] lg:text-[34px] xl:text-[60px] font-bold mt-0 text-[#ffff] leading-tight">
        {currentTextSecondLine}
      </h1>

      {/* Third Line (starts animating after the second line is done) */}
      <h1 className="block md:hidden xl:block text-[33px] lg:text-[34px] xl:text-[60px] font-bold mt-0 text-[#ffff] leading-tight">
        {currentTextThirdLine}
      </h1>
    </div>
  );
};

export default Typewriter;
