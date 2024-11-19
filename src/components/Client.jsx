import { useEffect } from "react"
import React from 'react'

import client1Img from "../assets/client-1.jpg"
import client2Img from "../assets/client-2.jpg"
import client3Img from "../assets/client-3.jpg"
import client4Img from "../assets/client-4.jpg"

export default function Client() {
    useEffect(() => {
    const swiper = new Swiper(".swiper", {
        slidesPerView: 2,
        spaceBetween: 20,
        loop: true,
      });
      }, []);

  return (
    <section class="section__container client__container">
    <h2 class="section__header">Loved By Over Thousand Travelers</h2>
    <p class="section__description">
      Discover the stories of wanderlust and cherished memories through the
      eyes of our valued clients.
    </p>
   
    <div class="swiper">
      
      <div class="swiper-wrapper">
       
        <div class="swiper-slide">
          <div class="client__card">
            <div class="client__content">
              <div class="client__rating">
                <span><i class="ri-star-fill"></i></span>
                <span><i class="ri-star-fill"></i></span>
                <span><i class="ri-star-fill"></i></span>
                <span><i class="ri-star-fill"></i></span>
                <span><i class="ri-star-fill"></i></span>
              </div>
              <p>
                Skywings has completely transformed my travel experience. From
                finding hidden gems in bustling cities to discovering serene
                retreats off the beaten path, every detail was thoughtfully
                arranged. I can't recommend Skywings enough for anyone looking
                to elevate their travel experience!
              </p>
            </div>
            <div class="client__details">
              <img src={client1Img} alt="client" />
              <div>
                <h4>John Adams</h4>
                <h5>Travel Blogger</h5>
              </div>
            </div>
          </div>
        </div>
        <div class="swiper-slide">
          <div class="client__card">
            <div class="client__content">
              <div class="client__rating">
                <span><i class="ri-star-fill"></i></span>
                <span><i class="ri-star-fill"></i></span>
                <span><i class="ri-star-fill"></i></span>
                <span><i class="ri-star-fill"></i></span>
                <span><i class="ri-star-fill"></i></span>
              </div>
              <p>
                My recent adventure with Skywings was nothing short of
                spectacular. The personalized itineraries and recommendations
                they provided led me to extraordinary locations that I would
                never have found on my own. I'm already planning my next
                adventure with them!
              </p>
            </div>
            <div class="client__details">
              <img src={client2Img} alt="client" />
              <div>
                <h4>Emily Thompson</h4>
                <h5>Adventure Enthusiast</h5>
              </div>
            </div>
          </div>
        </div>
        <div class="swiper-slide">
          <div class="client__card">
            <div class="client__content">
              <div class="client__rating">
                <span><i class="ri-star-fill"></i></span>
                <span><i class="ri-star-fill"></i></span>
                <span><i class="ri-star-fill"></i></span>
                <span><i class="ri-star-fill"></i></span>
                <span><i class="ri-star-fill"></i></span>
              </div>
              <p>
                Skywings offered a transformative experience for my research
                into historical landmarks. The unique aerial perspectives and
                provided a new level of appreciation and insight into the
                sites I studied. I highly recommend their services to fellow
                historians and cultural enthusiasts.
              </p>
            </div>
            <div class="client__details">
              <img src={client3Img} alt="client" />
              <div>
                <h4>Sarah Lee</h4>
                <h5>Cultural Historian</h5>
              </div>
            </div>
          </div>
        </div>
        <div class="swiper-slide">
          <div class="client__card">
            <div class="client__content">
              <div class="client__rating">
                <span><i class="ri-star-fill"></i></span>
                <span><i class="ri-star-fill"></i></span>
                <span><i class="ri-star-fill"></i></span>
                <span><i class="ri-star-fill"></i></span>
                <span><i class="ri-star-fill"></i></span>
              </div>
              <p>
                Finding a balance between work and travel can be challenging,
                but Skywings made it effortless. Their efficient planning and
                excellent recommendations helped me maximize my downtime and
                enjoy every moment of my trip. I look forward to working with
                them again on future travels.
              </p>
            </div>
            <div class="client__details">
              <img src={client4Img} alt="client" />
              <div>
                <h4>David Patel</h4>
                <h5>Business Executive</h5>
              </div>
            </div>
          </div>
        </div>

        
      </div>
    </div>
  </section>
  )
}
