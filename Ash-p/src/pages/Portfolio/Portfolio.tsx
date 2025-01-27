
// import { useEffect } from "react";
import Horizontal from "../../components/Portfolio/Horizontal"
import Scroll from "../../components/Portfolio/Scroll"
import './Portfolio.scss'
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";
import { useEffect } from "react";

gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);


interface PortfolioProps {
  key: string;
}

const Portfolio = ({ key }: PortfolioProps) => {
  
 // Empty dependency array ensures this runs only on mount and unmount

 useEffect(()=>{
    const headerP = document.querySelector('.header-blur') as HTMLElement
    const nav = document.querySelector('.nav ul') as HTMLElement
    const btns = document.querySelectorAll('.menu-btn span') as NodeListOf<HTMLElement>;
    if (headerP) {
      headerP.style.background = 'transparent';
      btns.forEach(btn => btn.style.backgroundColor = '#ffffff');
      nav.style.color = '#ffffff';
    }

    return () => {
      if (headerP) {
        headerP.style.background = ''; // Reset to its original value
        nav.style.color = '';
        btns.forEach(btn => btn.style.backgroundColor = '');
      }
    };

 },[])




  return (
    <div className="a-container" key={key}>
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