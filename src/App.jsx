import "./App.css";
import About from "./sections/About";
import About2 from "./sections/About2";
import About3 from "./sections/About3";
import About4 from "./sections/About4";
import About5 from "./sections/About5";
import About6 from "./sections/About6";
import About7 from "./sections/About7";
import About8 from "./sections/About8";
import About9 from "./sections/About9";
import Hero from "./sections/Hero";
import BaseWrapper from "./wrappers/BaseWrapper";
// import MainWrapper from "./wrappers/MainWrapper";

function App() {
  return (
    <>
      <BaseWrapper>
        {/* <MainWrapper> */}
        <Hero />
        <About />
        <About2 />
        <About3 />
        <About4 />
        <About5 />
        <About6 />
        <About7 />
        <About8 />
        <About9 />
        {/* </MainWrapper> */}
      </BaseWrapper>
    </>
  );
}

export default App;
