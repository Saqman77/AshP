import React, { useRef, useState, useEffect } from 'react'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import './FreedieSlider.scss'
import { freedie } from '../freedyContent'

gsap.registerPlugin(ScrollTrigger)

// Add prop type for onItemClick
interface FreedieSliderProps {
    onItemClick: (index: number) => void;
    viewMode: 'slider' | 'list';
    setViewMode: (mode: 'slider' | 'list') => void;
}

// Update component signature to accept the prop
const FreedieSlider: React.FC<FreedieSliderProps> = ({ onItemClick, viewMode, setViewMode }) => {
    // Create refs for the container elements
    const containerRef = useRef(null);
    const [activeIndex, setActiveIndex] = useState(0);
    const imageSources = freedie.map(member => member.imgSrc);

    useGSAP(() => {
        // Get all slides and active slide images using refs and gsap.utils.toArray
        const slides = gsap.utils.toArray<HTMLElement>(".slide", containerRef.current);

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
            // 2250px per transition between slides
            (containerRef.current as HTMLElement).style.height = `${(slides.length - 1) * 2250 + 1}px`;
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
                end: `+=${(slides.length - 1) * 2250}`,
                pin: true,
                scrub: true,
            });
        }

        slides.forEach((slide, index) => {
            const intialZ = getInitialTranslateZ(slide);

            ScrollTrigger.create({
                trigger: containerRef.current,
                start: "top top",
                end: `+=${(slides.length - 1) * 2250}`,
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
                }
            })
        })

        // New: Track which slide is closest to the camera and setActiveIndex accordingly
        ScrollTrigger.create({
            trigger: containerRef.current,
            start: "top top",
            end: `+=${(slides.length - 1) * 2250}`,
            scrub: true,
            pin: true,
            onUpdate: (self) => {
                let maxZ = -Infinity;
                let activeIdx = 0;
                slides.forEach((slide, idx) => {
                    const style = window.getComputedStyle(slide);
                    const matrix = style.transform.match(/matrix3d\((.+)\)/);
                    let z = 0;
                    if (matrix) {
                        const values = matrix[1].split(", ");
                        z = values[14] ? parseFloat(values[14]) : 0;
                    }
                    // Find the slide with the highest z (closest to camera, but not behind)
                    if (z > maxZ && z < 100) {
                        maxZ = z;
                        activeIdx = idx;
                    }
                });
                setActiveIndex(activeIdx);
            }
        });

        // Your GSAP animations can go here
        // The context will be maintained within this component
    }, { scope: containerRef }); // Scope the animations to the entire container

    return (
        <div className="slider-container" ref={containerRef}>
            <div className="f-toggle-header">
                <div className='toggle-box'>
                    <button
                        className={viewMode === 'slider' ? 'active' : ''}
                        onClick={() => setViewMode('slider')}
                    >
                        Slider View
                    </button>
                    <span></span>
                    <button
                        className={viewMode === 'list' ? 'active' : ''}
                        onClick={() => setViewMode('list')}
                    >
                        List View
                    </button>
                </div>
            </div>
            <div className="slider">
                {freedie.map((member, idx) => {
                    // First slide is frontmost (Z=-2000), last is farthest back
                    const left = idx % 2 === 0 ? '30%' : '70%';
                    const zSpacing = 2500;
                    const zOffset = -2000;
                    const z = zOffset - (idx * zSpacing);
                    let opacity = 0;
                    if (idx === 0) opacity = 1;
                    else if (idx === 1) opacity = 0.5;
                    const slideId = `slide-${idx + 1}`;
                    return (
                        <div
                            className="slide"
                            id={slideId}
                            key={member.id}
                            style={{
                                position: 'absolute',
                                top: '50%',
                                left,
                                transform: `translateX(-50%) translateY(-50%) translateZ(${z}px)`,
                                opacity,
                                width: '400px',
                                height: '500px',
                                overflow: 'hidden',
                            }}
                            onClick={() => onItemClick(idx)}
                        >
                            <div className="slide-copy">
                                <p>{member.name}</p>
                                <p id="index">{member.role}</p>
                            </div>
                            <div className="slide-img">
                                <img src={member.imgSrc} alt={member.name} />
                            </div>
                        </div>
                    );
                })}
            </div>
        </div>
    )
}

export default FreedieSlider