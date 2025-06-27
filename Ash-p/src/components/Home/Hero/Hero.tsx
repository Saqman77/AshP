import ContactUs from '../../get-in-touch-button/ContactUs';
import Schedule from '../../schedule/Schedule';
import './Hero.scss';
import { heroContent } from './heroContent';
import downArrow from '/src/assets/home/arrow-down.svg';
import React, { useEffect, useState } from 'react';

const Hero: React.FC = () => {
    const highlightWords = (text: string) => {
        const parts = text.split(/(two decades|editing)/);
        return parts.map((part, index) => {
            if (part === 'two decades' || part === 'editing') {
                return (
                    <span key={index} className="highlight-wrapper">
                        <span className="highlight-bg"></span>
                        <span className="highlight">{part}</span>
                    </span>
                );
            }
            return <span key={index} className="normal">{part}</span>;
        });
    };

    // Animated message state
    const [messageStage, setMessageStage] = useState<'hidden' | 'icon' | 'expanded' | 'retracted'>('hidden');
    useEffect(() => {
        setMessageStage('icon');
        const expandTimeout = setTimeout(() => setMessageStage('expanded'), 200);
        const retractTimeout = setTimeout(() => setMessageStage('retracted'), 2200);
        const hideTimeout = setTimeout(() => setMessageStage('hidden'), 4000);
        return () => {
            clearTimeout(expandTimeout);
            clearTimeout(retractTimeout);
            clearTimeout(hideTimeout);
        };
    }, []);

    return (
        <>
            {/* Animated Message Box */}
            <div className={`hero-message-box ${messageStage}`}>
                <span className="hero-message-icon">
                    {/* Standard Accessibility SVG icon */}
                    <svg width="30" height="33" viewBox="0 0 30 33" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M15 6.60001C15.9167 6.60001 16.7011 6.27716 17.3533 5.63146C18.0056 4.98576 18.3322 4.20861 18.3333 3.30001C18.3344 2.39141 18.0078 1.61481 17.3533 0.970211C16.6989 0.325611 15.9144 0.00221115 15 1.11486e-05C14.0856 -0.00218885 13.3006 0.321211 12.645 0.970211C11.9894 1.61921 11.6633 2.39581 11.6667 3.30001C11.67 4.20421 11.9961 4.98136 12.645 5.63146C13.2939 6.28156 14.0789 6.60441 15 6.60001ZM20 33V11.55H30V8.25001H1.07288e-06V11.55H10V33H13.3333V23.1H16.6667V33H20Z" fill="#C9549D" />
                    </svg>

                </span>
                <span className="hero-message-text">Accessibility enabled</span>
            </div>
            <div className="hero-container">
                <div className="hero-main">
                    <div className="content-wrapper">
                        <h1>{highlightWords(heroContent.heading)}</h1>
                        <div className="cta-wrapper">
                            <ContactUs />
                            <Schedule />
                        </div>
                        <div className="hero-box">
                            <p className="scroll-down">{heroContent.scrollDown}</p>
                            <div className="arrow-wrapper">
                                <img src={downArrow} alt="down-arrow" className="down-arrow" />
                            </div>
                        </div>
                    </div>
                    <div className="hero-bg">
                        <div className="top-left">
                            <svg width="218" height="225" viewBox="0 0 218 225" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M134.467 112.5C287.266 112.5 198.148 -30.6894 121.718 92.0682C198.088 -30.6894 19.8523 -30.6894 96.2817 92.0682C19.9121 -30.6894 -69.2057 112.5 83.5335 112.5C-69.2656 112.5 19.8523 255.689 96.2817 132.932C19.9121 255.689 198.148 255.689 121.718 132.932C198.088 255.745 287.206 112.5 134.467 112.5Z" fill="#FCE4E4" />
                            </svg>
                        </div>
                        <div className="bottom-right">
                            <svg width="261" height="261" viewBox="0 0 261 261" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M261 130.5C242.98 112.48 219.397 103.502 195.75 103.502C212.442 86.8103 222.748 63.7326 222.748 38.2522C197.267 38.2522 174.19 48.5581 157.498 65.25C157.498 41.6664 148.52 18.0196 130.5 0C112.48 18.0196 103.502 41.6032 103.502 65.25C86.8103 48.5581 63.7326 38.2522 38.2522 38.2522C38.2522 63.7326 48.5581 86.8103 65.25 103.502C41.6664 103.502 18.0196 112.48 0 130.5C18.0196 148.52 41.6032 157.498 65.25 157.498C48.5581 174.19 38.2522 197.267 38.2522 222.748C63.7326 222.748 86.8103 212.442 103.502 195.75C103.502 219.397 112.48 242.98 130.5 261C148.52 242.98 157.498 219.397 157.498 195.75C174.19 212.442 197.267 222.748 222.748 222.748C222.748 197.267 212.442 174.19 195.75 157.498C219.397 157.561 242.98 148.52 261 130.5Z" fill="#C2BFD6" />
                            </svg>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Hero; 