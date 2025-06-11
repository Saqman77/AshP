import React from 'react';
import { aboutSectionCardsContent } from './AboutSectionCardsContent';
import './aboutSectionCards.scss';

const AboutSectionCards: React.FC = () => {
    return (
        <div className="aboutSectionCards">
            <div className="card firstCard">
                <p>
                    <span className="highlighted">{aboutSectionCardsContent.firstCard.highlightedText}</span>
                    {aboutSectionCardsContent.firstCard.paragraph.replace(aboutSectionCardsContent.firstCard.highlightedText, '')}
                </p>
                <div className="imageContainer">
                    <div className="circularImage"></div>
                </div>
            </div>

            <div className="card secondCard">
                <p>
                    <span className="highlighted">{aboutSectionCardsContent.secondCard.highlightedText}</span>
                    {aboutSectionCardsContent.secondCard.paragraph.replace(aboutSectionCardsContent.secondCard.highlightedText, '')}
                </p>
                <div className="imageContainer">
                    <div className="circularImage"></div>
                </div>
            </div>

            <div className="card thirdCard">
                <p>{aboutSectionCardsContent.thirdCard.paragraph}</p>
                <div className="imageContainer">
                    <div className="circularImage left"></div>
                    <div className="circularImage right"></div>
                </div>
            </div>
        </div>
    );
};

export default AboutSectionCards; 