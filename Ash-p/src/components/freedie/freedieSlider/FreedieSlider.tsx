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
    const [activeIndex, setActiveIndex] = React.useState(0);
    const imageSources = [
        './dan.jpg', './dan.jpg', './dan.jpg', './dan.jpg', './dan.jpg',
        './dan.jpg', './dan.jpg', './dan.jpg', './dan.jpg', './dan.jpg'
    ];

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

        // Set the container height based on the scroll duration needed for all slides
        if (containerRef.current) {
            // 2250px per slide as an example, adjust as needed
            (containerRef.current as HTMLElement).style.height = `${slides.length * 2250}px`;
        }

        // Pin the .slider element, not the full container
        let sliderEl: HTMLElement | null = null;
        if (containerRef.current && 'querySelector' in containerRef.current) {
            sliderEl = (containerRef.current as HTMLElement).querySelector('.slider');
        }
        if (sliderEl) {
            ScrollTrigger.create({
                trigger: sliderEl,
                start: "top top",
                end: `+=${slides.length * 2250}`,
                pin: true,
                scrub: true,
            });
        }

        // Pin the .active-slide as well
        let activeSlideEl: HTMLElement | null = null;
        if (containerRef.current && 'querySelector' in containerRef.current) {
            activeSlideEl = (containerRef.current as HTMLElement).querySelector('.active-slide');
        }
        if (activeSlideEl) {
            ScrollTrigger.create({
                trigger: activeSlideEl,
                start: "top top",
                end: `+=${slides.length * 2250}`,
                pin: true,
                scrub: true,
            });
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
                        setActiveIndex(index);
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
            <div
                className="active-slide"
                ref={activeSlideRef}
                style={{
                    backgroundImage: `url(${imageSources[activeIndex]})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    width: '100%',
                    height: '100vh',
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    zIndex: 0,
                    opacity: 0.35,
                    overflow: 'hidden',
                }}
            >
                {/* Blur overlay for background image */}
                <div
                    style={{
                        position: 'absolute',
                        top: 0,
                        left: 0,
                        width: '100%',
                        height: '100%',
                        backdropFilter: 'blur(50px)',
                        WebkitBackdropFilter: 'blur(50px)',
                        zIndex: 1,
                        pointerEvents: 'none',
                    }}
                />
                {/* Pre-render images for performance, but keep them hidden */}
                {imageSources.map((src, idx) => (
                    <img
                        key={idx}
                        src={src}
                        alt=""
                        style={{ display: 'none' }}
                    />
                ))}
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