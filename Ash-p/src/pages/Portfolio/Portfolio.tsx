
import { useEffect } from "react";
import Horizontal from "../../components/Portfolio/Horizontal"
import Scroll from "../../components/Portfolio/Scroll"
import './Portfolio.scss'
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";

gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);


const Portfolio = () => {

  useEffect(() => {
    // Add the classes to <body> and <html>
    document.body.classList.add("active");
    document.documentElement.classList.add("active");

    // Cleanup function to remove the classes when the component is unmounted
    return () => {
      document.body.classList.remove("active");
      document.documentElement.classList.remove("active");
    };
  }, []); // Empty dependency array ensures this runs only on mount and unmount




  return (
    <div className="a-container">
      {/* <h1
        style={{
          position:'fixed',
          color: 'red',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          zIndex: '99999',
          boxShadow: 'inset 0px 0px 4px 8px rgba(255, 0, 0, 0.17)',
          fontSize: '5vw',
          opacity: '0.7'
        }}

      >
        Under construction
      </h1> */}
      <Horizontal/>
      <Scroll/>
    </div>
  )
}

export default Portfolio