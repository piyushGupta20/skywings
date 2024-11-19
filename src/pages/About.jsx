import React from 'react'


import './about.css'


const About = () => {
  return (
    <div className="about-us-container">
      {/* Section 1: About the Company */}
      <section className="section-container" id="about-us">
        <div className="section-header">About SkyWings</div>
        <div className="section-description">
          At SkyWings, we are passionate about providing exceptional air travel
          experiences. Our mission is to connect people, cultures, and
          communities, offering safe, reliable, and comfortable flights. With
          years of experience in the industry, we pride ourselves on our
          commitment to customer satisfaction and excellence in every flight.
        </div>

        
        <div className="showcase-container">
          <div className="showcase-image">
            <img
              src="https://plus.unsplash.com/premium_photo-1679758630055-99ebb2df7d77"
              alt="SkyWings Airplanes"
            />
          </div>
          {/* <div className="showcase-content">
            <h4>Our Story</h4>
            <p>
              Founded in 2001, SkyWings has grown from a small regional airline
              into a global leader in air travel. With an unwavering focus on
              customer service and innovation, we are continually evolving to
              meet the needs of our passengers and provide a top-notch flying
              experience.
            </p>
          </div> */}
        </div>
        <div className="showcase-content">
            <h4>Our Story</h4>
            <p>
              Founded in 2001, SkyWings has grown from a small regional airline
              into a global leader in air travel. With an unwavering focus on
              customer service and innovation, we are continually evolving to
              meet the needs of our passengers and provide a top-notch flying
              experience.
            </p>
          </div>
      </section>

      {/* Section 2: Our Values */}
      <section className="section-container" id="our-values">
        <div className="section-header">Our Core Values</div>
        <div className="section-description">
          At SkyWings, we believe that our core values guide everything we do.
          These principles shape our culture, define our service, and help us
          build lasting relationships with our customers and partners.
        </div>
        <div className="destination-grid">
          <div className="destination-card">
            <img
              src="https://images.pexels.com/photos/29399009/pexels-photo-29399009/free-photo-of-chillon-castle-by-lake-geneva-in-summer.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              alt="Safety First"
            />
            <div className="destination-card-details">
              <h4>Safety First</h4>
              <p>
                We prioritize safety in every aspect of our operations. Our
                pilots and crew are trained to the highest standards, ensuring
                you a safe journey every time.
              </p>
            </div>
          </div>
          <div className="destination-card">
            <img
              src="https://images.unsplash.com/photo-1560264357-8d9202250f21?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="Customer Care"
            />
            <div className="destination-card-details">
              <h4>Customer Care</h4>
              <p>
                Our passengers are at the heart of everything we do. From
                booking to landing, we are committed to delivering exceptional
                customer service and an unforgettable flying experience.
              </p>
            </div>
          </div>
          <div className="destination-card">
            <img
              src="https://images.unsplash.com/photo-1483375801503-374c5f660610?"
              alt="Innovation"
            />
            <div className="destination-card-details">
              <h4>Innovation</h4>
              <p>
                SkyWings is always looking towards the future. Through
                cutting-edge technology, sustainability efforts, and continuous
                improvement, we strive to revolutionize the air travel industry.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Section 3: Meet Our Team */}
      {/* <section className="section-container" id="meet-our-team">
        <div className="section-header">Meet Our Team</div>
        <div className="section-description">
          Our dedicated team is what sets SkyWings apart. From pilots to
          customer service agents, every member of the SkyWings family is
          committed to providing the best experience for our passengers. Let’s
          meet the faces behind our success.
        </div>
        <div className="discover-grid">
          <div className="discover-card">
            <span className="material-icons">account_circle</span>
            <h4>John Doe</h4>
            <p>CEO & Founder</p>
          </div>
          <div className="discover-card">
            <span className="material-icons">account_circle</span>
            <h4>Jane Smith</h4>
            <p>Chief Pilot</p>
          </div>
          <div className="discover-card">
            <span className="material-icons">account_circle</span>
            <h4>Emily Johnson</h4>
            <p>Head of Customer Service</p>
          </div>
        </div>
      </section> */}
    </div>
  )
}

export default About