import React from 'react';
import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet';
import Testimonials from './Testimonials'; // Import the Testimonials component

const ITSupport: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>IT Support - Ibex 🐐</title>
      </Helmet>
      <section className="py-16 bg-gray-100 w-full dark:bg-gray-800">
        <div className="container mx-auto px-4">
          <motion.h2
            className="text-4xl font-bold text-center mb-8 text-black dark:text-darkText"
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}>
            IT Support Services
          </motion.h2>
          <motion.div
            className="bg-white p-6 shadow-lg rounded-lg text-center mx-auto mb-8"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}>
            <motion.div className="text-6xl mb-4" animate={{ rotate: [0, 10, -10, 0] }} transition={{ duration: 1 }}>
              🖥️
            </motion.div>
            <motion.p
              className="text-gray-700 mb-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}>
              Our IT Support services provide comprehensive assistance for all your technical needs. From troubleshooting to network management, we are here to help!
            </motion.p>
          </motion.div>

          {/* Web Development Section */}
          <motion.h3
            className="text-2xl font-semibold text-center mb-4"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}>
            What We Offer:
          </motion.h3>
          <ul className="list-disc list-inside text-left mx-auto max-w-xl mb-8">
            <motion.li
              className="mb-2 text-gray-600"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.6 }}>
              24/7 Technical Support 🌐
            </motion.li>
            <motion.li
              className="mb-2 text-gray-600"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.7 }}>
              Network Setup and Management 🔧
            </motion.li>
            <motion.li
              className="mb-2 text-gray-600"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.8 }}>
              Software Installation and Updates 💻
            </motion.li>
            <motion.li
              className="mb-2 text-gray-600"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.9 }}>
              Data Backup and Recovery Solutions 📦
            </motion.li>
          </ul>

          {/* Web Development Services Section */}
          <motion.h3
            className="text-2xl font-semibold text-center mb-4"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1 }}>
            Web Development Services:
          </motion.h3>
          <motion.div
            className="bg-white p-6 shadow-lg rounded-lg text-center mx-auto mb-8"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}>
            <motion.p
              className="text-gray-700 mb-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}>
              We offer custom web development services to create stunning, responsive websites tailored to your business needs. 🌍
            </motion.p>
            <ul className="list-disc list-inside text-left mx-auto max-w-xl mb-8">
              <motion.li
                className="mb-2 text-gray-600"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.6 }}>
                Custom Website Development 🖥️
              </motion.li>
              <motion.li
                className="mb-2 text-gray-600"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.7 }}>
                E-commerce Solutions 🛒
              </motion.li>
              <motion.li
                className="mb-2 text-gray-600"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.8 }}>
                SEO and Performance Optimization 🚀
              </motion.li>
            </ul>
          </motion.div>

          {/* Mobile App Development Services Section */}
          <motion.h3
            className="text-2xl font-semibold text-center mb-4"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1 }}>
            Mobile App Development Services:
          </motion.h3>
          <motion.div
            className="bg-white p-6 shadow-lg rounded-lg text-center mx-auto mb-8"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}>
            <motion.p
              className="text-gray-700 mb-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}>
              Our team specializes in mobile app development for both iOS and Android platforms, ensuring a seamless user experience. 📱
            </motion.p>
            <ul className="list-disc list-inside text-left mx-auto max-w-xl mb-8">
              <motion.li
                className="mb-2 text-gray-600"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.6 }}>
                iOS App Development 🍏
              </motion.li>
              <motion.li
                className="mb-2 text-gray-600"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.7 }}>
                Android App Development 🤖
              </motion.li>
              <motion.li
                className="mb-2 text-gray-600"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.8 }}>
                Cross-Platform App Development 🌐
              </motion.li>
            </ul>
          </motion.div>

          {/* Testimonials Section */}
          <Testimonials />

          <motion.div
            className="text-center mt-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1 }}>
            <button className="bg-blue-600 text-white px-6 py-3 rounded hover:bg-blue-500 transition duration-300">
              Contact Us for More Info
            </button>
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default ITSupport;