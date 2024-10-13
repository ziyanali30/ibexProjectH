import React from 'react';
import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom
import AnalyticsComponent from './analytics';

function Services() {
  const services = [
    { title: 'IT Solutions', description: 'Comprehensive IT support for all needs.', icon: '🖥️', link: '/services/IT' },  // Added link property
    { title: 'BPO Services', description: 'Enhancing sales strategies to maximize revenue.', icon: '💼',link:'/services/bpo' },
    { title: 'Technical Support', description: 'Comprehensive technical support for all needs.', icon: '🔧' },
  ];
    
  return (
    <>
      <Helmet>
        <title>Services - AXIMO </title>
      </Helmet>
      <section id="services" className="py-16 bg-gray-100 w-full dark:bg-gray-800">
        <div className="container-fluid mx-auto dark:bg-gray-800">
          <motion.h2 
            className="text-4xl font-bold text-center mb-8 text-black dark:text-darkText"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            Our Services
          </motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-1">
            {services.map((service, index) => (
              <div key={index} className="bg-white p-6 shadow-lg rounded-lg text-center mx-4">
                <motion.div
                  className="text-6xl"
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.8, delay: 0.2 }}
                >
                  {service.icon}
                </motion.div>
                
                {/* Check if the service has a link and wrap it in a Link component */}
                {service.link ? (
                  <Link to={service.link}>
                    <motion.h5
                      className="text-2xl mt-4 font-semibold mb-4"
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.8, delay: 0.2 }}
                    >
                      {service.title}
                    </motion.h5>
                  </Link>
                ) : (
                  <motion.h5
                    className="text-2xl mt-4 font-semibold mb-4"
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                  >
                    {service.title}
                  </motion.h5>
                )}
                
                <motion.p
                  className="mt-2 text-gray-600"
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.8, delay: 0.2 }}
                >
                  {service.description}
                </motion.p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

export default Services;
