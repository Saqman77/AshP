import React, { useState, useEffect, useRef } from 'react';
import { testimonialContent } from './testimonialContent';
import { testimonialCarouselContent } from './testimonialCarouselContent';
import styles from './Testimonial.module.scss';

const Testimonial: React.FC = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [isAutoPlaying, setIsAutoPlaying] = useState(true);
    const [isDragging, setIsDragging] = useState(false);
    const [startX, setStartX] = useState(0);
    const [scrollLeft, setScrollLeft] = useState(0);
    const carouselRef = useRef<HTMLDivElement>(null);

    const nextSlide = () => {
        setCurrentIndex((prevIndex) => 
            prevIndex === testimonialCarouselContent.length - 1 ? 0 : prevIndex + 1
        );
    };

    const prevSlide = () => {
        setCurrentIndex((prevIndex) => 
            prevIndex === 0 ? testimonialCarouselContent.length - 1 : prevIndex - 1
        );
    };

    useEffect(() => {
        let interval: NodeJS.Timeout;
        if (isAutoPlaying) {
            interval = setInterval(nextSlide, 5000);
        }
        return () => clearInterval(interval);
    }, [isAutoPlaying]);

    const handleNavigationClick = (direction: 'prev' | 'next') => {
        setIsAutoPlaying(false);
        if (direction === 'prev') {
            prevSlide();
        } else {
            nextSlide();
        }
    };

    const handleMouseDown = (e: React.MouseEvent) => {
        setIsDragging(true);
        setStartX(e.pageX - (carouselRef.current?.offsetLeft || 0));
        setScrollLeft(carouselRef.current?.scrollLeft || 0);
        setIsAutoPlaying(false);
    };

    const handleMouseUp = () => {
        setIsDragging(false);
    };

    const handleMouseMove = (e: React.MouseEvent) => {
        if (!isDragging) return;
        e.preventDefault();
        const x = e.pageX - (carouselRef.current?.offsetLeft || 0);
        const walk = (x - startX) * 2;
        if (carouselRef.current) {
            carouselRef.current.scrollLeft = scrollLeft - walk;
        }
    };

    const handleMouseLeave = () => {
        setIsDragging(false);
    };

    return (
        <section className={styles.testimonialSection}>
            <div className={styles.testimonialHeader}>
                <h2>{testimonialContent.heading}</h2>
                <p>{testimonialContent.description}</p>
            </div>

            <div className={styles.carouselContainer}>
                <button 
                    className={styles.navButton} 
                    onClick={() => handleNavigationClick('prev')}
                    aria-label="Previous testimonial"
                >
                    {/* Add your left navigation icon here */}
                    ←
                </button>

                <div 
                    ref={carouselRef}
                    className={styles.carouselContent}
                    onMouseDown={handleMouseDown}
                    onMouseUp={handleMouseUp}
                    onMouseMove={handleMouseMove}
                    onMouseLeave={handleMouseLeave}
                >
                    <div className={styles.quoteIcon}>
                        {/* Add your quote icon here */}
                        "
                    </div>
                    <div 
                        className={styles.testimonialCard}
                        style={{
                            transform: `translateX(-${currentIndex * 100}%)`,
                            transition: isDragging ? 'none' : 'transform 0.5s ease-in-out'
                        }}
                    >
                        {testimonialCarouselContent.map((testimonial, index) => (
                            <div key={index} className={styles.testimonialSlide}>
                                <p className={styles.quote}>{testimonial.quote}</p>
                                <div className={styles.authorInfo}>
                                    <h4>{testimonial.name}</h4>
                                    <p>{testimonial.role}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                <button 
                    className={styles.navButton} 
                    onClick={() => handleNavigationClick('next')}
                    aria-label="Next testimonial"
                >
                    {/* Add your right navigation icon here */}
                    →
                </button>
            </div>
        </section>
    );
};

export default Testimonial; 