import React from 'react';
import { aboutSectionCardsContent } from './AboutSectionCardsContent';
import './aboutSectionCards.scss';

interface AboutSectionCardsProps {
    spark: string;
}

interface CardContent {
    paragraph: string;
    highlightedText?: string;
}

interface Card {
    content: CardContent;
    className: string;
}

const AboutSectionCards: React.FC<AboutSectionCardsProps> = ({ spark }) => {
    const cards: Card[] = [
        { content: aboutSectionCardsContent.firstCard, className: 'firstCard' },
        { content: aboutSectionCardsContent.secondCard, className: 'secondCard' },
        { content: aboutSectionCardsContent.thirdCard, className: 'thirdCard' }
    ];

    return (
        <div className="aboutSectionCards">
            {cards.map((card, index) => (
                <div key={index} className={`card ${card.className}`}>
                    <div className="sparkle big">
                        <img src={spark} alt="" />
                    </div>
                    <p>
                        {card.content.highlightedText ? (
                            <>
                                <span className="highlighted">{card.content.highlightedText}</span>
                                {card.content.paragraph.replace(card.content.highlightedText, '')}
                            </>
                        ) : (
                            card.content.paragraph
                        )}
                    </p>
                    <div className="imageContainer">
                        {card.className === 'thirdCard' ? (
                            <>
                                <div className="circularImage left"></div>
                                <div className="circularImage right"></div>
                            </>
                        ) : (
                            <div className="circularImage"></div>
                        )}
                    </div>
                </div>
            ))}
        </div>
    );
};

export default AboutSectionCards; 