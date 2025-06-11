import React from 'react';
import { secondProfileContent } from './secondProfileContent';
import tick from "/src/assets/home/greenTick.svg"
import './secondProfile.scss';

const SecondProfile: React.FC = () => {
    return (
        <div className="second-profile">
            <div className='second-profile__wrapper'>
                <div className="second-profile__top">
                    <div className="second-profile__top-left">
                        <img src={secondProfileContent.img} alt="Ash's-profile" />
                    </div>
                    <div className="second-profile__top-right">
                        <div className="second-profile__header">
                            <h3 className="name">{secondProfileContent.name}</h3>
                            <h4 className="title">{secondProfileContent.title}</h4>
                        </div>
                        <p className="description">{secondProfileContent.description}</p>
                        <div className="social-links">
                            {secondProfileContent.socialLinks.map((link) => (
                                <a key={link.id} href={link.url}>
                                    {/* Icon will be added later */}
                                </a>
                            ))}
                        </div>
                    </div>
                </div>
                    <span className='seperator'></span>
                <div className="second-profile__bottom">
                    <h3 className="heading">Professional Certifications</h3>
                    <span className="divider"></span>
                    <div className="certifications-grid">
                        {secondProfileContent.certifications.map((cert, index) => (
                            <div key={index} className="certification-item">
                                <div className="icon">
                                    <img src={tick} alt="check-mark-logo" />
                                </div>
                                <h4 className="title">{cert.title}</h4>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SecondProfile; 