import { motion } from "framer-motion";
import React, { useState } from "react";
import { AiOutlinePlus } from "react-icons/ai";

const HeatFAQ = () => {
  const [faqItems, setFaqItems] = useState([
    {
      question: "Is Heat Treatment safe for my family and pets?",
      answer:
        "Yes, RM Pestokill’s Heat Treatment is a safe method as it reduces the need for chemicals, ensuring the safety of your family and pets.",
      isAnswerVisible: false,
    },
    {
      question:
        "How effective is Heat Treatment in eliminating bedbugs and other insects?",
      answer:
        "Heat Treatment is highly effective, as it targets all life stages of bedbugs and other insects, providing comprehensive eradication.",
      isAnswerVisible: false,
    },
    {
      question: "What is the duration of RM Pestokill’s Heat Treatment?",
      answer:
        "The duration varies between 5 to 8 hours, depending on the size of the property and the severity of the infestation.",
      isAnswerVisible: false,
    },
    {
      question: "Do I need to vacate the property during Heat Treatment?",
      answer:
        "Yes, for safety reasons, it’s advised to vacate the property during the Heat Treatment process.",
      isAnswerVisible: false,
    },
    {
      question: "Will Heat Treatment damage my belongings or property?",
      answer:
        "No, our Heat Treatment is carefully monitored by specialists to ensure it reaches all areas without causing damage.",
      isAnswerVisible: false,
    },
    {
      question:
        "How does Heat Treatment compare to traditional spray treatments?",
      answer:
        "Heat Treatment is more effective against bedbugs and reduces the need for chemical usage, offering a safer and more thorough approach compared to spray treatments.",
      isAnswerVisible: false,
    },
  ]);

  const toggleAnswer = (index: any) => {
    setFaqItems((prevItems) =>
      prevItems.map((item, i) =>
        i === index ? { ...item, isAnswerVisible: !item.isAnswerVisible } : item
      )
    );
  };

  return (
    <div className="flex w-full py-20 px-4 md:px-14 flex-row flex-wrap items-center justify-center">
      <div className="w-full flex gap-2 flex-col">
        <h1 className="mx-2 sm:mx-auto font-display font-bold text-2xl tracking-normal text-gray-800 sm:text-4xl text-center">
          Got Questions About Heat Treatment?
        </h1>
        <p className="text-gray-800 font-uncut tracking-tight text-center">
          Some frequently asked questions
        </p>
        <div className="flex font-uncut w-full flex-col mt-9 px-0 md:px-36 flex-wrap">
          {faqItems.map((item, index) => (
            <div key={index}>
              <p
                onClick={() => toggleAnswer(index)}
                className="flex m-4 flex-row gap-2 text-lg sm:text-xl items-center cursor-pointer text-gray-800"
              >
                <motion.span
                  initial={{ rotate: 0 }}
                  animate={{
                    rotate: item.isAnswerVisible ? 90 : 0,
                    transition: { duration: 0.2 },
                  }}
                >
                  {" "}
                  <AiOutlinePlus className="text-blue-800 text-[13px] sm:text-lg" />{" "}
                </motion.span>
                {item.question}
              </p>
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{
                  height: item.isAnswerVisible ? "auto" : 0,
                  opacity: item.isAnswerVisible ? 1 : 0,
                }}
                transition={{ duration: 0.3 }}
                className="overflow-hidden"
              >
                <p className="flex text-gray-600 text-sm flex-wrap mb-3 mr-2 ml-[2.4rem] md:ml-[2.7rem]">
                  {/* Replace with your answer content */}
                  {item.answer}
                </p>
              </motion.div>
              <hr className="my-2" />
            </div>
          ))}
          <p className="text-sm text-gray-500 mt-4 mb-4">
            Other questions about Heat Treatment? Send us an email to:
            rmpestokill@gmail.com
          </p>
        </div>
      </div>
    </div>
  );
};

export default HeatFAQ;
