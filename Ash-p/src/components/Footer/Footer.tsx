import { Link } from 'react-router-dom';
import './Footer.scss';
import logo from '../../assets/header/Frame 9.png';
import linkeding from '../../assets/footer/linkedin.png'
import instagram from '../../assets/footer/instagram.png'
import twitter from '../../assets/footer/twitter.png'

const Footer: React.FC = () => {
  return (
    <footer className="footer">
      <div className="gear-container">
        <svg width="378" height="376" viewBox="0 0 378 376" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M189 30L212.7 0L228.1 34.9L258.5 11.8L264.8 49.4L299.9 34.6L296.7 72.6L334.4 66.9L321.8 103L359.8 106.9L338.6 138.7L374.4 151.9L346 177.4L377.4 199.1L343.5 216.7L368.5 245.6L331.3 254.2L348.4 288.4L310.2 287.5L318.2 324.8L281.5 314.5L279.9 352.7L246.9 333.5L235.9 370.1L208.7 343.3L189 376L169.3 343.3L142.1 370.1L131.1 333.5L98.0996 352.7L96.4996 314.5L59.7996 324.8L67.7996 287.5L29.5996 288.4L46.6996 254.2L9.49961 245.6L34.4996 216.7L0.599609 199.1L31.9996 177.4L3.59961 151.9L39.3996 138.7L18.1996 106.9L56.1996 103L43.5996 66.9L81.2996 72.6L78.0996 34.6L113.2 49.4L119.5 11.8L149.9 34.9L165.3 0L189 30Z" fill="white"/>
        </svg>
      </div>
      <div className="footer-container">
        {/* Logo Section */}
        <div className="footer-logo">
          <Link to="/">
            <img src={logo} alt="main-logo" className="logo" />
          </Link>
        </div>

        {/* Navigation Links */}
        <nav className="footer-nav">
          <ul>
            <li>
              <Link to="/privacy-policy">Privacy Policy</Link>
            </li>
            <li>
              <Link to="/terms-of-service">Terms of Service</Link>
            </li>
            <li>
              <Link to="/contact">Contact Us</Link>
            </li>
          </ul>
        </nav>

        {/* Social Links */}
        <div className="footer-social">
          <ul>
            <li>
              <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer" className='social'>
                <img src={twitter} alt="twitter-logo" className='social-img' />
              </a>
            </li>
            <li>
              <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer" className='social'>
                <img src={instagram} alt="instagram-logo" className='social-img' />
              </a>
            </li>
            <li>
              <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer" className='social'>
                <img src={linkeding} alt="linkedin-logo" className='social-img' />
              </a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
