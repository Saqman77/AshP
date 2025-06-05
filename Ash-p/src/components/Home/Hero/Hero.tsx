import ContactUs from '../../get-in-touch-button/ContactUs';
import Schedule from '../../schedule/Schedule';
import './Hero.scss';
import { heroContent } from './heroContent';
import downArrow from '/src/assets/home/arrow-down.svg';

const Hero: React.FC = () => {
  const highlightWords = (text: string) => {
    const parts = text.split(/(two decades|editing)/);
    return parts.map((part, index) => {
      if (part === 'two decades' || part === 'editing') {
        return (
          <span key={index} className="highlight-wrapper">
            <span className="highlight-bg"></span>
            <span className="highlight">{part}</span>
          </span>
        );
      }
      return <span key={index} className="normal">{part}</span>;
    });
  };

  return (
    <div className="hero-container">
      <div className="hero-main">
        <div className="content-wrapper">
          <h1>{highlightWords(heroContent.heading)}</h1>
          <div className="cta-wrapper">
            <ContactUs/>
            <Schedule />
          </div>
          <div className="hero-box">
            <p className="scroll-down">{heroContent.scrollDown}</p>
            <div className="arrow-wrapper">
              <img src={downArrow} alt="down-arrow" className="down-arrow" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero; 