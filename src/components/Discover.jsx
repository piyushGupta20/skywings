import React, { useEffect } from "react";
// import ScrollReveal from "scrollreveal";

const Discover = () => {
  useEffect(() => {
    ScrollReveal().reveal(".discover__card", {
      interval: 500,
      origin: "bottom",
      distance: "50px",
      duration: 1000,
    });
  }, []);

  return (
    // <section className="discover">
    //   <div className="discover__card">Discover 1</div>
    //   <div className="discover__card">Discover 2</div>
    //   <div className="discover__card">Discover 3</div>
    // </section>
    <section class="section__container discover__container">
    <h2 class="section__header">Discover The World From Above</h2>
    <p class="section__description">
      Experience Breathtaking Views and Unique Perspectives
    </p>
    <div class="discover__grid">
      <div class="discover__card">
        <span><i class="ri-camera-lens-line"></i></span>
        <h4>Aerial Cityscapes</h4>
        <p>
          Witness the architectural marvels and bustling streets from
          bird's-eye view, offering a unique perspective.
        </p>
      </div>
      <div class="discover__card">
        <span><i class="ri-ship-line"></i></span>
        <h4>Coastal Wonders</h4>
        <p>
          Fly over pristine coastlines and turquoise waters, revealing hidden
          coves and vibrant coral reefs.
        </p>
      </div>
      <div class="discover__card">
        <span><i class="ri-landscape-line"></i></span>
        <h4>Historic Landmarks</h4>
        <p>
          Observe the grandeur of ancient castles and other significant sites
          in a way that ground tours can't offer.
        </p>
      </div>
    </div>
  </section>
  );
};

export default Discover;
