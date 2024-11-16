import React from "react";
import { motion } from "framer-motion";
import FAQItem from "../components/ui/Box";

const About4 = () => {
  return (
    <div className="  max-h-auto  min-h-screen w-full  bg-black relative flex items-center justify-center">
      <div className=" h-auto p-4 w-full min-w-screen min-h-screen md:h-screen md:max-h-screen justify-center items-center lg:grid lg:grid-cols-[40%,60%] grid-rows-1 gap-4 grid grid-cols-1 align-self-center">
        <div className=" hidden lg:flex ">
          <div className=" hidden lg:flex justify-center items-center">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{
                opacity: 1,
                y: 0,
                transition: { delay: 0.4, duration: 0.8 },
              }}
              viewport={{ once: true, amount: 1 }}
              className=" object-contain "
            >
              <img src="/imges/4.jpeg" alt="" />
            </motion.div>

            {/* <span className=" h-screen z-0">{/* <Landing3D /> </span> */}
          </div>
        </div>
        <div className=" p-8 overflow-x-hidden scroll-none flex flex-col gap-6 items-center  h-full ">
          <div className="text-[#97b8ff]  md:text-6xl text-4xl flex justify-center items-center font-spaceGrotesk-bold ">
            <motion.h3
              initial={{ opacity: 0, x: 25 }}
              whileInView={{
                opacity: 1,
                x: 0,
                transition: { delay: 0.2, duration: 0.4 },
              }}
              viewport={{ once: true, amount: 1 }}
            >
              Personalized Learning pathways
            </motion.h3>
          </div>
          <div className=" relative lg:right-20 py-10">
            {faqData.map((faq, i) => (
              <FAQItem
                question={faq.question}
                answer={faq.answer}
                index={i + 1}
                key={i}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default About4;

const faqData = [
  {
    question: "Adaptive Learning",
    answer:
      "Sstudize tailors learning paths to individual needs, providing personalized recommendations and assessments.",
  },
  {
    question: "Adaptive Learning",
    answer:
      "Sstudize tailors learning paths to individual needs, providing personalized recommendations and assessments.",
  },
  {
    question: "Adaptive Learning",
    answer:
      "Sstudize tailors learning paths to individual needs, providing personalized recommendations and assessments.",
  },
];
