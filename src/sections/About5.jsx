import { HoverEffect } from "../components/ui/Card-hover-effect";

const About5 = () => {
  return (
    <div className="min-h-screen max-h-auto flex-row justify-center items-center  bg-black px-4 ">
      <div className=" pt-[10%] md:text-5xl text-3xl  font-spaceGrotesk-bold md:mb-4  flex items-center justify-center text-[#97b8ff] ">
        <h1>Interactive Lesson Plans</h1>
      </div>
      <div className=" px-4 h-auto w-full   justify-center items-center grid align-self-center">
        <div className="  md:max-w-5xl mx-auto px-8">
          <HoverEffect items={projects} />
        </div>
      </div>
    </div>
  );
};

export default About5;

export const projects = [
  {
    title: "Engaging Content",
    description:
      "nteractive elements, such as quizzes, games, and simulations, make learning more fun andeffective.",
    link: "https://google.com",
  },
  {
    title: "Engaging Content",
    description:
      "nteractive elements, such as quizzes, games, and simulations, make learning more fun andeffective.",
    link: "https://google.com",
  },
  {
    title: "Engaging Content",
    description:
      "nteractive elements, such as quizzes, games, and simulations, make learning more fun andeffective.",
    link: "https://google.com",
  },
];
