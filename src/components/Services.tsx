import React from 'react';
import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet';
function Services() {
  const services = [
    { title: 'Customer Support', description: 'Best-in-class customer engagement services.', icon: '🛎️' },
    { title: 'Sales', description: 'Enhancing sales strategies to maximize revenue.', icon: '💼' },
    { title: 'Technical Support', description: 'Comprehensive technical support for all needs.', icon: '🔧' },
  ];
    
      return (
        <>
        <Helmet>
          <title>Services - Ibex 🐐</title>
        </Helmet>
        <section id="services" className="py-16 bg-gray-100">
          <div className="container mx-auto px-4">
            <motion.h2 className="text-4xl font-bold text-center mb-8" 
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}>
            Our Services
            </motion.h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {services.map((service, index) => (
                <div key={index} className="bg-white p-6 shadow-lg rounded-lg text-center">
                  <motion.div className="text-6xl" 
                     initial={{ opacity: 0, scale: 0.8 }}
                     whileInView={{ opacity: 1, scale: 1 }}
                     transition={{ duration: 0.8, delay: 0.2 }}>
                    {service.icon}
                    </motion.div>
                  <motion.h3 className="text-6xl font-semibold mb-4" 
                       initial={{ opacity: 0, scale: 0.8 }}
                       whileInView={{ opacity: 1, scale: 1 }}
                       transition={{ duration: 0.8, delay: 0.2 }}>
                        {service.title}
                        </motion.h3>
                  <motion.p className="mt-2 text-gray-600" 
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.8, delay: 0.2 }}>
                    {service.description}
                    </motion.p>
                </div>
              ))}
            </div>
          </div>
        </section>
        </>
      );
    };
    
    export default Services;