import React, { useEffect } from "react";
import showcaseImage from "../assets/showcase.jpg"
// import ScrollReveal from "scrollreveal";

const Showcase = () => {
  // useEffect(() => {
  //   ScrollReveal().reveal(".showcase__image img", { origin: "left", duration: 1000 });
  //   ScrollReveal().reveal(".showcase__content h4", { delay: 500 });
  //   ScrollReveal().reveal(".showcase__content p", { delay: 1000 });
  //   ScrollReveal().reveal(".showcase__btn", { delay: 1500 });
  // }, []);

  useEffect(()=>{
    if(window.ScrollReveal){
      const scrollReveal = window.ScrollReveal();
      const scrollRevealOption = {
        origin: "bottom",
        distance: "50px",
        duration: 1000,
      };

      ScrollReveal().reveal(".showcase__image img", {
        ...scrollRevealOption,
        origin: "left",
      });
      ScrollReveal().reveal(".showcase__content h4", {
        ...scrollRevealOption,
        delay: 500,
      });
      ScrollReveal().reveal(".showcase__content p", {
        ...scrollRevealOption,
        delay: 1000,
      });
      ScrollReveal().reveal(".showcase__btn", {
        ...scrollRevealOption,
        delay: 1500,
      });
    }
  },[])

  return (
    // <section className="showcase">
    //   <div className="showcase__image">
    //     <img src="showcase.jpg" alt="Showcase" />
    //   </div>
    //   <div className="showcase__content">
    //     <h4>Showcase Title</h4>
    //     <p>Discover amazing opportunities with us.</p>
    //     <button className="showcase__btn">Explore</button>
    //   </div>
    // </section>
    <section class="section__container showcase__container" id="package">
    <div class="showcase__image">
      <img src={showcaseImage} alt="showcase" />
    </div>
    <div class="showcase__content">
      <h4>UNLEASH WANDERLUST WITH SKYWINGS</h4>
      <p>
        Embark on a journey like no other with Skywings, where your travel
        dreams come to life. Our mission is to inspire and facilitate your
        adventures, whether you seek the vibrant energy of bustling
        cityscapes, the serene beauty of pristine beaches, or the captivating
        history of ancient landmarks. At Skywings, we provide expertly curated
        destinations and personalized itineraries, ensuring that every trip is
        tailored to your unique preferences. Discover hidden gems, immerse
        yourself in diverse cultures, and create unforgettable memories that
        will last a lifetime.
      </p>
      <p>
        With Skywings as your ultimate travel companion, exploring the wonders
        of the world has never been easier. Our insider tips and local
        insights give you the tools to navigate new places with confidence and
        excitement. From the moment you start planning to the day you return
        home, we are dedicated to making your travel experience seamless and
        enriching.
      </p>
      <div class="showcase__btn">
        <button class="btn">
          Book A Flight Now
          <span><i class="ri-arrow-right-line"></i></span>
        </button>
      </div>
    </div>
  </section>

  );
};

export default Showcase;
