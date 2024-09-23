import React from 'react';
import { Helmet } from 'react-helmet';
function About() {
    return (
      <>
      <Helmet>
        <title>About US - Ibex 🐐</title>
      </Helmet>
      <section id="about" className="py-16 bg-white">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-bold mb-8">About Us</h2>
          <p className="text-gray-700 max-w-2xl mx-auto">
            Ibex is a global leader in customer engagement solutions. Our mission
            is to provide exceptional services that help our clients build
            stronger relationships with their customers. We specialize in
            customer support, technical support, and sales support, with a focus
            on delivering excellence.
          </p>
        </div>
       
      </section>
      </>
    );
  };
  
  export default About;