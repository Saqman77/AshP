import './Hero.scss';
import { heroContent } from './heroContent';

const Hero: React.FC = () => {
  const highlightWords = (text: string) => {
    const parts = text.split(/(two decades|editing)/);
    return parts.map((part, index) => {
      if (part === 'two decades' || part === 'editing') {
        return <span key={index} className="highlight">{part}</span>;
      }
      return <span key={index} className="normal">{part}</span>;
    });
  };

  return (
    <div className="hero-container">
      <div className="hero-main">
        <div className="content-wrapper">
          <h1>{highlightWords(heroContent.heading)}</h1>
        </div>
      </div>
    </div>
  );
};

export default Hero; 