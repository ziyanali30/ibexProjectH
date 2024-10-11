import React from 'react';
import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet';
import Testimonials from './Testimonials'; // Import the Testimonials component
import Contact from './Contact';
import AnalyticsComponent from './analytics';

const ITSupport: React.FC = () => {
  const itServices = [
    { title: '24/7 Technical Support', description: 'We provide round-the-clock support for your business needs, ensuring all technical issues are promptly addressed.', icon: '🌐' },
    { title: 'Network Setup & Management', description: 'Reliable network infrastructure setup and management to keep your operations running smoothly.', icon: '🔧' },
    { title: 'Software Installation & Updates', description: 'Comprehensive installation and regular updates for your business software, ensuring optimal performance.', icon: '💻' },
    { title: 'Data Backup & Recovery', description: 'Secure backup and recovery solutions to safeguard your business-critical data and ensure quick recovery.', icon: '📦' },
  ];

  const webDevServices = [
    { title: 'Custom Website Development', description: 'Building tailored websites that reflect your brand and business goals, focusing on performance and user experience.', icon: '🖥️' },
    { title: 'E-commerce Solutions', description: 'End-to-end solutions to build, optimize, and manage your online store, driving traffic and increasing sales.', icon: '🛒' },
    { title: 'SEO & Optimization', description: 'Improving your website’s search engine rankings and overall performance for better visibility and user engagement.', icon: '🚀' },
  ];

  const mobileDevServices = [
    { title: 'iOS App Development', description: 'Designing sleek, intuitive, and functional apps for the iOS platform to meet the needs of your customers.', icon: '🍏' },
    { title: 'Android App Development', description: 'Developing high-performance apps for the Android platform, focusing on speed, usability, and compatibility.', icon: '🤖' },
    { title: 'Cross-Platform Apps', description: 'Seamless cross-platform app development to provide a unified experience on both iOS and Android devices.', icon: '🌐' },
  ];

  const whyChooseUsPoints = [
    'Expert team with over 15 years of industry experience.',
    'Tailored solutions for small businesses, startups, and enterprises.',
    '24/7 technical support and proactive monitoring.',
    'Proven track record of reliable network and IT services.',
    'Affordable pricing with scalable plans to match your needs.'
  ];

  const faqItems = [
    { question: 'What industries do you serve?', answer: 'We serve a wide range of industries including retail, finance, healthcare, education, and more.' },
    { question: 'Do you offer remote and on-site support?', answer: 'Yes, we offer both remote and on-site support depending on your specific needs.' },
    { question: 'How do you ensure network security?', answer: 'We implement the latest security protocols, regular monitoring, and timely updates to protect your network from cyber threats.' },
    { question: 'Can you help with data recovery?', answer: 'Absolutely. Our team specializes in data backup and recovery to help you retrieve lost or corrupted data.' },
  ];

  return (
    <>
      <Helmet>
        <title>IT Support - AXIMO 🐐</title>
      </Helmet>
      <section className="py-16 bg-gray-100 w-full dark:bg-gray-800">
        <div className="container mx-auto px-4">
          {/* IT Support Services */}
          <motion.h2
            className="text-4xl font-bold text-center mb-8 text-black dark:text-darkText"
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}>
            IT Support Services
          </motion.h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {itServices.map((service, index) => (
              <motion.div
                key={index}
                className="bg-white p-6 shadow-lg rounded-lg text-center dark:bg-gray-700"
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}>
                <div className="text-6xl mb-4">{service.icon}</div>
                <h5 className="text-2xl font-semibold mb-2 text-black dark:text-white">{service.title}</h5>
                <p className="text-gray-700 dark:text-gray-300">{service.description}</p>
              </motion.div>
            ))}
          </div>

          {/* Web Development Services */}
          <motion.h2
            className="text-4xl font-bold text-center mt-16 mb-8 text-black dark:text-darkText"
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}>
            Web Development Services
          </motion.h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {webDevServices.map((service, index) => (
              <motion.div
                key={index}
                className="bg-white p-6 shadow-lg rounded-lg text-center dark:bg-gray-700"
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}>
                <div className="text-6xl mb-4">{service.icon}</div>
                <h5 className="text-2xl font-semibold mb-2 text-black dark:text-white">{service.title}</h5>
                <p className="text-gray-700 dark:text-gray-300">{service.description}</p>
              </motion.div>
            ))}
          </div>

          {/* Mobile App Development Services */}
          <motion.h2
            className="text-4xl font-bold text-center mt-16 mb-8 text-black dark:text-darkText"
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}>
            Mobile App Development Services
          </motion.h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {mobileDevServices.map((service, index) => (
              <motion.div
                key={index}
                className="bg-white p-6 shadow-lg rounded-lg text-center dark:bg-gray-700"
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}>
                <div className="text-6xl mb-4">{service.icon}</div>
                <h5 className="text-2xl font-semibold mb-2 text-black dark:text-white">{service.title}</h5>
                <p className="text-gray-700 dark:text-gray-300">{service.description}</p>
              </motion.div>
            ))}
          </div>

          {/* Why Choose Us Section */}
          <motion.h2
            className="text-4xl font-bold text-center mt-16 mb-8 text-black dark:text-darkText"
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}>
            Why Choose Us
          </motion.h2>

          <ul className="list-disc pl-6 md:pl-16 space-y-4 text-gray-700 dark:text-gray-300">
            {whyChooseUsPoints.map((point, index) => (
              <motion.li
                key={index}
                className="text-lg"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}>
                {point}
              </motion.li>
            ))}
          </ul>

          {/* FAQ Section */}
          <motion.h2
            className="text-4xl font-bold text-center mt-16 mb-8 text-black dark:text-darkText"
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}>
            Frequently Asked Questions
          </motion.h2>

          <div className="space-y-8">
            {faqItems.map((item, index) => (
              <motion.div
                key={index}
                className="bg-white p-6 shadow-lg rounded-lg dark:bg-gray-700"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}>
                <h5 className="text-2xl font-semibold mb-2 text-black dark:text-white">
                  {item.question}
                </h5>
                <p className="text-gray-700 dark:text-gray-300">{item.answer}</p>
              </motion.div>
            ))}
          </div>

          <Testimonials />
          <Contact></Contact>
        </div>
      </section>
    </>
  );
};

export default ITSupport;
