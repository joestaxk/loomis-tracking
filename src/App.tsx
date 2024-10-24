import { useEffect } from "react"
import Contact from "./components/landingpage/contact"
import Faq from "./components/landingpage/faq"
import Hero from "./components/landingpage/hero"
import WhyUsSection from "./components/landingpage/whyUsSection"
import LocomotiveScroll from 'locomotive-scroll';
import 'animate.css';


function App() {
  useEffect(() => {
   new LocomotiveScroll(
      {
        lenisOptions: {
          wrapper: window,
          content: document.documentElement,
          lerp: 0.1,
          duration: 1.2,
          orientation: 'vertical',
          gestureOrientation: 'vertical',
          smoothWheel: true,
          smoothTouch: false,
          wheelMultiplier: 1,
          touchMultiplier: 2,
          normalizeWheel: true,
          easing: (t: any) => Math.min(1, 1.001 - Math.pow(2, -10 * t)), // https://www.desmos.com/calculator/brs54l4xou
      } as any
      }
    );
  }, [])
 return (
  <div className="relative">
  <div className="w-[1px]  absolute top-52 left-20  bg-[#a1a1a1] z-10 h-[4000px] hidden xl:block"></div>
    <Hero />
    <WhyUsSection />
     <Contact />
    <Faq />
  </div>
 )
}

export default App
