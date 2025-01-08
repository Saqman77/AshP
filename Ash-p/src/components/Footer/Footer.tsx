import { Link } from 'react-router-dom';
import './Footer.scss';
import logo from '../../assets/header/Frame 9.png';
import linkeding from '../../assets/footer/linkedin.png'
import instagram from '../../assets/footer/instagram.png'
import twitter from '../../assets/footer/twitter.png'

const Footer: React.FC = () => {
  return (
    <footer className="footer">
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
