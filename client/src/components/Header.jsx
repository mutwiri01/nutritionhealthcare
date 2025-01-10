import { useState } from 'react';
import { Link } from 'react-router-dom';
import '../css/Header.css';
import { FaChevronDown } from 'react-icons/fa';

// Replace with the path to your logo image
import LogoImage from '/l1.png';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(null);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const toggleDropdown = (index) => {
    setDropdownOpen(dropdownOpen === index ? null : index);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
    setDropdownOpen(null);
  };

  const links = [
    {
      title: 'About us',
      dropdown: [
        { name: 'About us', to: '/' },
      ],
    },
    {
      title: 'Who we are',
      dropdown: [
        { name: 'Publications', to: '/education' },
      ],
    },
    {
      title: 'What we do',
      dropdown: [
        { name: 'Health Coaching', to: '/health-coaching' },
        { name: 'Education', to: '/education' },
        { name: 'Campaign', to: '/campaign' },
        { name: 'Projects', to: '/projects' },
        { name: 'Food Store', to: '/food-store' },
      ],
    },
    {
      title: 'Research',
      dropdown: [
        { name: 'Ai Assisted Research', to: '/research' },
      ],
    },
    {
      title: 'Resource Center',
      dropdown: [
        { name: 'Articles', to: '/resource-center' },
      ],
    },
  ];

  return (
    <header className="header-container">
      <nav className="nav">
        <Link to="/" className="logo" onClick={closeMenu}>
          <img src={LogoImage} alt="Logo" className="logo-image" />
        </Link>
        <button className="menu-button" onClick={toggleMenu}>
          ☰
        </button>
        <div className={`nav-links ${isMenuOpen ? 'open' : ''}`}>
          {links.map((link, index) => (
            <div key={index} className="nav-item">
              <div className="nav-link-wrapper" onClick={() => toggleDropdown(index)}>
                <Link to={link.to} className="nav-link">
                  {link.title}
                </Link>
                {link.dropdown && <FaChevronDown className="dropdown-icon" />}
              </div>
              {dropdownOpen === index && (
                <div className="dropdown">
                  {link.dropdown.map((item, idx) => (
                    <Link
                      to={item.to}
                      key={idx}
                      className="dropdown-link"
                      onClick={closeMenu}
                    >
                      {item.name}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      </nav>
    </header>
  );
};

export default Header;
