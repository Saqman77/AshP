import React from 'react';
import './WishlistCard.scss';

interface WishlistCardProps {
    type: 'compatible' | 'incompatible';
    label: string;
    labelIcon: string;
    labelColor: string;
    title: string;
    icon: string;
    fiction?: {
        icon: string;
        items: string[];
    };
    nonfiction?: {
        icon: string;
        items: string[];
    };
    allGenres?: {
        icon: string;
        items: string[];
    };
    description?: string;
    allGenresLabel?: string;
    fictionTitle?: string;
    nonfictionTitle?: string;
}

const WishlistCard: React.FC<WishlistCardProps> = ({
    type,
    label,
    labelIcon,
    labelColor,
    title,
    icon,
    fiction,
    nonfiction,
    allGenres,
    description,
    allGenresLabel,
    fictionTitle,
    nonfictionTitle
}) => {
    return (
        <div className={`wishlist-card ${type}`}>
            <div className="card-header-row">
                <span className={`label-icon ${labelColor}`}>{labelIcon}</span>
                <span className={`label-text ${labelColor}`}>{label}</span>
            </div>
            {type === 'incompatible' && description && (
                <div className="card-description">{description}</div>
            )}
            {type === 'incompatible' && allGenresLabel && (
                <div className="all-genres-label">{allGenresLabel}</div>
            )}
            <div className="card-content">
                {type === 'compatible' && fiction && nonfiction && (
                    <>
                        <div className="section">
                            <div className="section-header">
                                <span className="icon">{fiction.icon}</span>
                                <h4>{fictionTitle}</h4>
                            </div>
                            <ul className="bullets-grid">
                                {fiction.items.map((item, index) => (
                                    <li key={index}>{item}</li>
                                ))}
                            </ul>
                        </div>
                        <div className="section">
                            <div className="section-header">
                                <span className="icon">{nonfiction.icon}</span>
                                <h4>{nonfictionTitle}</h4>
                            </div>
                            <ul className="bullets-grid">
                                {nonfiction.items.map((item, index) => (
                                    <li key={index}>{item}</li>
                                ))}
                            </ul>
                        </div>
                    </>
                )}
                {type === 'incompatible' && allGenres && (
                    <div className="section">
                        <div className="section-header incompatible-sec">
                        </div>
                        <ul className="bullets-grid">
                            {allGenres.items.map((item, index) => (
                                <li key={index}>{item}</li>
                            ))}
                        </ul>
                    </div>
                )}
            </div>
        </div>
    );
};

export default WishlistCard; 