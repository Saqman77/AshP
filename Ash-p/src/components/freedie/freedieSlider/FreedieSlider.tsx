import React, { useRef } from 'react'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import './FreedieSlider.scss'

const FreedieSlider = () => {
  // Create refs for the container elements
  const containerRef = useRef(null);
  const activeSlideRef = useRef(null);

  useGSAP(() => {
    // Get all slides and active slide images using refs and gsap.utils.toArray
    const slides = gsap.utils.toArray(".slide", containerRef.current);
    const activeSlideImages = gsap.utils.toArray("img", activeSlideRef.current);

    const getInitialTranslateZ = (slide: HTMLElement): number => {
        const style = window.getComputedStyle(slide);
        const matrix = style.transform.match(/matrix3d\((.+)\)/);
        if(matrix){
            const values = matrix[1].split(", ");
            const value = values[14];
            return value ? parseFloat(value) : 0;
        }
        return 0;
    }

    const mapRange = (value: number, inMin: number, inMax: number, outMin: number, outMax: number): number => {
        return ((value - inMin)*(outMax - outMin))/(inMax - inMin) + outMin;
    }

    slides.forEach((slide, index) =>{
        const intialZ = getInitialTranslateZ(slide as HTMLElement);
    })
    // Your GSAP animations can go here
    // The context will be maintained within this component
  }, { scope: containerRef }); // Scope the animations to the entire container

  return (
    <div className="slider-container" ref={containerRef}>
        <div className="active-slide" ref={activeSlideRef}>
            <img src='./dan.jpg' alt="" />
            <img src='./dan.jpg' alt="" />
            <img src='./dan.jpg' alt="" />
            <img src='./dan.jpg' alt="" />
            <img src='./dan.jpg' alt="" />
            <img src='./dan.jpg' alt="" />
            <img src='./dan.jpg' alt="" />
            <img src='./dan.jpg' alt="" />
            <img src='./dan.jpg' alt="" />
            <img src='./dan.jpg' alt="" />
        </div>
        <div className="slider">
            <div className='slide' id="slide-1">
                <div className="slide-copy">
                    <p>Neo Elegance</p>
                    <p id="index">(es 9342 yaba)</p>
                </div>
                <div className="slide-img">
                    <img src="./dan.jpg" alt="" />
                </div>
            </div>
            <div className='slide' id="slide-2">
                <div className="slide-copy">
                    <p>Neo Elegance</p>
                    <p id="index">(es 9342 yaba)</p>
                </div>
                <div className="slide-img">
                    <img src="./dan.jpg" alt="" />
                </div>
            </div>
            <div className='slide' id="slide-3">
                <div className="slide-copy">
                    <p>Neo Elegance</p>
                    <p id="index">(es 9342 yaba)</p>
                </div>
                <div className="slide-img">
                    <img src="./dan.jpg" alt="" />
                </div>
            </div>
            <div className='slide' id="slide-4">
                <div className="slide-copy">
                    <p>Neo Elegance</p>
                    <p id="index">(es 9342 yaba)</p>
                </div>
                <div className="slide-img">
                    <img src="./dan.jpg" alt="" />
                </div>
            </div>
            <div className='slide' id="slide-5">
                <div className="slide-copy">
                    <p>Neo Elegance</p>
                    <p id="index">(es 9342 yaba)</p>
                </div>
                <div className="slide-img">
                    <img src="./dan.jpg" alt="" />
                </div>
            </div>
            <div className='slide' id="slide-6">
                <div className="slide-copy">
                    <p>Neo Elegance</p>
                    <p id="index">(es 9342 yaba)</p>
                </div>
                <div className="slide-img">
                    <img src="./dan.jpg" alt="" />
                </div>
            </div>
            <div className='slide' id="slide-7">
                <div className="slide-copy">
                    <p>Neo Elegance</p>
                    <p id="index">(es 9342 yaba)</p>
                </div>
                <div className="slide-img">
                    <img src="./dan.jpg" alt="" />
                </div>
            </div>
            <div className='slide' id="slide-8">
                <div className="slide-copy">
                    <p>Neo Elegance</p>
                    <p id="index">(es 9342 yaba)</p>
                </div>
                <div className="slide-img">
                    <img src="./dan.jpg" alt="" />
                </div>
            </div>
            <div className='slide' id="slide-9">
                <div className="slide-copy">
                    <p>Neo Elegance</p>
                    <p id="index">(es 9342 yaba)</p>
                </div>
                <div className="slide-img">
                    <img src="./dan.jpg" alt="" />
                </div>
            </div>
            <div className='slide' id="slide-10">
                <div className="slide-copy">
                    <p>Neo Elegance</p>
                    <p id="index">(es 9342 yaba)</p>
                </div>
                <div className="slide-img">
                    <img src="./dan.jpg" alt="" />
                </div>
            </div>
        </div>
    </div>
  )
}

export default FreedieSlider