import React, { useEffect } from "react";
// import ScrollReveal from "scrollreveal";

import dest1 from "../assets/destination-1.jpg"
import dest2 from "../assets/destination-2.jpg"
import dest3 from "../assets/destination-3.jpg"

const Destinations = () => {
  useEffect(() => {
    // ScrollReveal().reveal(".destination__card", {
    //   interval: 500,
    //   origin: "bottom",
    //   distance: "50px",
    //   duration: 1000,
    // });

    if (window.ScrollReveal) {
      const scrollReveal = window.ScrollReveal();
      


    const scrollRevealOption = {
      origin: "bottom",
      distance: "50px",
      duration: 1000,
    };

    scrollReveal.reveal(".destination__card", {
      ...scrollRevealOption,
      interval: 500,
    });

  }
  }, []);

  return (
    
    <section class="section__container destination__container" id="about">
      <h2 class="section__header">Popular Destination</h2>
      <p class="section__description">
        Discover the Most Loved Destinations Around the Globe
      </p>
      <div class="destination__grid">
        <div class="destination__card">
          <img src={dest1} alt="destination" />
          <div class="destination__card__details">
            <div>
              <h4>Tradition and Futurism</h4>
              <p>New York City, USA</p>
            </div>
            <div class="destination__rating">
              <span><i class="ri-star-fill"></i></span>
              4.7
            </div>
          </div>
        </div>
        <div class="destination__card">
          <img src={dest2} alt="destination" />
          <div class="destination__card__details">
            <div>
              <h4>The City of Lights</h4>
              <p>Paris, France</p>
            </div>
            <div class="destination__rating">
              <span><i class="ri-star-fill"></i></span>
              4.5
            </div>
          </div>
        </div>
        <div class="destination__card">
          <img src={dest3} alt="destination" />
          <div class="destination__card__details">
            <div>
              <h4>Island of the Gods</h4>
              <p>Bali, Indonesia</p>
            </div>
            <div class="destination__rating">
              <span><i class="ri-star-fill"></i></span>
              4.8
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Destinations;
