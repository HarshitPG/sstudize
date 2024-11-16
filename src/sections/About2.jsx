import React from "react";
import { motion } from "framer-motion";

const About2 = () => {
  return (
    <div className="  w-full  bg-black relative flex items-center justify-center">
      <div className=" max-h-auto  min-h-screen p-4 w-full min-w-screen justify-center items-center lg:grid lg:grid-cols-[40%,60%] grid-rows-1 grid grid-cols-1 gap-4 align-self-center">
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
        <div className=" p-8 overflow-x-hidden scroll-none grid grid-cols-1 grid-rows-4 gap-4 align-self-center  ">
          <div className="text-[#97b8ff] md:text-6xl text-4xl flex justify-center items-center font-spaceGrotesk-bold">
            <motion.h3
              initial={{ opacity: 0, y: 25 }}
              whileInView={{
                opacity: 1,
                y: 0,
                transition: { delay: 0.2, duration: 0.4 },
              }}
              viewport={{ once: true, amount: 1 }}
            >
              Captivating Animations that Engage
            </motion.h3>
          </div>
          <div className="grid grid-cols- grid-cols-[15%,85%] grid-rows-1 align-self-center text-white ">
            <motion.div
              initial={{ opacity: 0, y: 25 }}
              whileInView={{
                opacity: 1,
                y: 0,
                transition: { delay: 0.6, duration: 0.5 },
              }}
              viewport={{ once: true, amount: 1 }}
              className="flex items-center justify-center text-2xl"
            >
              1
            </motion.div>
            <div>
              <motion.h5
                initial={{ opacity: 0, y: 25 }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                  transition: { delay: 0.4, duration: 0.5 },
                }}
                viewport={{ once: true, amount: 1 }}
                className="md:text-2xl text-xl py-4 font-spaceGrotesk-semibold "
              >
                Attention-Grabbing
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
                Animations draw attention and make learning more enjoyable and
                memorable.
              </motion.p>
            </div>
          </div>

          <div className="grid grid-cols- grid-cols-[15%,85%] grid-rows-1 align-self-center text-white ">
            <motion.div
              className="flex items-center justify-center text-2xl"
              initial={{ opacity: 0, y: 25 }}
              whileInView={{
                opacity: 1,
                y: 0,
                transition: { delay: 0.6, duration: 0.5 },
              }}
              viewport={{ once: true, amount: 1 }}
            >
              2
            </motion.div>
            <div>
              <motion.h5
                initial={{ opacity: 0, y: 25 }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                  transition: { delay: 0.4, duration: 0.5 },
                }}
                viewport={{ once: true, amount: 1 }}
                className="md:text-2xl text-xl  py-4 font-spaceGrotesk-semibold "
              >
                Interactive Learning
              </motion.h5>
              <motion.p
                initial={{ opacity: 0, y: 25 }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                  transition: { delay: 0.6, duration: 0.5 },
                }}
                viewport={{ once: true, amount: 1 }}
                className="md:text-lg text-sm pb-4 font-spaceGrotesk-medium"
              >
                They encourage active participation and provide a more engaging
                learning experience.
              </motion.p>
            </div>
          </div>
          <div className="grid grid-cols- grid-cols-[15%,85%] grid-rows-1 align-self-center text-white ">
            <motion.div
              className="flex items-center justify-center text-2xl  "
              initial={{ opacity: 0, y: 25 }}
              whileInView={{
                opacity: 1,
                y: 0,
                transition: { delay: 0.6, duration: 0.5 },
              }}
              viewport={{ once: true, amount: 1 }}
            >
              3
            </motion.div>
            <div>
              <motion.h5
                initial={{ opacity: 0, y: 25 }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                  transition: { delay: 0.4, duration: 0.5 },
                }}
                viewport={{ once: true, amount: 1 }}
                className="md:text-2xl text-xl  py-4 font-spaceGrotesk-semibold "
              >
                Enhanced Comprehension
              </motion.h5>
              <motion.p
                initial={{ opacity: 0, y: 25 }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                  transition: { delay: 0.6, duration: 0.5 },
                }}
                viewport={{ once: true, amount: 1 }}
                className="md:text-lg text-sm pb-4 font-spaceGrotesk-medium"
              >
                Animations can illustrate complex concepts in a clear and
                understandable way.
              </motion.p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About2;
