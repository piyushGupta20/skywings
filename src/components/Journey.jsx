import React from 'react'

export default function Journey() {
  return (
    <section class="section__container journey__container" id="tour">
    <h2 class="section__header">Journey To The Sky Made Simple!</h2>
    <p class="section__description">
      Effortless Planning for Your Next Adventure
    </p>
    <div class="journey__grid">
      <div class="journey__card">
        <div class="journey__card__bg">
          <span><i class="ri-bookmark-3-line"></i></span>
          <h4>Seamless Booking Process</h4>
        </div>
        <div class="journey__card__content">
          <span><i class="ri-bookmark-3-line"></i></span>
          <h4>Easy Reservations, One Click Away</h4>
          <p>
            From flights and accommodations to activities and transfers,
            everything you need is available at your fingertips, making travel
            planning effortless.
          </p>
        </div>
      </div>
      <div class="journey__card">
        <div class="journey__card__bg">
          <span><i class="ri-landscape-fill"></i></span>
          <h4>Tailored Itineraries</h4>
        </div>
        <div class="journey__card__content">
          <span><i class="ri-landscape-fill"></i></span>
          <h4>Customized Plans Just for You</h4>
          <p>
            Enjoy personalized travel plans designed to match your preferences
            and interests. Whether you seek adventure or cultural immersion,
            our tailored itineraries ensure your journey is uniquely yours.
          </p>
        </div>
      </div>
      <div class="journey__card">
        <div class="journey__card__bg">
          <span><i class="ri-map-2-line"></i></span>
          <h4>Expert Local Insights</h4>
        </div>
        <div class="journey__card__content">
          <span><i class="ri-map-2-line"></i></span>
          <h4>Insider Tips and Recommendations</h4>
          <p>
            We provide curated recommendations for dining, sightseeing, and
            hidden gems, so you can experience each destination like a local.
          </p>
        </div>
      </div>
    </div>
  </section>
  )
}
