import React, { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import './Header.scss';
import logo from '../../assets/header/Frame 9.png';
import ContactUs from '../get-in-touch-button/ContactUs';

const Header: React.FC = () => {
  const [isHidden, setIsHidden] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      // Check if the user is scrolling up or down
      if (currentScrollY > lastScrollY) {
        setIsHidden(true); // Scrolling down
      } else {
        setIsHidden(false); // Scrolling up
      }

      // Check if the user has scrolled past the top
      setIsScrolled(currentScrollY > 0);

      setLastScrollY(currentScrollY);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [lastScrollY]);

  return (
    <header
      className={`header ${isHidden ? 'header-hidden' : ''} ${
        isScrolled ? 'header-blur' : 'header-transparent'
      }`}
    >
      <div className="logo">
        <img src={logo} alt="Logo" />
      </div>
      <nav className="nav">
        <ul>
          <li>
            <NavLink to="/" end className={({ isActive }) => (isActive ? 'header-active' : '')}>
              Home
            </NavLink>
          </li>
          <li>
            <NavLink to="/about" className={({ isActive }) => (isActive ? 'header-active' : '')}>
              About
            </NavLink>
          </li>
          <li>
            <NavLink to="/services" className={({ isActive }) => (isActive ? 'header-active' : '')}>
              Services
            </NavLink>
          </li>
        </ul>
        <ContactUs />
      </nav>
    </header>
  );
};

export default Header;
