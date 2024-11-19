import React, { useState } from 'react'; // Make sure you import the CSS for styling
import { Link, useNavigate } from 'react-router-dom';

const Navbar = () => {
  // State to toggle the navigation menu
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navigator = useNavigate();

  // Toggle the menu open/close
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  
  return (
    <nav>
      <div className="nav__header">
        <div className="nav__logo">
          <Link to={"/"} className="logo">Skywings</Link>
        </div>

        {/* Hamburger Icon */}
        <div className="nav__menu__btn" onClick={toggleMenu}>
          <i className={isMenuOpen ? 'ri-close-line' : 'ri-menu-line'}></i>
        </div>
      </div>

      {/* Navigation Links */}
      <ul className={`nav__links ${isMenuOpen ? 'open' : ''}`}>
        <li><Link to={"/"} >HOME</Link></li>
        <li><Link to={"/about"} >ABOUT</Link></li>
        <li><Link to={"/tour"} >TOUR</Link></li>
        <li><Link to={"/package"} >PACKAGE</Link></li>
        <li><Link to={"/contact"} >CONTACT</Link></li>
        <li><Link to={"/book-trip"} >BOOK TRIP</Link></li>
      </ul>

      {/* Optional Button for Larger Screens */}
      <div className="nav__btns">
        <button className="btn" onClick={() => navigator("/book-trip")} >BOOK TRIP</button>
      </div>
    </nav>
  );
};

export default Navbar;
