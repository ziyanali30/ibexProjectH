import React from 'react';
import Services from '../components/Services';
import About from '../components/About';
import Testimonials from '../components/Testimonials';
import Contact from '../components/Contact';
import Hero from '../components/Hero';
function Home(){
  return (
    <section>
      <Hero/>
      <Services />
      <About />
      <Testimonials />
      <Contact />
    </section>
  );
};

export default Home;
