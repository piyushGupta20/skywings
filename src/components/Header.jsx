import React, { useState,useEffect } from "react";

import bannerImage from "../assets/header.png"

const Header = () => {
  const [isNavOpen, setIsNavOpen] = useState(false);

  useEffect(() => {
    if (window.ScrollReveal) {
      const scrollReveal = window.ScrollReveal();
      

      const scrollRevealOption = {
        origin: "bottom",
        distance: "50px",
        duration: 1000,
      };

      scrollReveal.reveal(".header__image img", {
        ...scrollRevealOption,
        origin: "right",
      });
      scrollReveal.reveal(".header__content p", {
        ...scrollRevealOption,
        delay: 500,
      });
      scrollReveal.reveal(".header__content h1", {
        ...scrollRevealOption,
        delay: 1000,
      });
      scrollReveal.reveal(".header__btns", {
        ...scrollRevealOption,
        delay: 1500,
      });
    }
  }, []);



  const toggleMenu = () => {
    setIsNavOpen((prevState) => !prevState);
  };

  const closeMenu = () => {
    setIsNavOpen(false);
  };

  

  return (
    // <header>
    //   <nav>
    //     <div id="menu-btn" onClick={toggleMenu}>
    //       <i className={isNavOpen ? "ri-close-line" : "ri-menu-line"}></i>
    //     </div>
    //     <ul id="nav-links" className={isNavOpen ? "open" : ""} onClick={closeMenu}>
    //       <li><a href="#home">Home</a></li>
    //       <li><a href="#about">About</a></li>
    //       <li><a href="#services">Services</a></li>
    //       <li><a href="#contact">Contact</a></li>
    //     </ul>
    //   </nav>
    // </header>
    <header id="home">
    <div class="header__container">
      <div class="header__content">
        <p>ELEVATE YOUR TRAVEL JOURNEY</p>
        <h1>Experience The Magic Of Flight!</h1>
        <div class="header__btns">
          <button class="btn">Book A Trip Now</button>
          <a href="#">
            <span><i class="ri-play-circle-fill"></i></span>
          </a>
        </div>
      </div>
      <div class="header__image">
        <img src={bannerImage} alt="header" />
      </div>
    </div>
  </header>

  );
};

export default Header;
