import ContactUs from '../../get-in-touch-button/ContactUs';
import Schedule from '../../schedule/Schedule';
import './CTA.scss';
import { ctaContent } from './ctaContent';

const CTA: React.FC = () => {
    const highlightWords = (text: string) => {
        const parts = text.split(/(together\.)/);
        return parts.map((part, index) => {
            if (part === 'together.') {
                return (
                    <span key={index} className="highlight-together">
                        {part}
                        <span className="highlight-bg-together"></span>
                    </span>
                );
            } else if (part === 'let\'s work ') {
                return <span key={index} className="highlight-lets-work">{part}</span>;
            }
            return <span key={index}>{part}</span>; 
        });
    };

    return (
        <div className="cta-container">
            <div className="cta-content">
                <h2>{highlightWords(ctaContent.heading)}</h2>
                <p>{ctaContent.description}</p>
                <div className="cta-wrapper">
                    <ContactUs />
                    <Schedule />
                </div>
            </div>
        </div>
    );
};

export default CTA;