import React, { useRef } from 'react'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import './FreedieSlider.scss'

gsap.registerPlugin(ScrollTrigger)

const FreedieSlider = () => {
    // Create refs for the container elements
    const containerRef = useRef(null);
    const activeSlideRef = useRef(null);

    useGSAP(() => {
        // Get all slides and active slide images using refs and gsap.utils.toArray
        const slides = gsap.utils.toArray<HTMLElement>(".slide", containerRef.current);
        const activeSlideImages = gsap.utils.toArray<HTMLImageElement>("img", activeSlideRef.current);

        const getInitialTranslateZ = (slide: HTMLElement): number => {
            const style = window.getComputedStyle(slide);
            const matrix = style.transform.match(/matrix3d\((.+)\)/);
            if (matrix) {
                const values = matrix[1].split(", ");
                const value = values[14];
                return value ? parseFloat(value) : 0;
            }
            return 0;
        }

        const mapRange = (value: number, inMin: number, inMax: number, outMin: number, outMax: number): number => {
            return ((value - inMin) * (outMax - outMin)) / (inMax - inMin) + outMin;
        }

        slides.forEach((slide, index) => {
            const intialZ = getInitialTranslateZ(slide);

            ScrollTrigger.create({
                trigger: containerRef.current,
                start: "top top",
                end: "bottom bottom",
                scrub: true,
                onUpdate: (self) => {
                    const progress = self.progress;
                    const zIncrement = progress * 22500;
                    const currentZ = intialZ + zIncrement;

                    let opacity;
                    if (currentZ > -2500) {
                        opacity = mapRange(currentZ, -2500, 0, 0.5, 1)
                    } else {
                        opacity = mapRange(currentZ, -5000, -2500, 0, 0.5)
                    }

                    slide.style.opacity = String(opacity)

                    slide.style.transform = `translateX(-50%) translateY(-50%) translateZ(${currentZ}px)`

                    if (currentZ < 100) {
                        gsap.to(activeSlideImages[index], 1.5, {
                            opacity: 1,
                            ease: "power3.out"
                        })
                    } else {
                        gsap.to(activeSlideImages[index], 1.5, {
                            opacity: 0,
                            ease: "power3.out"
                        })
                    }
                }

            })
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