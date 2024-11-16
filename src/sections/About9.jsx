import { HoverBorderGradient } from "../components/ui/Hover-boder-gradient";

const About9 = () => {
  return (
    <div className=" h-screen max-h-auto flex items-center justify-center  bg-black ">
      <div className="p-6 flex-col items-center justify-center text-[#97b8ff] ">
        <div className=" py-12  md:text-6xl text-4xl font-spaceGrotesk-bold mb-4 ">
          <h1>Start Your Sstudize Journey Today</h1>
        </div>

        {/* <div className=" ">
          {" "}
          <button className="px-6 py-2 bg-black text-[#97b8ff] md:text-2xl text-xl  font-spaceGrotesk-semibold border border-[#97b8ff]">
            sign up
          </button>
        </div> */}

        <div className="  flex justify-center text-center">
          <HoverBorderGradient
            containerClassName="rounded-none"
            as="button"
            className="bg-black md:text-2xl text-xl  font-spaceGrotesk-semibold  text-black  flex items-center space-x-2"
          >
            <span>Sign Up Now</span>
          </HoverBorderGradient>
        </div>
      </div>
    </div>
  );
};

export default About9;
