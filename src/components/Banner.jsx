import React, { useEffect } from "react";
// import ScrollReveal from "scrollreveal";

const Banner = () => {
  useEffect(() => {
    ScrollReveal().reveal(".banner__card", {
      interval: 500,
      origin: "bottom",
      distance: "50px",
      duration: 1000,
    });
  }, []);

  return (
    <section class="section__container banner__container">
      <div class="banner__card">
        <h4>10+</h4>
        <p>Years Experience</p>
      </div>
      <div class="banner__card">
        <h4>12K</h4>
        <p>Happy Clients</p>
      </div>
      <div class="banner__card">
        <h4>4.8</h4>
        <p>Overall Ratings</p>
      </div>
    </section>
  );
};

export default Banner;
