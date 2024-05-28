import { motion } from "framer-motion";
import Link from "next/link";
import React, { useState } from "react";
import { AiOutlinePlus } from "react-icons/ai";

const FAQ = () => {
  const [faqItems, setFaqItems] = useState([
    {
      question: "Our Mission Statement",
      answer:
        "To be trusted by our customers as the leading engineering services and facilities company in the region, to empower our staff with the training, support and experience they need to enable them to deliver customer service excellence always and to strive for the highest quality and accountability achievable in everything we do.",
      isAnswerVisible: false,
    },
    {
      question: "Our Company Values",
      answer:
        "At Bespoke Builds we operate to a set of defined company values – these values are part of who we are, the service we provide our customers, and how we interact with our stakeholders and the communities in which we operate.",
      isAnswerVisible: false,
    },
    {
      question: "Do you work with all types of residences / businesses?",
      answer:
        "Yes, we work with all kinds of clients - whether they are  commercial (food processing industry, restaurants warehouses etc) as well as wholesale and retail stores across London",
      isAnswerVisible: false,
    },
    {
      question: "What services do you offer?",
      answer:
        "Our services range from electrical, to plumbing, to air-con, to catering equipment maintenance",

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
          Got Questions? We&apos;ve Got Answers!
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
            Other questions or requests? Send us an email to:
            ldnbespokebuilds@outlook.com
          </p>
        </div>
      </div>
    </div>
  );
};

export default FAQ;
