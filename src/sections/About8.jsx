import { HoverEffect } from "../components/ui/Card-hover-effect";

const About8 = () => {
  return (
    <div className=" h-screen flex flex-col justify-center items-center dark:bg-black ">
      <div className=" h-1/4 px-4 text-[#97b8ff]  md:text-6xl text-4xl flex justify-center items-center font-spaceGrotesk-bold  ">
        <h1>Unleash the Power of Gradients</h1>
      </div>
      <div className=" px-4 h-fit w-full min-w-screen py-8 justify-center items-center grid align-self-center">
        <div className="lg:w-[1024px] w-[320px] sm:w-[640px] md:w-[768px] mx-auto  ">
          <div className="relative overflow-x-auto border-2 ">
            <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
              <tbody>
                <tr className="bg-white border-b dark:bg-[#06060b] dark:border-gray-700">
                  <th
                    scope="row"
                    className="px-6 py-4 sm:pr-60 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                  >
                    Student Progress
                  </th>
                  <td className="px-6 py-4">
                    Track individual and class-wide progress in real-time.
                  </td>
                </tr>
                <tr className="bg-white border-b dark:bg-[#0f0f14] dark:border-gray-700">
                  <th
                    scope="row"
                    className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                  >
                    Performance Trends
                  </th>
                  <td className="px-6 py-4">
                    Identify areas of strength and weakness, and adjust teaching
                    strategies accordingly.
                  </td>
                </tr>
                <tr className="bg-white  dark:bg-[#06060b]">
                  <th
                    scope="row"
                    className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                  >
                    Engagement Metrics{" "}
                  </th>
                  <td className="px-6 py-4">
                    {" "}
                    Understand how students are interacting with the platform
                    and identify areas for improvement.
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About8;
