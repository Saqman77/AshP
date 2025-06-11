import React from 'react';
import { profileContent } from './firstProfileContent';
import './Profile.scss';

const Profile: React.FC = () => {
    return (
        <div className="first-profile">
            <div className='first-profile__wrapper'>
                <div className="first-profile__top">
                    <div className="first-profile__top-left">
                        {/* Image will be added later */}
                    </div>
                    <div className="first-profile__top-right">
                        <div className="first-profile__header">
                            <h3 className="name">{profileContent.name}</h3>
                            <h4 className="title">{profileContent.title}</h4>
                        </div>
                        <p className="description">{profileContent.description}</p>
                        <div className="social-links">
                            {profileContent.socialLinks.map((link) => (
                                <a key={link.id} href={link.url}>
                                    {/* Icon will be added later */}
                                </a>
                            ))}
                        </div>
                    </div>
                </div>
                    <span className='seperator'></span>
                <div className="first-profile__bottom">
                    <h3 className="heading">Professional Certifications</h3>
                    <span className="divider"></span>
                    <div className="certifications-grid">
                        {profileContent.certifications.map((cert, index) => (
                            <div key={index} className="certification-item">
                                <div className="icon">
                                    {/* Icon will be added later */}
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

export default Profile; 