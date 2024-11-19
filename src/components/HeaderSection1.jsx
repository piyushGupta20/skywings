import { useEffect } from 'react';

const HeroSection = () => {
  useEffect(() => {
    if (window.ScrollReveal) {
      const scrollReveal = window.ScrollReveal();
      
      scrollReveal.reveal(".header__image img", {
        origin: "right",
        distance: "50px",
        duration: 1000,
      });

      // Continue with your other ScrollReveal setups here
    }
  }, []);

  return (
    <section className="hero-section">
      {/* Your Hero Section content */}
    </section>
  );
};

export default HeroSection;
