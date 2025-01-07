import { NavLink } from 'react-router-dom';
import './Header.scss'
import logo from '../../assets/header/Frame 9.png'
import ContactUs from '../get-in-touch-button/ContactUs';
const Header: React.FC = () => {
  return (
    <header className="header">
      <div className="logo">
        <img src={logo} alt="" />
      </div>
      <nav className="nav">
        <ul>
          <li>
            <NavLink to="/" end className={({ isActive }) => (isActive ? "header-active" : "")}>
              Home
            </NavLink>
          </li>
          <li>
            <NavLink to="/about" className={({ isActive }) => (isActive ? "header-active" : "")}>
              About
            </NavLink>
          </li>
          <li>
            <NavLink to="/services" className={({ isActive }) => (isActive ? "header-active" : "")}>
              Services
            </NavLink>
          </li>
        </ul>
        <ContactUs/>
      </nav>
    </header>
  );
};

export default Header;