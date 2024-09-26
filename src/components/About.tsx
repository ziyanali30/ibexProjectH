import React from 'react';
import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet';
function About() {
    return (
      <>
      <Helmet>
        <title>About US - Ibex 🐐</title>
      </Helmet>
      <section className="py-12 bg-gray-100">
      <div className="container mx-auto px-4">
      <motion.h2
          className="text-4xl font-bold text-center mb-8"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          About Ibex
        </motion.h2>
        <motion.p
          className="text-lg text-center text-gray-600 max-w-2xl mx-auto mb-8"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          At Ibex, we redefine customer engagement strategies to ensure the success of our partners. Our solutions are crafted to deliver innovation, efficiency, and outstanding customer experiences.
        </motion.p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">

          <motion.div className="bg-white shadow-lg rounded-lg p-6 text-center"
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          >
            <h3 className="text-xl font-semibold mb-2">Global Presence</h3>
            <p className="text-gray-600">With operations in over 20 countries, we are truly a global leader.</p>
          </motion.div>
          
          <motion.div className="bg-white shadow-lg rounded-lg p-6 text-center"
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.5 }}>
            <h3 className="text-xl font-semibold mb-2">Innovative Solutions</h3>
            <p className="text-gray-600">Our cutting-edge technology drives efficiency in all sectors.</p>
          </motion.div>

          <motion.div className="bg-white shadow-lg rounded-lg p-6 text-center"
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.5 }}>
            <h3 className="text-xl font-semibold mb-2">Award-Winning Support</h3>
            <p className="text-gray-600">Our customer support has won numerous awards across the globe.</p>
          </motion.div>
        </div>
      </div>
    </section>
      </>
    );
  };
  
  export default About;