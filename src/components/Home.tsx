import React from 'react';
import Services from '../components/Services';
import About from '../components/About';
import Testimonials from '../components/Testimonials';
import Contact from '../components/Contact';
import Hero from '../components/Hero';
import { Helmet } from 'react-helmet';
import AnalyticsComponent from './analytics';
function Home(){
  return (
    <section >
      
      <Hero/>
      <Services />
      <Testimonials />
      <About />
      <Contact />
      <Helmet>
        <title>Home</title>
      </Helmet>
    </section>
  );
};

export default Home;
