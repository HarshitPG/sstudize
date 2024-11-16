import { useState, useEffect, useRef } from "react";
import { useInView } from "framer-motion";

const FAQItem = ({ question, answer, index }) => {
  const [isOpen, setIsOpen] = useState(false);
  const ref = useRef(null); // Create a ref using useRef
  const isInView = useInView(ref, { threshold: 0.5 }); // Use the ref in useInView

  useEffect(() => {
    if (isInView && !isOpen) {
      // Set a timer to open the FAQ item after 1000 milliseconds
      const timer = setTimeout(() => {
        setIsOpen(true);
      }, 1000);

      // Cleanup the timer if the component is unmounted
      return () => clearTimeout(timer);
    }
  }, [isInView, isOpen]);

  return (
    <div
      ref={ref} // Attach the ref to the element
      className="w-full md:w-[90%] min-h-max h-fit float-right flex flex-col border-[1px] border-white relative"
    >
      <div className="--box w-2 aspect-square bg-white absolute -bottom-1 -right-1"></div>
      <div className="--box w-2 aspect-square bg-white absolute -bottom-1 -left-1"></div>
      <div className="--box w-2 aspect-square bg-white absolute -top-1 -left-1"></div>
      <div className="--box w-2 aspect-square bg-white absolute -top-1 -right-1"></div>
      <section className="w-[100%] text-xl font-grotesk font-medium text-white p-2 flex justify-between overflow-hidden">
        <span className="text-sm">{index < 10 ? `0${index}` : index}</span>
        <span className="text-white w-[80%] text-sm md:text-2xl">
          {question}
        </span>
        <button
          type="button"
          className={`w-6 h-6 flex items-center justify-center ${
            isOpen
              ? " bg-secondary text-brightpurple"
              : " bg-secondary text-secondary"
          } rounded-full font-serif transition-all duration-100 ease-linear`}
          onClick={() => setIsOpen(!isOpen)}
        >
          <p
            className={`${
              isOpen ? "rotate-45" : ""
            } transition-all duration-200 ease-linear`}
          >
            +
          </p>
        </button>
      </section>
      {isOpen && (
        <section className="font-grotesk px-12 md:text-lg text-sm text-white">
          {answer}
        </section>
      )}
    </div>
  );
};

export default FAQItem;
