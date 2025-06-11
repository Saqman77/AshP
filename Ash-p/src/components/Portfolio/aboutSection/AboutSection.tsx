import React from 'react';
import { aboutSectionContent } from './aboutSectionContent';
import AboutSectionCards from './aboutSectionCards/AboutSectionCards';
import './aboutSection.scss';

const AboutSection: React.FC = () => {
    return (
        <section className="aboutSection">
            <h2 className="smallHeading">{aboutSectionContent.smallHeading}</h2>
            
            <h1 className="mainHeading">
                <span className="since">{aboutSectionContent.mainHeading.since}</span>{' '}
                <span className="year">{aboutSectionContent.mainHeading.year}</span>
            </h1>

            <p className="firstParagraph">
                <span className="companyName">{aboutSectionContent.firstParagraph.companyName}</span>{' '}
                <span className="serviceName">{aboutSectionContent.firstParagraph.serviceName}</span>
                <span className="description">{aboutSectionContent.firstParagraph.description}</span>
            </p>

            <p className="secondParagraph">
                {aboutSectionContent.secondParagraph.start}
                <span className="familyRun">{aboutSectionContent.secondParagraph.familyRun}</span>
                {aboutSectionContent.secondParagraph.middle}
                <span className="bestSelling">{aboutSectionContent.secondParagraph.bestSelling}</span>
                {aboutSectionContent.secondParagraph.authors}
                <span className="awardWinning">{aboutSectionContent.secondParagraph.awardWinning}</span>{' '}
                <span className="publisher">{aboutSectionContent.secondParagraph.publisher}</span>
            </p>

            <AboutSectionCards />
        </section>
    );
};

export default AboutSection; 