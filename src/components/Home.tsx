import React from 'react';
import Services from '../components/Services';
import About from '../components/About';
import Testimonials from '../components/Testimonials';
import Contact from '../components/Contact';
function Home(){
  return (
    <section>
      <Services />
      <About />
      <Testimonials />
      <Contact />
    </section>
  );
};

export default Home;
