import React from "react";
import { motion } from "framer-motion";

const About3 = () => {
  return (
    <div className=" w-full  dark:bg-black relative flex items-center justify-center">
      <div className=" min-h-screen p-4 w-full min-w-screen  md:h-screen md:max-h-screen justify-center items-centerlg:grid lg:grid-cols-[60%,40%] grid-rows-1 gap-4 grid grid-cols-1 align-self-center">
        <div className=" p-8 overflow-x-hidden scroll-none grid grid-cols-1 grid-rows-4 align-self-center  h-full ">
          <div className="text-[#97b8ff] md:text-6xl text-4xl  font-spaceGrotesk-bold ">
            <h3>Seamless Transitions for Smooth Navigation</h3>
          </div>
          <div className="grid grid-cols-[20%,80%] grid-rows-1 align-self-center text-white ">
            <div className="flex items-center justify-center text-2xl ">
              <motion.div
                initial={{ scaleY: 0 }}
                whileInView={{
                  scaleY: 1,
                  transition: { delay: 0.2, duration: 2 },
                }}
                viewport={{ once: true, amount: 1 }}
                className=" relative w-1 h-full bg-[#26262b] left-4 origin-top"
              />
              <div className=" flex items-center justify-center bg-[#26262b] md:w-[25%] md:h-[25%] w-[60%] h-[30%] z-10 relative md:bottom-10 bottom-6 right-2">
                1
              </div>
            </div>
            <div>
              <h5 className="text-2xl py-4 font-spaceGrotesk-semibold ">
                User-Friendly
              </h5>
              <p className="text-lg pb-4 font-spaceGrotesk-medium">
                Transitions provide a natural and intuitive navigation
                experience for users.
              </p>
            </div>
          </div>

          <div className="grid grid-cols- grid-cols-[20%,80%] grid-rows-1 align-self-center text-white ">
            <div className="flex items-center justify-center text-2xl">
              {" "}
              <motion.div
                initial={{ scaleY: 0 }}
                whileInView={{
                  scaleY: 1,
                  transition: { delay: 1.8, duration: 2 },
                }}
                viewport={{ once: true, amount: 1 }}
                className=" relative w-1 h-full bg-[#26262b] left-4 origin-top"
              />
              <div className="  flex items-center justify-center bg-[#26262b] md:w-[25%] md:h-[25%] w-[60%] h-[30%] z-10 relative md:bottom-10 bottom-6 right-2 ">
                2
              </div>
            </div>
            <div>
              <h5 className="text-2xl py-4 font-spaceGrotesk-semibold ">
                Attention-Grabbing
              </h5>
              <p className="text-lg pb-4 font-spaceGrotesk-medium">
                Engage your students with interactive learning experiences that
                make knowledge come alive.
              </p>
            </div>
          </div>
          <div className="grid grid-cols- grid-cols-[20%,80%] grid-rows-1 align-self-center text-white ">
            <div className="flex items-center justify-center text-2xl">
              {" "}
              <motion.div
                initial={{ scaleY: 0 }}
                whileInView={{
                  scaleY: 1,
                  transition: { delay: 3.8, duration: 2 },
                }}
                viewport={{ once: true, amount: 1 }}
                className=" relative w-1 h-full bg-[#26262b] left-4 origin-top"
              />
              <div className="  flex items-center justify-center bg-[#26262b] md:w-[25%] md:h-[25%] w-[60%] h-[30%] z-10 relative md:bottom-10 bottom-6 right-2 ">
                3
              </div>
            </div>
            <div>
              <h5 className="text-2xl py-4 font-spaceGrotesk-semibold ">
                Attention-Grabbing
              </h5>
              <p className="text-lg pb-4 font-spaceGrotesk-medium">
                Engage your students with interactive learning experiences that
                make knowledge come alive.
              </p>
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
              <img src="public/imges/4.jpeg" alt="" />
            </motion.div>

            {/* <span className=" h-screen z-0">{/* <Landing3D /> </span> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default About3;
