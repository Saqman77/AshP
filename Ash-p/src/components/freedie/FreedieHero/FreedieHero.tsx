import React from 'react';
import styles from './FreedieHero.module.scss';
import { freedieHeroContent } from './content';

const FreedieHero: React.FC = () => {
    return (
        <div className={styles.freedieHero}>
            <h2 className={styles.mainHeading}>
                {freedieHeroContent.mainHeading.default}
                <span className={styles.highlighted}>
                    <span className={styles.highlightedText}>
                        {freedieHeroContent.mainHeading.highlighted}
                    </span>
                    <span className={styles.highlightedBg}></span>
                </span>
            </h2>
            <h3 className={styles.subHeading}>
                {freedieHeroContent.subHeading}
            </h3>
            <div className={styles.card}>
                <p className={styles.cardText}>
                    {freedieHeroContent.cardText}
                </p>
            </div>
        </div>
    );
};

export default FreedieHero; 