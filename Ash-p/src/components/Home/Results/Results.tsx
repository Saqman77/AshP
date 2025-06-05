import React from 'react';
import { resultsContent } from './resultsContent';
import './Results.scss';

const Results: React.FC = () => {
    return (
        <section className="results-section">
            <h2 className="results-heading">{resultsContent.heading}</h2>
            <div className="results-cards">
                {resultsContent.cards.map((card, index) => (
                    <div key={index} className="result-card">
                        <div className="card-top">
                            <div className="card-icon">{card.icon}</div>
                            <h3 className="card-title">{card.title}</h3>
                        </div>
                        <p className="card-description">{card.description}</p>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Results; 