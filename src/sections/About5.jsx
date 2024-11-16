import { HoverEffect } from "../components/ui/Card-hover-effect";

const About5 = () => {
  return (
    <div className="min-h-screen max-h-auto flex-row justify-center items-center  dark:bg-black px-4 ">
      <div className=" pt-[10%] md:text-5xl text-3xl  font-spaceGrotesk-bold md:mb-4  flex items-center justify-center text-[#97b8ff] ">
        <h1>Unleash the Power of Gradients</h1>
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
    title: "Stripe",
    description:
      "A technology company that builds economic infrastructure for the internet.",
    link: "https://stripe.com",
  },
  {
    title: "Netflix",
    description:
      "A streaming service that offers a wide variety of award-winning TV shows, movies, anime, documentaries, and more on thousands of internet-connected devices.",
    link: "https://netflix.com",
  },
  {
    title: "Google",
    description:
      "A multinational technology company that specializes in Internet-related services and products.",
    link: "https://google.com",
  },
];
