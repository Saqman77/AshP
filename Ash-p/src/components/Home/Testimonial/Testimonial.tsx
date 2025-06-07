import React, { useState, useCallback, useEffect } from 'react';
import { useKeenSlider } from 'keen-slider/react';
import 'keen-slider/keen-slider.min.css';
import { testimonialContent } from './testimonialContent';
import { testimonialCarouselContent } from './testimonialCarouselContent';
import styles from './Testimonial.module.scss';

const Testimonial: React.FC = () => {
    const [currentSlide, setCurrentSlide] = useState(0);
    const [loaded, setLoaded] = useState(false);

    const [sliderRef, instanceRef] = useKeenSlider({
        initial: 0,
        loop: true,
        mode: "snap",
        slides: {
            perView: 1,
            spacing: 20,
        },
        slideChanged(slider) {
            setCurrentSlide(slider.track.details.rel);
        },
        created() {
            setLoaded(true);
        },
    });

    useEffect(() => {
        const interval = setInterval(() => {
            instanceRef.current?.next();
        }, 3000);

        return () => clearInterval(interval);
    }, [instanceRef]);

    const nextSlide = useCallback(() => {
        instanceRef.current?.next();
    }, [instanceRef]);

    const prevSlide = useCallback(() => {
        instanceRef.current?.prev();
    }, [instanceRef]);

    return (
        <section className={styles.testimonialSection}>
            <div className={styles.testimonialHeader}>
                <h2>{testimonialContent.heading}</h2>
                <p>{testimonialContent.description}</p>
            </div>

            <div className={styles.carouselContainer}>
                <button 
                    className={styles.navButton} 
                    onClick={prevSlide}
                    aria-label="Previous testimonial"
                >
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M15 18L9 12L15 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                </button>

                <div ref={sliderRef} className={`${styles.carousel} keen-slider`}>
                    {testimonialCarouselContent.map((testimonial, index) => (
                        <div key={index} className={`${styles.slide} keen-slider__slide`}>
                            <div className={styles.quoteIcon}>"</div>
                            <p className={styles.quote}>{testimonial.quote}</p>
                            <div className={styles.authorInfo}>
                                <h4>{testimonial.name}</h4>
                                <p>{testimonial.role}</p>
                            </div>
                        </div>
                    ))}
                </div>

                <button 
                    className={styles.navButton} 
                    onClick={nextSlide}
                    aria-label="Next testimonial"
                >
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M9 6L15 12L9 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                </button>
            </div>
        </section>
    );
};

export default Testimonial; 