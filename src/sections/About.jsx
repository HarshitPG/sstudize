import {
  CardBody,
  CardContainer,
  CardItem,
} from "../components/ui/CardContainer";

const About = () => {
  return (
    <div className="max-h-auto  h-screen max-h-auto bg-black ">
      <div className="p-2 md:pt-[10%] md:text-6xl text-4xl font-spaceGrotesk-bold mb-4 flex items-center justify-center text-[#97b8ff] ">
        <h1>Unleash the Power of Gradients</h1>
      </div>
      <div className=" px-4 lg:h-fit w-full min-w-screen  justify-center items-center lg:grid lg:grid-cols-3  lg:grid-rows-1  grid sm:grid-cols-2 sm:grid-rows-[45%,15%] gap-4 grid-cols-1 grid-rows-[25%,20%,20%] align-self-center">
        <div>
          <CardContainer className="inter-var">
            <CardBody className=" relative group/card  hover:shadow-2xl hover:shadow-emerald-500/[0.1] bg-black border-white/[0.2]  w-auto sm:w-[100%] h-auto rounded-xl p-6 border  ">
              <CardItem
                translateZ="50"
                className="lg:text-xl text-lg  font-spaceGrotesk-semibold text-[#97b8ff]"
              >
                Visual Appeal
              </CardItem>
              <CardItem
                as="p"
                translateZ="60"
                className=" lg:text-sm md:text-xs text-xs max-w-sm mt-2 font-spaceGrotesk-regular text-white"
              >
                Hover over this card to unleash the power of CSS perspective.
                Gradients add a modern touch to interfaces, making them visually
                engaging and appealing.
              </CardItem>
              <CardItem translateZ="100" className="w-full mt-4">
                {/* <img
                  src="https://w7.pngwing.com/pngs/403/269/png-transparent-react-react-native-logos-brands-in-colors-icon-thumbnail.png"
                  height="1000"
                  width="1000"
                  className="h-60 w-full object-cover rounded-xl group-hover/card:shadow-xl"
                  alt="thumbnail"
                /> */}
              </CardItem>
              <div className="flex justify-between items-center mt-10">
                {/* <CardItem
                  translateZ={20}
                  href="https://twitter.com/mannupaaji"
                  target="__blank"
                  className="px-4 py-2 rounded-xl text-xs font-normal text-white"
                >
                  Try now →
                </CardItem>
                <CardItem
                  translateZ={20}
                  as="button"
                  className="px-4 py-2 rounded-xl bg-black bg-white text-black text-white text-xs font-bold"
                >
                  Sign up
                </CardItem> */}
              </div>
            </CardBody>
          </CardContainer>
        </div>
        <div>
          <CardContainer className="inter-var">
            <CardBody className="relative group/card  hover:shadow-2xl hover:shadow-emerald-500/[0.1] bg-black border-white/[0.2] w-auto sm:w-[100%] h-auto rounded-xl p-6 border  ">
              <CardItem
                translateZ="50"
                className="lg:text-xl text-lg   font-spaceGrotesk-semibold text-[#97b8ff]"
              >
                Visual Appeal
              </CardItem>
              <CardItem
                as="p"
                translateZ="60"
                className=" lg:text-sm md:text-xs text-xs max-w-sm mt-2 font-spaceGrotesk-regular text-white"
              >
                Hover over this card to unleash the power of CSS perspective.
                Gradients add a modern touch to interfaces, making them visually
                engaging and appealing.
              </CardItem>
              <CardItem translateZ="100" className="w-full mt-4">
                {/* <img
                  src="https://w7.pngwing.com/pngs/403/269/png-transparent-react-react-native-logos-brands-in-colors-icon-thumbnail.png"
                  height="1000"
                  width="1000"
                  className="h-60 w-full object-cover rounded-xl group-hover/card:shadow-xl"
                  alt="thumbnail"
                /> */}
              </CardItem>
              <div className="flex justify-between items-center mt-10">
                {/* <CardItem
                  translateZ={20}
                  href="https://twitter.com/mannupaaji"
                  target="__blank"
                  className="px-4 py-2 rounded-xl text-xs font-normal text-white"
                >
                  Try now →
                </CardItem>
                <CardItem
                  translateZ={20}
                  as="button"
                  className="px-4 py-2 rounded-xl bg-black bg-white text-black text-white text-xs font-bold"
                >
                  Sign up
                </CardItem> */}
              </div>
            </CardBody>
          </CardContainer>
        </div>
        <div>
          <CardContainer className="inter-var">
            <CardBody className=" relative group/card  hover:shadow-2xl hover:shadow-emerald-500/[0.1] bg-black border-white/[0.2]  w-auto sm:w-[100%] h-auto rounded-xl p-6 border  ">
              <CardItem
                translateZ="50"
                className="lg:text-xl text-lg  font-spaceGrotesk-semibold text-[#97b8ff]"
              >
                Visual Appeal
              </CardItem>
              <CardItem
                as="p"
                translateZ="60"
                className="lg:text-sm md:text-xs text-xs max-w-sm mt-2 font-spaceGrotesk-regular text-white"
              >
                Hover over this card to unleash the power of CSS perspective.
                Gradients add a modern touch to interfaces, making them visually
                engaging and appealing.
              </CardItem>
              <CardItem translateZ="100" className="w-full mt-4">
                {/* <img
                  src="https://w7.pngwing.com/pngs/403/269/png-transparent-react-react-native-logos-brands-in-colors-icon-thumbnail.png"
                  height="1000"
                  width="1000"
                  className="h-60 w-full object-cover rounded-xl group-hover/card:shadow-xl"
                  alt="thumbnail"
                /> */}
              </CardItem>
              <div className="flex justify-between items-center mt-10">
                {/* <CardItem
                  translateZ={20}
                  href="https://twitter.com/mannupaaji"
                  target="__blank"
                  className="px-4 py-2 rounded-xl text-xs font-normal text-white"
                >
                  Try now →
                </CardItem>
                <CardItem
                  translateZ={20}
                  as="button"
                  className="px-4 py-2 rounded-xl bg-black bg-white text-black text-white text-xs font-bold"
                >
                  Sign up
                </CardItem> */}
              </div>
            </CardBody>
          </CardContainer>
        </div>
      </div>
    </div>
  );
};

export default About;
