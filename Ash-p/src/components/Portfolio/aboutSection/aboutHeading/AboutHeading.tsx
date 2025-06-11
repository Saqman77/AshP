import React from 'react';
import aboutHeadingContent from './AboutHeadingContent';
import './AboutHeading.scss';

interface AboutSectionHeadingProps {
    spark: string;
}

const AboutHeading: React.FC<AboutSectionHeadingProps> = ({ spark }) => {
    return (
        <div className="aboutHeading">
            <h1>{aboutHeadingContent.mainHeading}</h1>
        </div>
    );
};

export default AboutHeading; 