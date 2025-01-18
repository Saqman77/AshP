import './horizontal.scss'
import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
const Horizontal = () => {
  return (
    <div className="h-container">
        <section className='h-wrapper'>
            <h1>Who we are?</h1>

            <div className="h-card" id='h-card1'>
                <img src="../Frame 21.svg" alt="" />
            </div>
            <div className="h-card" id='h-card2'>
                <img src="../Frame 21.svg" alt="" />
            </div>
            <div className="h-card" id='h-card3'>
                <img src="../Frame 21.svg" alt="" />
            </div>
            <div className="h-card" id='h-card4'>
                <img src="../Frame 21.svg" alt="" />
            </div>
        </section>
        <section className='outro'></section>
    </div>
  )
}

export default Horizontal