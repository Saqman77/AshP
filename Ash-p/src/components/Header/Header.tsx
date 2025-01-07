import { NavLink } from 'react-router-dom';
import './Header.scss'
const Header: React.FC = () => {
  return (
    <header className="header">
      <div className="logo">
        <h1>logo</h1>
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
          <li>
            <NavLink to="/contact" className={({ isActive }) => (isActive ? "header-active" : "")}>
              <button>Contact</button>
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;