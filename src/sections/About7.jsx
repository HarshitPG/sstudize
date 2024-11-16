import React from "react";
import { motion } from "framer-motion";
import { Reveal } from "../components/ui/Reveal";

const About7 = () => {
  return (
    <div className=" w-full  dark:bg-black relative flex items-center justify-center">
      <div className=" h-screen p-4 w-full min-w-screen min-h-screen md:h-screen md:max-h-screen justify-center items-center lg:grid lg:grid-cols-[60%,40%] grid-rows-1 grid grid-cols-1 gap-4 align-self-center">
        <div className=" p-8 overflow-x-hidden scroll-none flex flex-col gap-4 align-self-center  h-full ">
          <div className="text-[#97b8ff]  md:text-6xl text-4xl flex justify-center items-center font-spaceGrotesk-bold ">
            <Reveal>Collaborative Student Communities</Reveal>
          </div>
          <div className="grid grid-cols- grid-cols-1 grid-rows-1 align-self-center text-white ">
            <div>
              <motion.h5
                initial={{ opacity: 0, y: 25 }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                  transition: { delay: 0.4, duration: 0.5 },
                }}
                viewport={{ once: true, amount: 1 }}
                className="md:text-2xl text-xl py-4 font-spaceGrotesk-semibold  "
              >
                Peer Learning
              </motion.h5>
              <motion.p
                initial={{ opacity: 0, y: 25 }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                  transition: { delay: 0.6, duration: 0.5 },
                }}
                viewport={{ once: true, amount: 1 }}
                className="md:text-lg text-smpb-4 font-spaceGrotesk-medium"
              >
                Gamified assessments make learning more enjoyable and encourage
                students to strive for success.
              </motion.p>
            </div>
          </div>

          <div className="grid grid-cols- grid-cols-1 grid-rows-1 align-self-center text-white ">
            <div>
              <motion.h5
                initial={{ opacity: 0, y: 25 }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                  transition: { delay: 0.4, duration: 0.5 },
                }}
                viewport={{ once: true, amount: 1 }}
                className="md:text-2xl text-xl py-4 font-spaceGrotesk-semibold  "
              >
                Social Interaction
              </motion.h5>
              <motion.p
                initial={{ opacity: 0, y: 25 }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                  transition: { delay: 0.6, duration: 0.5 },
                }}
                viewport={{ once: true, amount: 1 }}
                className="md:text-lg text-smpb-4 font-spaceGrotesk-medium"
              >
                They provide a fun and engaging way to assess knowledge and
                skills.
              </motion.p>
            </div>
          </div>
          <div className="grid grid-cols- grid-cols-1 grid-rows-1 align-self-center text-white ">
            <div>
              <motion.h5
                initial={{ opacity: 0, y: 25 }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                  transition: { delay: 0.4, duration: 0.5 },
                }}
                viewport={{ once: true, amount: 1 }}
                className="md:text-2xl text-xl py-4 font-spaceGrotesk-semibold  "
              >
                Support Network
              </motion.h5>
              <motion.p
                initial={{ opacity: 0, y: 25 }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                  transition: { delay: 0.6, duration: 0.5 },
                }}
                viewport={{ once: true, amount: 1 }}
                className="md:text-lg text-smpb-4 font-spaceGrotesk-medium"
              >
                Assessments adjust to the student performance, providing
                appropriate challenges and feedback.
              </motion.p>
            </div>
          </div>
        </div>
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
      </div>
    </div>
  );
};

export default About7;
